function encontrarMaiorNumero() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var numero3 = parseFloat(document.getElementById('numero3').value);
    var resultado = document.getElementById('resultado');

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        var maiorNumero = Math.max(numero1, numero2, numero3);
        resultado.innerHTML = "O maior número é: " + maiorNumero;
    } else {
        resultado.innerHTML = "Por favor, insira números válidos.";
    }
}
