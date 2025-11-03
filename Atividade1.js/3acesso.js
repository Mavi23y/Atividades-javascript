let nome = "Santiago";
let senha = "segredo123";

function validarAcesso(nome, senha){
    if(nome === "Santiago" && senha === "segredo123"){
        console.log("Acesso permitido");
    }
    else{
        console.log("Acesso negado");
    }
}
validarAcesso(nome, senha);