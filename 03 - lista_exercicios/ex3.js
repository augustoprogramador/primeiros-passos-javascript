const formaPagamento = 'Pix';
const numParcelas = 3;
const precoProduto = 100;

console.log(`Você irá pagar R$${calculaValorTotal().toFixed(2)}`);

function calculaValorTotal() {
    if (formaPagamento === 'Débito' && numParcelas === 1) {
        return precoProduto * 0.9;
    }
    if (['Dinheiro', 'Pix'].includes(formaPagamento) && numParcelas === 1) {
        return precoProduto * 0.85;
    }
    if (numParcelas === 2) {
        return precoProduto;
    }
    if (numParcelas > 2) {
        return precoProduto * 1.1;
    }
}