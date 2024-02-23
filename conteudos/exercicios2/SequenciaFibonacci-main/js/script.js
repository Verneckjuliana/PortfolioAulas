function mostrarFibonacci() {
    let fibonacci = [0, 1];

    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    document.getElementById('fibonacci').textContent = `Os 10 primeiros números são:`;
    document.getElementById('resultado').textContent = `${fibonacci.join(', ')}`;
}
