function validarNotas(notas){
if (notas >= 90){
    console.log("Nota A")
}
else if (notas >= 80){
    console.log("Nota B")
}
else if (notas >= 70){
    console.log("Nota C")
}
else if (notas >= 60){
    console.log("Nota D")
}
else{
    console.log("Nota F")
}
}
validarNotas(90)