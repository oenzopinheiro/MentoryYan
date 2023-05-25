const prompt = require("prompt-sync")();
var reais = prompt("Qual é o dinheiro total? ")
var total1 = reais / 1 
var total2 = reais / 5
var total3 = reais / 10 
var total4 = reais / 50
var total5 = reais / 100 


console.log(`Tem ${total1} notas de 1 real
Tem ${total2} notas de 5 reais
Tem ${total3} notas de 10 reais
Tem ${total4} notas de 50 reais
Tem ${total5} notas de 100 reais`)
