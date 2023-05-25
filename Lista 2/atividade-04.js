const prompt = require("prompt-sync")();

var name = prompt("Qual é o seu nome? ");
var age = Number(prompt("Qual é a sua idade? "));
var ageInDays = age * 365;

console.log(`${name} ${ageInDays}`);