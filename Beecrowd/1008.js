var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines[0]);
var horas = parseInt(lines[1]);
var salario = parseFloat(lines[2]);
var total1 = horas * salario;
console.log("NUMBER = " +numero+ '\n' + "SALARY = U$ " + total1.toFixed(2));