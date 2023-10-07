let linhas = input.split("\n");

let [x1, y1] = linhas[0].split(" ");
let [x2, y2] = linhas[1].split(" ");

let DISTANCIA = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));

console.log(DISTANCIA.toFixed(4));