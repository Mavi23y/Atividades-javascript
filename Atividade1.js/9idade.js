function verificarIdade(idade) {
  if (idade >= 60) {
    console.log("Idoso");
  } 
  else if (idade >= 18) {
    console.log("Adulto");
  } 
  else if (idade >= 13) {
    console.log("Adolescente");
  } 
  else {
    console.log("Criança");
  }
}

verificarIdade(14);