let emptyArray = [];
while (emptyArray.length < 10) {
  let randomNumber = Math.floor(Math.random() * 30);
  emptyArray.push(randomNumber);
}
console.log("emptyArray:", emptyArray);

let newArray = [];
for (let i = 0; i < emptyArray.length; i++) {
  newArray.push(emptyArray[i]);
}
console.log("newArray:", newArray);
