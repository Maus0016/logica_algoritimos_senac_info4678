var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prod1 = lines[0].split(" ");
var prod2 = lines[1].split(" ");

prod1[0];
prod1[1];
prod1[2];

prod2[0];
prod2[1];
prod2[2];

var calculo = prod2[1] * prod2[2] + prod1[1] * prod1[2];

console.log("VALOR A PAGAR: R$ " +calculo.toFixed(2))
