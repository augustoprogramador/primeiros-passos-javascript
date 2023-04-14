
const notas = [ 6, 7, 4, 8 ];

console.log(exibeMedia())

function exibeMedia() {
    return `Sua média foi ${calculaMedia().toFixed(2)}`
}

function calculaMedia() {
    return notas.reduce((prev, curr) => prev + curr) / notas.length;
}
