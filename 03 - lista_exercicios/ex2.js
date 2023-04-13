
const peso = 88.3;
const altura = 1.7;

console.log(classificaIMC());

function classificaIMC() {
    const valorIMC = calculaIMC();

    if (valorIMC < 18.5) {
        return 'Abaixo do peso'
    }
    if (valorIMC > 18.5 && valorIMC <= 25) {
        return 'Peso normmal'
    }
    if (valorIMC > 25 && valorIMC <= 30) {
        return 'Acimma do peso'
    }
    if (valorIMC > 30 && valorIMC <= 40) {
        return 'Obeso'
    }
    return 'Obesidade grave'
}

function calculaIMC() {
    return peso / (altura**2).toFixed(2);
}