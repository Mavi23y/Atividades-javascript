let valorDaCompra = 100;

function aplicarDesconto(valor) {
  if (valor >= 100) {
    let desconto = valor * 10 / 100;
    let valorFinal = valor - desconto;
    console.log("Com desconto. Valor final: R$" + valorFinal);
  } 
  else {
    console.log("Sem desconto. Valor final: R$" + valor);
  }
}
aplicarDesconto(valorDaCompra);