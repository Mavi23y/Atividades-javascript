let soma;
let subtracao;
let multiplicacao;
let divisao;

function contas(a, b) {
  soma = a + b;
  console.log("A soma é: " + soma);

  subtracao = a - b;
  console.log("A subtração é: " + subtracao);

  multiplicacao = a * b;
  console.log("A multiplicação é: " + multiplicacao);

  divisao = a / b;
  console.log("A divisão é: " + divisao);
}

contas(10, 5);
