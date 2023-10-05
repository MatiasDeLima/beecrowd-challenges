let [A, B, C] = input.split(" ");

let PI = 3.14159;

let areaTringulo = (A * C) / 2.00;
let areaRaio = PI * Math.pow(C, 2);
let areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.00;
let areaQuadrado = (B * B);
let areaRetangulo = (A * B);

console.log("TRIANGULO: " + areaTringulo.toFixed(3));
console.log("CIRCULO: " + areaRaio.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));