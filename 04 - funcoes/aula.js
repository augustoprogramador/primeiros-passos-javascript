
function classificaIMC(valorIMC) {
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

function calculaIMC(peso, altura) {
    return peso / (altura**2).toFixed(2);
}

function main() {
    const valorIMC = calculaIMC(88.3, 1.7);
    console.log(classificaIMC(valorIMC));
}

main()