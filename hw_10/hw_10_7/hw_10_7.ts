function addToLocalStorage(arrayName: string, objToAdd: object) {
  let storage: string | null = localStorage.getItem(arrayName);
  console.log(" storage:", storage);

  const array: object[] = storage ? JSON.parse(storage) : [];

  array.push(objToAdd);

  localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage("sessionsList", {});
