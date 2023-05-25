const prompt = require("prompt-sync")()

var real1 = Number(prompt("Quantas notas de 1 real? "))
var real5 = Number(prompt("Quantas notas de 5 reais? "))
var real10 = Number(prompt("Quantas notas de 10 reais? "))
var real50 = Number(prompt("Quantas notas de 50 reais? "))
var real100 = Number(prompt("Quantas notas de 100 reais? "))
var result = (real1 ) + (real5 * 5) + (real10 * 10) + ( real50 * 50) + ( real100 * 100)

console.log(`
${real1} notas de 1 real
${real5} notas de 5 reais
${real10} notas de 10 reais
${real50} notas de 50 reais
${real100} notas de 100 reais
R$ ${result}`)
