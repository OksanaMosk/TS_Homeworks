let arrayAdd322: string[] = ["a", "b", "c"];
let wordAdd322: string = "";
let iAdd322: number = 0;

while (iAdd322 < arrayAdd322.length) {
  wordAdd322 += arrayAdd322[iAdd322];
  iAdd322++;
}
document.write(wordAdd322);
console.log("wordAdd322:", wordAdd322);
