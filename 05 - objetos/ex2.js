/**
 * 2) Crie uma classe Pessoa
 * Para cada pessoa teremos os atributos nome, peso, altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMMC = peso / altura²);
 * Instancie uma pessoa chamada José que tenha 70kg, 1,75 de altura e peça a José para 
 * dizer o valor do seu IMC;
 */

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calculaIMC().toFixed(2);
    }

    classificaIMC() {
        if (this.imc < 18.5) {
            return 'abaixo do peso.';
        }
        if (this.imc > 18.5 && this.imc <= 25) {
            return 'dentro do peso.';
        }
        if (this.imc > 25 && this.imc <= 30) {
            return 'acima do peso.';
        }
        if (this.imc > 30 && this.imc <= 40) {
            return 'obeso.';
        }
        return 'gravemente obeso.';
    }

    calculaIMC() {
        return this.peso / this.altura**2;
    }

    informaIMC() {
        return `${this.nome}, seu IMC é ${this.imc}\nVocê está ${this.classificaIMC()}`;
    }
}

const pessoa = new Pessoa('Ludimila', 50, 1.50);
console.log(pessoa.informaIMC())