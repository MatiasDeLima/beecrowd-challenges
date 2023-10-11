let dias = parseInt(input);

let ano = parseInt(dias / 365);
dias = dias % 365;
let mes = parseInt(dias / 30);
dias = dias % 30;

console.log(`${ano} ano(s)\n${mes} mes(es)\n${dias} dia(s)`);