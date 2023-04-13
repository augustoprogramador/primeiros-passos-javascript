const notas = [
    4, 5, 8
];

console.log(classificaAluno());

function calculaMedia() {
    let somaNotas = 0;
    for (const nota of notas) {
        somaNotas += nota;
    }
    return somaNotas / notas.length;
}

function classificaAluno() {
    const media = calculaMedia().toFixed(2);
    if (media < 5) {
        return 'REPROVADO';
    }
    if (media >= 5 && media <= 7) {
        return 'RECUPERAÇÃO';
    }
    return 'APROVADO';
}