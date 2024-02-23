window.alert("Olá, eu sou o JavaScript, muito prazer.")

window.prompt("Qual o seu nome?")

window.confirm("Está achando o JS fácil?")

var nota1 = Number(window.prompt("Digite sua primeira nota: "))
var nota2 = Number(window.prompt("Digite a sua segunda nota: "))
var soma = (nota1 + nota2)/2
window.alert("A média entre as notas é: " + soma)

var num1 = Number(window.prompt("Digite o primeiro numero: "))
var num2 = Number(window.prompt("Digite o segundo numero: "))
var subtracao = (num1 - num2)
window.alert("A diferença entre os dois numeros é: " + subtracao)

var num3 = Number(window.prompt("Digite um número: "))
if (num3 % 2 == 0){
    window.alert("O numero é par!")
} else {
    window.alert("O numero é impar!")
}

var nota3 = Number(window.prompt("Digite sua primeira nota: "))
var nota4 = Number(window.prompt("Digite a sua segunda nota: "))
if (nota3 % nota4 == 0 || nota4 % nota3 == 0){
    window.alert("A nota " + nota3 + " é multipla da nota " + nota4)
} else {
    window.alert("Não é multiplo")
}

var temp = Number(window.prompt("Digite a temperatura em Celsius: "))
var conversor = (temp * 9/5) + 32
window.alert("A temperatura em Fahrenheit é: " + conversor)

var base = Number(window.prompt("Digite a base: "))
var altura = Number(window.prompt("Digite a altura: "))
var area = (base * altura)
window.alert("A área é: " + area)

var nota1 = Number(window.prompt("Digite sua primeira nota: "))
var nota2 = Number(window.prompt("Digite a sua segunda nota: "))
var media = (nota1 + nota2)/2
var media1 = (nota1 + nota2)/2 >= 6
var par = (media % 2 == 0)
if (media1) {
    window.alert("Você está na média")
    window.alert("Sua média é: " + media)
} else {
    window.alert("Você não esta dentro da média")
    window.alert("Sua média é: " + media)
}
if (par) {
    window.alert("A nota é par")
} else {
    window.alert("A nota não é par")
}

var peso = Number(window.prompt("Digite seu peso: "))
var altura = parseFloat(window.prompt("Digite sua altura: "))
var imc = (peso / (altura * altura))
window.alert("Seu IMC é: " + imc)

var ano = Number(window.prompt("Digite um ano: "))
var bissexto = (ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0)
if (bissexto){
    window.alert("O ano é bissexto")
} else {
    window.alert("O ano não é bissexto")
}

var taxa = parseFloat(window.prompt("Digite a taxa de câmbio: "))
var valor = Number(window.prompt("Digite o valor desejado: "))
var conversor = taxa * valor
window.alert("O valor convertido é: " + conversor)
