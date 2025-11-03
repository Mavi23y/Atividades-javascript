function maiorEmenor(array){
    let maior = array[0];
    let menor = array[0];

    for (let i = 1; i <array.length; i++){
        if (array[i] > maior){
            maior = array[i];
        }
        if (array[i] < menor){
            menor = array[i];
        }
    }
    return {maior, menor};
}
array = [1, 2, 3, 4, 5];
let resultado = maiorEmenor(array);
console.log("Menor:", resultado.menor);
console.log("Maior:", resultado.maior);