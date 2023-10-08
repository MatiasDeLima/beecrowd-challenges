var T = parseInt(linhas.shift());
var V = parseInt(linhas.shift());

var D = V * T;

var L = (D / 12).toFixed(3);

// 12 km por 1 litro
// tempo de viajem em horas
// D = V * T
// velocidade media km

console.log(L);