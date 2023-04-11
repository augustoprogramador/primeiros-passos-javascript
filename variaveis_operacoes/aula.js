
const consumoPorKm = 12;
const precoCombustivel = 6.5;
const distanciaPercorrida = 900;

console.log(imprimirGastoMedio());

function imprimirGastoMedio() {
    return (getValorGastoPorKM() * distanciaPercorrida).toFixed(2);
}

function getValorGastoPorKM() {
    return precoCombustivel / consumoPorKm;
}