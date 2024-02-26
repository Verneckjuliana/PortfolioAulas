function verificarParOuImpar() {
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('resultado');

    if (!isNaN(numero)) {
        numero = parseInt(numero);
        if (numero % 2 === 0) {
            resultado.innerHTML = numero + " é um número PAR.";
        } else {
            resultado.innerHTML = numero + " é um número ÍMPAR.";
        }
    } else {
        resultado.innerHTML = "Por favor, insira um número válido.";
    }
}
