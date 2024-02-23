function calcularFatorial() {
//para pegar o numero inserido
    let numero = parseInt(document.getElementById('number').value);
    
//verificacao
    if (isNaN(numero)) {
        document.getElementById('result').textContent = "Por favor, insira um número válido.";
        return;
    }

    if (numero < 0) {
        document.getElementById('result').textContent = "O fatorial não está definido para números negativos.";
        return;
    }

//calculo
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('result').textContent = `O fatorial de ${numero} é ${fatorial}.`;
}
