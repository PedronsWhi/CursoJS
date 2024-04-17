function verificarNota(nota) {
    if (nota >= 8 && nota <= 10) {
        console.log("Parabéns! Você passou.");
    } else if (nota == 7) {
        console.log("Você quase reprovou.");
    } else if (nota >= 4 && nota <= 6) {
        console.log("Você está em recuperação.");
    } else if (nota >= 0 && nota < 4) {
        console.log("Você foi reprovado.");
    } else {
        console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
    }
}

// Exemplo de uso
let nota = 3;
verificarNota(nota);
