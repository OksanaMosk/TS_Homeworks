interface IProduct {
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface ICart {
  id: number;
  products: IProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface ICartsResponse {
  carts: ICart[];
}

const divCarts: HTMLDivElement = document.getElementById(
  "divCarts"
) as HTMLDivElement;
const list111: HTMLUListElement = document.createElement("ul");
list111.classList.add("cart_list");
divCarts.appendChild(list111);

fetch("https://dummyjson.com/carts")
  .then((value) => value.json())
  .then((cartsObject: ICartsResponse) => {
    // console.log(cartsObject);
    const { carts } = cartsObject;
    // console.log(" carts:", carts);
    for (const cart of carts) {
      const item: HTMLLIElement = document.createElement("li");
      item.classList.add("cart_item");
      list111.appendChild(item);

      const divId: HTMLDivElement = document.createElement("div");
      divId.classList.add("div_id");
      const idDiv: HTMLDivElement = document.createElement("div");
      idDiv.innerText = `Cart ID: ${cart.id}`;
      const userIdDiv: HTMLDivElement = document.createElement("div");
      userIdDiv.innerText = `User ID: ${cart.userId}`;
      divId.append(idDiv, userIdDiv);

      const divPrice: HTMLDivElement = document.createElement("div");
      divPrice.classList.add("div_price");
      const totalDiv: HTMLDivElement = document.createElement("div");
      totalDiv.innerText = `Total Price: $${cart.total}`;
      const discountedDiv: HTMLDivElement = document.createElement("div");
      discountedDiv.innerText = `Discounted Total: $${cart.discountedTotal}`;
      divPrice.append(totalDiv, discountedDiv);

      const divQuantity: HTMLDivElement = document.createElement("div");
      divQuantity.classList.add("div_quantity");
      const totalProductsDiv: HTMLDivElement = document.createElement("div");
      totalProductsDiv.innerText = `Total Products: ${cart.totalProducts}`;
      const totalQuantityDiv: HTMLDivElement = document.createElement("div");
      totalQuantityDiv.innerText = `Total Quantity: ${cart.totalQuantity}`;
      divQuantity.append(totalProductsDiv, totalQuantityDiv);

      const products: IProduct[] = cart.products;

      const productsLIstOfCart: HTMLUListElement = document.createElement("ul");
      productsLIstOfCart.classList.add("list_products");
      item.append(divId, divPrice, productsLIstOfCart, divQuantity);

      for (const itemProduct of products) {
        const productItem: HTMLLIElement = document.createElement("li");
        productItem.classList.add("product_item");
        productsLIstOfCart.appendChild(productItem);

        const productTitle: HTMLHeadingElement = document.createElement("h6");
        productTitle.innerText = itemProduct.title;

        const productImg: HTMLImageElement = document.createElement("img");
        productImg.src = itemProduct.thumbnail;
        productImg.classList.add("cart_img");

        const productPrice: HTMLDivElement = document.createElement("div");
        productPrice.innerText = `Price: $${itemProduct.price}`;

        const productQuantity: HTMLDivElement = document.createElement("div");
        productQuantity.innerText = `Quantity: ${itemProduct.quantity}`;

        const productTotal: HTMLDivElement = document.createElement("div");
        productTotal.innerText = `Total: $${parseFloat(
          itemProduct.total.toFixed(2)
        )}`;

        const productDiscount: HTMLDivElement = document.createElement("div");
        productDiscount.innerText = `Discount: ${itemProduct.discountPercentage}%`;

        const productDiscountedTotal: HTMLDivElement =
          document.createElement("div");
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
