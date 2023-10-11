let segundos = parseInt(input);

let H = parseInt(segundos / 3600);
segundos %= 3600;
let M = parseInt(segundos / 60);
let S = parseInt(segundos %= 60);

console.log(`${H}:${M}:${S}`);