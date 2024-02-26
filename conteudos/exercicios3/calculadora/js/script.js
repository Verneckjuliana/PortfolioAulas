function calculate(operation) {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var resultElement = document.getElementById('result');
    var result;

    switch (operation) {
        case 'soma':
            result = value1 + value2;
            break;
        case 'subtracao':
            result = value1 - value2;
            break;
        case 'divisao':
            result = value1 / value2;
            break;
        case 'multiplicacao':
            result = value1 * value2;
            break;
        case 'exponenciacao':
            result = Math.pow(value1, value2);
            break;
        case 'raiz':
            result = Math.sqrt(value1);
            break;
        case 'percentual':
            result = (value1 / 100) * value2;
            break;
        case 'fibonacci':
            result = fibonacci(value1);
            break;
        case 'fatorial':
            result = fatorial(value1);
            break;
        default:
            result = "Operação inválida";
            break;
    }

    resultElement.textContent = result;
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}
