const prompt = require("prompt-sync")();

var raio = Number(prompt("Qual é o raio do circulo? "))
var area = 3.14159265358979323846 * (raio * raio)

console.log(area)