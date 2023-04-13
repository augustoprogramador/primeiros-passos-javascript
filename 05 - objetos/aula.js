
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const p1 = new Pessoa();
p1.nome = 'Augusto';
p1.idade = 22;
// p1.descrever();

const p2 = new Pessoa();
p2.nome = 'Eren';
p2.idade = 22;
// p2.descrever();

console.log(comparaIdadePessoas())

function comparaIdadePessoas() {
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velha(o) que ${p2.nome}`;
    }
    if (p2.idade > p1.idade) {
        return `${p2.nome} é mais velha(o) que ${p1.nome}`;
    }
    return `${p1.nome} e ${p2.nome} tem a mesma idade.`;
}