"use strict";
function addToLocalStorage(arrayName, objToAdd) {
    let storage = localStorage.getItem(arrayName);
    console.log(" storage:", storage);
    const array = storage ? JSON.parse(storage) : [];
    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage("sessionsList", {});
