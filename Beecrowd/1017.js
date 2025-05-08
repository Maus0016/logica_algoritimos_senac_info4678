var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var  Tempo = parseInt(lines[0]);
var Velocidade = parseInt(lines[1]);
var Total = ((Tempo * Velocidade) / 12).toFixed(3);

console.log(Total);


