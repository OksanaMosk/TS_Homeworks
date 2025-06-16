const array = [
  {
    description: "Gerbera",
    image:
      "https://media.istockphoto.com/id/2030878699/uk/%D1%84%D0%BE%D1%82%D0%BE/gerbera-flowers-close-up.jpg?s=2048x2048&w=is&k=20&c=XzvJl83GBVGY3uKYIvx7L88GXCcdfkhG8_BD1JFOnn0=",
  },
  {
    description: "Orchids",
    image:
      "https://cdn.pixabay.com/photo/2017/06/05/08/08/orchids-2373204_1280.jpg",
  },
  {
    description: "Buds",
    image:
      "https://cdn.pixabay.com/photo/2020/04/26/18/50/spring-5096680_1280.jpg",
  },
  {
    description: "Rose",
    image:
      "https://cdn.pixabay.com/photo/2020/06/16/12/32/rose-flower-5305496_1280.jpg",
  },
  {
    description: "Moody",
    image:
      "https://cdn.pixabay.com/photo/2017/06/04/21/36/moody-2372252_1280.jpg",
  },
  {
    description: "Lilas",
    image:
      "https://cdn.pixabay.com/photo/2017/06/05/08/08/orchids-2373204_1280.jpg",
  },
  {
    description: "Flower",
    image:
      "https://cdn.pixabay.com/photo/2018/07/01/22/31/flowers-3510626_1280.jpg",
  },
  {
    description: "Daisie",
    image:
      "https://cdn.pixabay.com/photo/2020/06/08/09/18/daisies-5273742_1280.jpg",
  },
  {
    description: "Pion",
    image:
      "https://cdn.pixabay.com/photo/2020/01/02/17/52/pion-4736447_1280.jpg",
  },
  {
    description: "Spring Flowers",
    image:
      "https://cdn.pixabay.com/photo/2017/09/28/22/16/spring-2797274_1280.jpg",
  },
];

for (let i = 0; i < 10; i++) {
  document.write(`
      <div>
        <p>${array[i].description}</p>
        <img src="${array[i].image}" alt="${array[i].description}" style="max-width: 300px;">
      </div>
    `);
}
