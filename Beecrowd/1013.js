var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tamanho = lines[0].split(" ");
var valor1 = Number(tamanho[0]);
var valor2 = Number(tamanho[1]);
var valor3 = Number(tamanho[2]);
var calculo = (valor1 + valor2 + Math.abs(a - b)) / 2

console.log(valor1+ " eh o maior");
console.log(valor2+ " eh o maior");
console.log(valor3+ " eh o maior");

