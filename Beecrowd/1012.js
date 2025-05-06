var input = require('fs').readFileSync('/dev/stdin', 'utf8'); var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var valores = lines[0].split(" ");
var Area1 = parseFloat(valores[0]);
var Area2 = parseFloat(valores[1]);
var Area3 = parseFloat(valores[2]);

var Triangulo = (Area1 * Area3) / 2;
var Circulo = 3.14159 * (Area3 * Area3);
var Trapezio = (Area1 + Area2) / ((2 * Area3));
var Quadrado = Area2 * Area2;
var Retangulo = Area1 * Area2;

console.log("TRIANGULO: " + Triangulo.toFixed(3) + '\n' + "CIRCULO: " + Circulo.toFixed(3) + '\n' + "TRAPEZIO: " + Trapezio.toFixed(3) + '\n' + "QUADRADO: " + Quadrado.toFixed(3) + '\n' + "RETANGULO: " + Retangulo.toFixed(3));

var lines = [3.0, 4.0, 5.2]//input.split('\n');

var Area1 = (lines[0]);
var Area2 = (lines[1]);
var Area3 = (lines[2]);

var Triangulo = Area1 * Area3 / 2;
var Circulo = 3.14159 * (Area3 * Area3);
var Trapezio = ((Area1 + Area2) / 2) * Area3;
var Quadrado = Area2 * Area2;
var Retangulo = Area1 * Area2;

console.log("TRIANGULO: " + Triangulo + '\n' + "CIRCULO: " + Circulo + '\n' + "TRAPEZIO: " + Trapezio + '\n' + "QUADRADO: " + Quadrado + '\n' + "RETANGULO: " + Retangulo.toFixed(3));