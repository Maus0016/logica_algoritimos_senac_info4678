var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines[0]);
var Y = parseFloat(lines[1]);
 var kml = (X / Y).toFixed(3);

 console.log(kml+ " km/l")


