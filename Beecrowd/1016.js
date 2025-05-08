var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var     Tempo = parseInt(lines[0]);
var Distancia = Tempo * 2;

console.log(Distancia+ " minutos");


