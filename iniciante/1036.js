lines[0] = lines[0].trim(); // remove caracter invalido

const values = lines[0].split(" "); // separa os elementos do array

let A = parseFloat(values.shift());
let B = parseFloat(values.shift());
let C = parseFloat(values.shift());

const delta = B * B - 4 * A * C; // formula de delta

if(A === 0 || delta < 0) { // condicao de imposivel calcular
    console.log("Impossivel calcular");
} else {
    // Fórmula de Bhaskara
    const x1 = (-B + Math.sqrt(delta)) / (2 * A);
    const x2 = (-B - Math.sqrt(delta)) / (2 * A);
    // resposta formatada
    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);
}