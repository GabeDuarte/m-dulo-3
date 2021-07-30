const Calculadora = require ('./calculadora');


console.log(Calculadora.soma(8,10));
console.log(Calculadora.sub(8,10));
console.log(Calculadora.div(8,10));
console.log(Calculadora.mult(8,10));
console.log(Calculadora.nome);

Calculadora.nome = 'Calculadora 1.1';

console.log(Calculadora.nome);