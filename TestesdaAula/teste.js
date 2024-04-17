var nota = 11

if(nota >= 8 && nota <= 10){
    console.log("Parabens!!! Voce passou.")
}else if(nota == 7){
    console.log("Quase reprovou")
}else if(nota >= 4 && nota <= 6){
    console.log("Recuperação")
}else if(nota >= 1 && nota <= 4){
    console.log("Reprovado")
}else{
    console.log("Nota não reconhecida! Digite um número entre 1 a 10")
}