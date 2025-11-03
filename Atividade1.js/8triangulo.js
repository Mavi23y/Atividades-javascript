function triangulo(a,b,c){
    if (a < b + c && b < a + c && c < a + b) {
    console.log("É possível formar um triângulo.");
    }
    if (a == b && b == c) {
      console.log("Triângulo Equilátero");
    } 
    if (a == b || a == c || b == c) {
      console.log("Triângulo Isósceles");
    } 
    if (a !== b && b !== c && a !== c) {
     console.log("Triângulo Escaleno");
    }
    else{
        console.log("Não é possível formar um triângulo.");
    }
}
triangulo(3,4,5);