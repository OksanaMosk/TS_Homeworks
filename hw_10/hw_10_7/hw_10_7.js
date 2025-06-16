function addToLocalStorage(arrayName, objToAdd) {
  let storage = localStorage.getItem(arrayName);
  console.log(" storage:", storage);
  if (!storage) {
    throw new Error("there is no array");
  }
  const array = JSON.parse(storage);
  if (typeof objToAdd === "object") {
    array.push(objToAdd);
  }
  localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage("sessionsList", {});
