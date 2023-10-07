let valores = input.split("\n");

let X = parseInt(valores.shift());
let Y = parseFloat(valores.shift());

CONSUMO = X / Y;

console.log(CONSUMO.toFixed(3) + " km/l");