

lines[0] = lines[0].trim();

const valor = lines[0].split(" ");
let A = parseInt(valor.shift()) - 1;
let Q = parseInt(valor.shift());

let lanches = [
    { codigo: 1, especificacao: "Cachorro Quante", preco: 4.00},
    { codigo: 2, especificacao: "X-salada", preco: 4.50},
    { codigo: 3, especificacao: "X-bacon", preco: 5.00},
    { codigo: 4, especificacao: "Torrada simples", preco: 2.00},
    { codigo: 5, especificacao: "Refrigerante", preco: 1.50},
]

let precoA = parseFloat(lanches[A].preco);
let mult = (precoA * Q).toFixed(2);
console.log(`Total: R$ ${mult}`)