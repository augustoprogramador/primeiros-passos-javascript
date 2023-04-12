
const tipoCombustivel = 'Etanol';
const precoGasolina = 6;
const precoEtanol = 4.2;
const distanciaPorLitro = 12; 
const distanciaPercorrida = 957;

console.log(calcularValorGastoViagem().toFixed(2))

function calcularValorGastoViagem() {
    if (tipoCombustivel === 'Gasolina') {
        return precoGasolina / distanciaPorLitro * distanciaPercorrida;
    }
    return precoEtanol / distanciaPorLitro * distanciaPercorrida;
}
