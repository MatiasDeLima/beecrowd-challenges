let valores = input.split("\n");

let numero = parseInt(valores.shift());
let horas = parseInt(valores.shift());
let valor = parseFloat(valores.shift());

let SOMA = horas * valor;

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + SOMA.toFixed(2));