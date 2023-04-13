function imprimeNome(nome) {
    return `Seu nomme é ${nome}`;
}

function isMaiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    }
    return false;
}

console.log(`${imprimeNome('Augusto')}\nMaior de idade: ${isMaiorDeIdade(32)}`);