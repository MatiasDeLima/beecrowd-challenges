
let valores = input.split("\n");

let A = parseFloat(valores.shift());
let B = parseFloat(valores.shift());
let C = parseFloat(valores.shift());

let media = (A * 2 + B * 3 + C * 5) / 10;

console.log("MEDIA = " + media.toFixed(1));