"use strict";
let sessionsList = JSON.parse(localStorage.getItem("sessionsList") || "[]");
sessionsList.push(new Date().toISOString());
localStorage.setItem("sessionsList", JSON.stringify(sessionsList));
console.log(sessionsList);
