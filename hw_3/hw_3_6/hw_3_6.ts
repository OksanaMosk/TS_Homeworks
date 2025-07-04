type ProductType = {
  title: string;
  price: number;
  image: string;
};

let products: ProductType[] = [
  {
    title: "milk",

    price: 22,

    image:
      "https://cdn.pixabay.com/photo/2015/02/19/21/25/milk-642734_1280.jpg",
    //   "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg",
  },

  {
    title: "juice",

    price: 27,

    image:
      "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
  },

  {
    title: "tomato",

    price: 47,

    image:
      "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
  },

  {
    title: "tea",

    price: 15,

    image:
      "https://cdn.pixabay.com/photo/2020/08/19/17/48/disposable-5501650_1280.jpg",
  },
];
document.write("<ul>");
for (const product of products) {
  document.write(`<li class='product-card'>

        <h3 class='product-title'>${product.title} Price -${product.price}</h3>

        <img src='${product.image}' alt='${product.title}' style="width: 300px" class="product-image" >

</li>`);
}
document.write("</ul>");
