const prompt = require('prompt-sync')();

let numSecreto = 20
let active = true;

while (active) {
    let numDigitado = Number(prompt('Digite um número entre 1 e 30: '));
    if (numDigitado === numSecreto) {
        console.log("Parabéns! Você acertou o número secreto!");
        active = false;
    }
    
}
