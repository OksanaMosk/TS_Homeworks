"use strict";
function foobar(url) {
    return fetch(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Http Error, status: ${response.status}`);
        }
        return response.json();
    })
        .then((data) => {
        console.log(data);
        return data;
    });
}
foobar("https://dummyjson.com/recipes").then((data) => console.log(" recipesObj:", data.recipes));
