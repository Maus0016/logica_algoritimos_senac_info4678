var numero = parseFloat(lines[0]);
var horas = parseFloat(lines[1]);
var salario = parseFloat(lines[2]);
var total1 = horas * salario;
console.log( "NUMBER = " + numero ,'\n' +"SALARY = U$"  + total1.toFixed(2));