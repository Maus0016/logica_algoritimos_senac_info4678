var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var esfera = lines[0];
var volume = (4.0/3) * 3.14159 * esfera * esfera * esfera;

console.log("VOLUME = " +volume.toFixed(3));
