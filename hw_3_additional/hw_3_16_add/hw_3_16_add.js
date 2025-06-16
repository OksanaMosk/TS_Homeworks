let books = [
  {
    title: "The Book Thief",
    pages: 550,
    authors: ["Markus Zusak"],
    genres: ["Historical", "Novel", "War"],
  },
  {
    title: "To Kill a Mockingbird",
    pages: 281,
    authors: ["Harper Lee"],
    genres: ["Novel", "Drama"],
  },
  {
    title: "War and Peace",
    pages: 1225,
    authors: ["Leo Tolstoy"],
    genres: ["Historical"],
  },
  {
    title: "The Great Gatsby",
    pages: 180,
    authors: ["F. Scott Fitzgerald"],
    genres: ["Novel", "Tragedy"],
  },

  {
    title: "1984",
    pages: 328,
    authors: ["George Orwell"],
    genres: [
      "Dystopian",
      "Historical",
      "Political fiction",
      "Social science fiction",
    ],
  },
  {
    title: "The Catcher in the Rye",
    pages: 277,
    authors: ["J.D. Salinger"],
    genres: ["Novel", "Realistic fiction"],
  },
  {
    title: "Moby-Dick",
    pages: 635,
    authors: ["Herman Melville"],
    genres: ["Adventure", "Epic"],
  },
  {
    title: "The Lord of the Rings",
    pages: 1216,
    authors: ["J.R.R. Tolkien"],
    genres: ["Fantasy", "Adventure"],
  },

  {
    title: "Pride and Prejudice",
    pages: 279,
    authors: ["Jane Austen"],
    genres: ["Romantic fiction", "Novel"],
  },

  {
    title: "Good Omens",
    pages: 412,
    authors: ["Neil Gaiman", "Terry Pratchett"],
    genres: ["Fantasy", "Comedy", "Satire"],
  },
];

let biggestBook = books[0];

for (let i = 0; i < books.length; i++) {
  if (books[i].pages > biggestBook.pages) {
    biggestBook = books[i];
    document.write(`Найбільша книжка: "${books[i].title}"  <br>`);
    console.log(biggestBook);
  }
}

let biggestGenre = books[0].genres.length;
let biggestGenreBook = books[0];
for (let i = 0; i < books.length; i++) {
  if (books[i].genres.length > biggestGenre) {
    biggestGenre = books[i].genres.length;
    biggestGenreBook = books[i];
  }
}
document.write(`Найбільшtе Жанрів: "${biggestGenreBook.title}" <br>`);
console.log(biggestGenreBook);

let largeTitle = books[0].title.length;
let largeTitleBook = books[0];
for (let i = 0; i < books.length; i++) {
  if (books[i].title.length > largeTitle) {
    largeTitle = books[i].title.length;
    largeTitleBook = books[i];
  }
}
document.write(`Найдовша назва:  "${largeTitleBook.title}" <br>`);
console.log(largeTitleBook);

for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 2) {
    document.write(`Два Автора: "${books[i].title}" <br>`);
    console.log(books[i]);
  }
}

for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 1) {
    document.write(`Один Автор: "${books[i].title}" <br>`);
    console.log(books[i]);
  }
}
