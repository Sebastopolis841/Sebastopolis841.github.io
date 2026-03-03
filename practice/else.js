"use strict";

function addToBody(text) {
    document.body.innerHTML += "<p>" + text + "<p>"
}

/*
let name = prompt("What is your name?");

addToBody("Hello " + name);
*/

let temp = Number(prompt("What is the temperature outside?"));
addToBody("It's " + temp + " degrees outside!");

if (temp == NaN) {
    addToBody("That is not a number!");
} else {
    if (temp <= 32) {
       addToBody("It's freezing! Stay inside.");
    } else if (temp >= 72 && temp < 99) {
        addToBody("The weather is wonderful outside!");
    } else if (temp > 55 && temp <= 71) {
        addToBody("It's chilly outside. Bring a hoodie.");
    } else if (temp > 32 && temp <= 55) {
        addToBody("Its cold outside. Bring a jacket.");
    } else {
        addToBody("It's boiling outside. Go for a swim!");
    }

    addToBody("Have a nice day!");
}