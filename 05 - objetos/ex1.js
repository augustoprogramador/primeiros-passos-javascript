/**
 * 1 - Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetros rodados.
 * Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais
 * para realizar este percurso
 */

class Carro {
    marca;
    cor;
    kmPorLitro

    constructor (marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calculaGastoComCombustivel (distanciaPercurso, precoCombustivel) {
        return (distanciaPercurso / this.kmPorLitro) * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Vermelho', 12);
console.log(uno.calculaGastoComCombustivel(136.6, 4.2));