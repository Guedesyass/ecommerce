import { desenharProdutoDoCarrinhoSimples, lerLocalStorage,apagarDoLocalStorage, salvarLocalStorage} from "./src/utilidade";


function desenharProdutosCheckout (){
    const idsProdutoCarrinhoQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const idProduto in idsProdutoCarrinhoQuantidade) {
        desenharProdutoDoCarrinhoSimples(idProduto, 'produtos-checkout', idsProdutoCarrinhoQuantidade[idProduto]);
    }

    const total = lerLocalStorage("total") ?? {};
    const mostrarTotal = document.getElementById('preco-total');
    mostrarTotal.innerText = `Total: $${total}`;
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoQuantidade = lerLocalStorage("carrinho") ?? {};
    if (Object.keys(idsProdutoCarrinhoQuantidade).length=== 0) {
        return;
    }
    const data = new Date();
    const pedidoFeito = {
        data: data,
        pedido: idsProdutoCarrinhoQuantidade,
    }

    const historicoPedidos = lerLocalStorage('historico') ?? [];
    const historicoPedidosAtualizados = [pedidoFeito, ...historicoPedidos];

    salvarLocalStorage('historico', historicoPedidosAtualizados)
    apagarDoLocalStorage('carrinho');
    apagarDoLocalStorage("total");

    window.location.href = window.location.origin + '/pedidos.html'

}

document.addEventListener('submit', (evento)=> finalizarCompra(evento));

desenharProdutosCheckout();