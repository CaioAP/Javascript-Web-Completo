var a = 3
let b = 4

/* 
 * Na declaração de variáveis podemos utilizar o 'var'e 'let'.
 * A diferença entre elas é que o var permite redeclar a mesma
 * variável, com o let gera um erro caso o mesmo seja feito.
 */
var a = 30
// let b = 40
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

/*
 * Constantes não permitem receber um valor diferente do valor
 * recebido inicialmente.
 */
const c = 5
// c = 50
console.log(c)