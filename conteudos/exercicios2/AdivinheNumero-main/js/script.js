function adivinharNumero(min, max, tentativas) {
    let palpite;
    let output = document.getElementById('output');
    for (let i = 0; i < tentativas; i++) {
        palpite = Math.floor((min + max) / 2);
        output.innerHTML = "<p class='message'>Eu acho que o número é: " + palpite + "</p>";

        let resposta = prompt("Meu palpite é o número: " + palpite + " O número é maior, menor ou igual ao que eu pensei?");
        resposta = resposta.toLowerCase();
        
        if (resposta === "igual") {
            output.innerHTML = "<p class='message'>EU ACERTEI, HAHAHA " + "</p>";
            return;
        } else if (resposta === "maior") {
            min = palpite + 1;
        } else if (resposta === "menor") {
            max = palpite - 1;
        } else {
            output.innerHTML = "<p class='message'>Desculpe, não entendi sua resposta.</p>";
        }
    }
    output.innerHTML = "<p class='message'>ERREI, DEIXA EU TENTAR DENOVO?</p>";
}

let min = 1;
let max = 100;  
let tentativas = 3; 
adivinharNumero(min, max, tentativas);