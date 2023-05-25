const prompt = require("prompt-sync")()

var minutes = Number(prompt("Qual o tempo decorrido em segundos? "))
var seconds = Number(prompt("Qual o tempo decorrido em segundos? "))
var result2 = Number(minutes * 60)
var result3 = Number(seconds)
console.log(result2)
console.log(result3)