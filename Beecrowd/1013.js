var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tamanho = lines[0].split(" ");
var valor1 = Number(tamanho[0]);
var valor2 = Number(tamanho[1]);
var valor3 = Number(tamanho[2]);
var calculo = (valor1 + valor2 + Math.abs(valor1 - valor2)) / 2;
var calculo2 = (calculo+ valor3 + Math.abs(calculo - valor3)) / 2;
//"calculo2" + "eh o maior" +"""+"
//`` serve para montar a apresentação inteira em vez de mostrar varias "" com a presença de + para adicionar variavel
//${} serve para apresentar a variavel sem a nessesidade de separar com "" e + quando tiver abrir 
console.log(`${calculo2} eh o maior`);
//console.log(calculo + "calculo eh o maior");


if(valor2 < calculo && valor3 > calculo)
    {
        console.log(valor1+ " eh o maior");
    }
    else if(valor1 < calculo && valor3 > calculo)
    {
        console.log(valor2+ " eh o maior");
    }
    else if(valor2 < calculo && valor1 > calculo)
    {
        console.log(valor3+ " eh o maior");
    }







