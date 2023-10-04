let valores = input.split("\n");

let nome = valores.shift();
let salario = parseInt(valores.shift());
let vendas = parseFloat(valores.shift());

let porcentagem = 15 / 100;

let bonus = vendas * porcentagem;

let soma = salario + bonus;

console.log("TOTAL = R$ " + soma.toFixed(2));
