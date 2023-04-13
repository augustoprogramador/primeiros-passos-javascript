// Código Forma de Pagamennto:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista Dinheiro ou Pix, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal sem juros;
// 4 - Mais de duas vezes, 10% de juros;

const precoProduto = 100;

console.log(`Você irá pagar R$${calculaValorTotal(1).toFixed(2)}`);

function aplicaDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}

function aplicaJuros(valor, juros) {
    return valor + (valor * juros / 100);
}

function calculaValorTotal(formaPagamento) {
    switch(formaPagamento) {
        case 1:
            return aplicaDesconto(precoProduto, 10);
        case 2:
            return aplicaDesconto(precoProduto, 15);
        case 3:
            return precoProduto;
        case 4:
            return aplicaJuros(precoProduto, 10);
        default:
            return 'Forma de pagamento inválida!';
    }
}