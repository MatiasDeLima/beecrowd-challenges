let linhas = input.split("\n");

let item1 = linhas.shift().split(" ");
let item2 = linhas.shift().split(" ");

let codigo1 = item1.shift();
let num1  = item1.shift();
let valor1 = item1.shift();
let valorItem1 = num1 * valor1;

let codigo2 = item2.shift();
let num2  = item2.shift();
let valor2 = item2.shift();
let valorItem2 = num2 * valor2;

let SOMA = valorItem1 + valorItem2;

console.log("VALOR A PAGAR: R$ " + SOMA.toFixed(2))