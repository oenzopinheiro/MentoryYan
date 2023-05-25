const prompt = require("prompt-sync")()

var height = Number(prompt("Qual a aultura da parede? "))
var width = Number(prompt("Qual a largura da parede? "))
var squareMeters = height * width
var paintCans = (squareMeters * 0.3) / 2
console.log("Para pintar uma parede de " + height + "m de largura por " + width + "m  de altura, serão necessarias " + paintCans + " latas de tinta." )
