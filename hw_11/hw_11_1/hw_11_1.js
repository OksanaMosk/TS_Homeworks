const divCarts = document.getElementById("divCarts");
const list = document.createElement("ul");
list.classList.add("cart_list");
divCarts.appendChild(list);

fetch("https://dummyjson.com/carts")
  .then((value) => value.json())
  .then((cartsObject) => {
    // console.log(cartsObject);
    const { carts } = cartsObject;
    // console.log(" carts:", carts);
    for (const cart of carts) {
      const item = document.createElement("li");
      item.classList.add("cart_item");
      list.appendChild(item);

      const divId = document.createElement("div");
      divId.classList.add("div_id");
      const idDiv = document.createElement("div");
      idDiv.innerText = `Cart ID: ${cart.id}`;
      const userIdDiv = document.createElement("div");
      userIdDiv.innerText = `User ID: ${cart.userId}`;
      divId.append(idDiv, userIdDiv);

      const divPrice = document.createElement("div");
      divPrice.classList.add("div_price");
      const totalDiv = document.createElement("div");
      totalDiv.innerText = `Total Price: $${cart.total}`;
      const discountedDiv = document.createElement("div");
      discountedDiv.innerText = `Discounted Total: $${cart.discountedTotal}`;
      divPrice.append(totalDiv, discountedDiv);

      const divQuantity = document.createElement("div");
      divQuantity.classList.add("div_quantity");
      const totalProductsDiv = document.createElement("div");
      totalProductsDiv.innerText = `Total Products: ${cart.totalProducts}`;
      const totalQuantityDiv = document.createElement("div");
      totalQuantityDiv.innerText = `Total Quantity: ${cart.totalQuantity}`;
      divQuantity.append(totalProductsDiv, totalQuantityDiv);

      const { products } = cart;

      const productsLIstOfCart = document.createElement("ul");
      productsLIstOfCart.classList.add("list_products");
      item.append(divId, divPrice, productsLIstOfCart, divQuantity);

      for (const itemProduct of products) {
        const productItem = document.createElement("li");
        productItem.classList.add("product_item");
        productsLIstOfCart.appendChild(productItem);

        const productTitle = document.createElement("h6");
        productTitle.innerText = itemProduct.title;

        const productImg = document.createElement("img");
        productImg.src = itemProduct.thumbnail;
        productImg.classList.add("cart_img");

        const productPrice = document.createElement("div");
        productPrice.innerText = `Price: $${itemProduct.price}`;

        const productQuantity = document.createElement("div");
        productQuantity.innerText = `Quantity: ${itemProduct.quantity}`;

        const productTotal = document.createElement("div");
        productTotal.innerText = `Total: $${itemProduct.total}`;

        const productDiscount = document.createElement("div");
        productDiscount.innerText = `Discount: ${itemProduct.discountPercentage}%`;

        const productDiscountedTotal = document.createElement("div");
        productDiscountedTotal.innerText = `Discounted Total: $${itemProduct.discountedTotal}`;

        productItem.append(
          productTitle,
          productImg,
          productPrice,
          productQuantity,
          productTotal,
          productDiscount,
          productDiscountedTotal
        );
      }
    }
  });
