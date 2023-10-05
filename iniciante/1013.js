const [A, B, C] = input.split(" ").map(item => parseInt(item));

let maioAB = (A + B + Math.abs(A - B)) / 2;
let maiorXC = (C + maioAB + Math.abs(C - maioAB)) / 2;

console.log(maiorXC + " eh o maior");