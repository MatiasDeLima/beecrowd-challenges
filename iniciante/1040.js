lines[0] = lines[0].trim();
lines[1] = lines[1].trim();
const filteredArray = lines.filter(element => element.trim() !== '') // elimina caracter 
const mergedString = filteredArray.join(' ');
let value = mergedString.split(" ").map(Number);

let pesos = [2, 3, 4, 1];

let A = parseFloat(value.shift()) * pesos[0];
let B = parseFloat(value.shift()) * pesos[1];
let C = parseFloat(value.shift()) * pesos[2];
let D = parseFloat(value.shift()) * pesos[3];
let E = parseFloat(value.shift());

const media = (A + B + C + D) / (pesos[0] + pesos[1] + pesos[2] + pesos[3]);

console.log("Media: " + media.toFixed(1));

if (media >= 7) {
    console.log("Aluno aprovado.");
}

if (media < 5) {
    console.log("Aluno reprovado.");
}

let alunoExame = false;

if (media >= 5.0 && media <= 6.9) {
    alunoExame = true
}

if(alunoExame) {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + E.toFixed(1));

    let newMedia = (media + E) / 2;
    if (newMedia >= 5.0) {
        console.log("Aluno aprovado.")
    } else if (newMedia <= 4.9) {
        console.log("Aluno reprovado.")
    }

    console.log("Media final: " + newMedia.toFixed(1))
}