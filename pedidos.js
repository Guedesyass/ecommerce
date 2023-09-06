import { desenharProdutoDoCarrinhoSimples , lerLocalStorage} from "./src/utilidade";


function criarHistorico (pedidoComData) {
    const elementoPedido = `<p class='pedido-data'>${new Date(pedidoComData.data).toLocaleDateString('pt-br')}</p>
    <section class="container-pedido" id="container-pedido-${pedidoComData.data}">
    
    </section>
    `;
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoDoCarrinhoSimples(idProduto, `container-pedido-${pedidoComData.data}`, pedidoComData.pedido[idProduto])
    }
}

function renderizarHistorico () {
    const historico = lerLocalStorage('historico');

    for (const pedidoComData of historico) {
        criarHistorico(pedidoComData);
    }
}

renderizarHistorico();