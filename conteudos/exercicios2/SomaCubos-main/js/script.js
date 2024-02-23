function calcularSomaCubos() {
    let soma = 0;
    let cubos = [];

    for (let i = 1; i <= 10; i++) {
        let cubo = Math.pow(i, 3); 
        soma += cubo; 
        cubos.push(cubo); 
    }

    document.getElementById('resultado').innerHTML = `A soma dos cubos dos primeiros 10 números naturais é ${soma}.<br>`;
    document.getElementById('resultado2').innerHTML += `Os cubos individuais são: ${cubos.join(', ')}.`;
}
