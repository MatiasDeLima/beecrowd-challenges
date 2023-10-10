lines[0] = lines[0].trim();
var removeChar = lines.filter(element => element.trim() !== '')
let value = removeChar[0].split(" ").map(Number);

let X = value.shift();
let Y = value.shift();
let Z = value.shift();

let A = X;
let B = Y;
let C = Z;

// pega o valo de A adiciona em temp pega o valor de B e adicona em A e o valor de temp a B
// A = -3,  B = -8
if(A > B) {
    const temp = A;
    A = B;
    B = temp;
}

if(B > C) {
    const temp = B;
    B = C;
    C = temp;
}

if(A > B) {
    const temp = A;
    A = B;
    B = temp;
}

console.log(A);
console.log(B);
console.log(C);
console.log();
console.log(X);
console.log(Y);
console.log(Z);