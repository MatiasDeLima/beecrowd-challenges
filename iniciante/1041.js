// plano cartesiano
lines[0] = lines[0].trim();
var removeChar = lines.filter(element => element.trim() !== '')
let value = removeChar[0].split(" ").map(Number);

let X = value.shift();
let Y = value.shift();

if(X > 0 && Y > 0) {
    console.log("Q1");
} else if(X < 0 && Y > 0) {
    console.log("Q2");
} else if(X < 0 && Y < 0) {
    console.log("Q3");
} else if(X > 0 && Y < 0) {
    console.log("Q4");
} else if(Y === 0 && X != 0) {
    console.log("Eixo X");
} else if(X === 0 && Y != 0) {
    console.log("Eixo Y")
} else {
    console.log("Origem");
}