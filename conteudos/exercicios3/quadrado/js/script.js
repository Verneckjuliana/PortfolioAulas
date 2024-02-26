function calcularQuadrado() {
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('resultado');

    if (!isNaN(numero)) {
        var quadrado = parseFloat(numero) * parseFloat(numero);
        resultado.innerHTML = "O quadrado de " + numero + " é " + quadrado;
    } else {
        resultado.innerHTML = "Por favor, insira um número válido.";
    }
}
