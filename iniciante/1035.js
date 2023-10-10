
let valore = lines[0].split(" ")

let A = parseInt(valore.shift());
let B = parseInt(valore.shift());
let C = parseInt(valore.shift());
let D = parseInt(valore.shift());

if(B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}