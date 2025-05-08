var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(" ");
var linha2 = lines[1].split(" ");

var X1 = parseFloat(linha1[0]);
var Y1 = parseFloat(linha1[1]);
var X2 = parseFloat(linha2[0]);
var Y2 = parseFloat(linha2[1]);
// Math.sqrt RAIZ QUADRADA
var calculo = Math.sqrt((X2 - X1)**2 + (Y2 - Y1)**2) ;

console.log(calculo.toFixed(4));


