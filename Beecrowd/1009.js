var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vendedor = (lines[0]);
var salario = Number(lines[1]);
var vendasEfetuadas = Number(lines[2]);
var quinzeporcento = vendasEfetuadas  * 0.15;
var total1 = salario + quinzeporcento ;
console.log("TOTAL = R$ " +total1.toFixed(2));