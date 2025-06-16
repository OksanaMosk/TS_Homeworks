let emptyArray = [];
while (emptyArray.length < 10) {
  let randomNumber = Math.floor(Math.random() * 30);
  emptyArray.push(randomNumber);
}
console.log("emptyArray:", emptyArray);
for (let i = 0; i < emptyArray.length; i++) {
  if (emptyArray[i] % 2 === 0) {
    console.log("Елемент, значення якого є парним:", emptyArray[i]);
  }
}
