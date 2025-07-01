type AuthorType = { name: string; age: number };
type Book_2_3 = {
  title: string;
  pageCount: number;
  genre: string;
  authors: AuthorType[];
};

let book11: Book_2_3 = {
  title: "Harry Potter",
  pageCount: 348,
  genre: "Fantasy",
  authors: [
    { name: "J.K. Rowling", age: 1997 },
    { name: "Rowling", age: 1997 },
  ],
};
let book22: Book_2_3 = {
  title: "Pinocchio",
  pageCount: 125,
  genre: "Fairy Tale",
  authors: [
    { name: "Carlo Collodi", age: 1883 },
    { name: "Collodi", age: 1883 },
  ],
};
let book33: Book_2_3 = {
  title: "It",
  pageCount: 453,
  genre: "Horror",
  authors: [
    { name: "Stephen King", age: 1986 },
    { name: "King", age: 1986 },
  ],
};
console.log(book11);
console.log(book22);
console.log(book33);
