let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; 
let hoje = 1;

function diaDeHoje(dia) {
  let indice = dia - 1;
    if (indice >= 0 && indice < diasDaSemana.length) {
        console.log("Hoje é " + diasDaSemana[indice]);
    } 
    else{
        console.log("Dia inválido");
    }
}
diaDeHoje(hoje);


