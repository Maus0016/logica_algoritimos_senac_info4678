var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vendedor = (lines[0]);
var salario = Number(lines[1]);
var total1 = salario + salario * 0.15;
console.log("TOTAL = R$ " +total1.toFixed(2));