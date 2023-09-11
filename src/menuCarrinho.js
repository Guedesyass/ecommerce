import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidade";

const idsProdutoCarrinhoQuantidade = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho () {
    document.getElementById("carrinho").style.display="flex"; 
}

function fecharCarrinho () {
    document.getElementById("carrinho").style.display="none";
}


function irParaCheckout (){
    if(Object.keys(idsProdutoCarrinhoQuantidade).length === 0){
        return
    };
    window.location.href = window.location.origin + '/checkout.html';
}


export function inicializarCarrinho () {
    const btnFecharCarrinho = document.getElementById("fechar-carrinho");
    const btnAbrirCarrinho = document.getElementById("abrir-carrinho");
    const btnIrparaCheckout = document.getElementById("carrinho-btn");

    btnFecharCarrinho.addEventListener('click', fecharCarrinho);
    btnAbrirCarrinho.addEventListener('click', abrirCarrinho);
    btnIrparaCheckout.addEventListener('click', irParaCheckout);

}

function removerDoCarrinho (idProduto){
    delete idsProdutoCarrinhoQuantidade[idProduto];
    salvarLocalStorage('carrinho', idsProdutoCarrinhoQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto (idProduto){
    idsProdutoCarrinhoQuantidade[idProduto]++;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoQuantidade);
    atualizarPrecoCarrinho();
    atualizarQuantidade(idProduto);
}

function decrementarQuantidadeProduto (idProduto){
    if(idsProdutoCarrinhoQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoQuantidade[idProduto]--;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoQuantidade);
    atualizarPrecoCarrinho();
    atualizarQuantidade(idProduto);
}

function atualizarQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoQuantidade[idProduto];
}

function desenharProdutoNoCarrinho (idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =  document.getElementById("produtos-carrinho");
    const article = document.createElement('article');
    const cardProdutoCarrinho = `
        <button id="excluir-card-${produto.id}" class= "excluir" ><i class="fa-regular fa-circle-xmark" ></i> </button>
        <img src="./assets/img/${produto.nomeArquivoImagem}" alt="">

        <div>
            <p class="nome-carrinho">${produto.nome}</p>
            <p>$ ${produto.preco}</p>
        </div>

    <div class='counter'>
        <button id ='decrementar-produto-${produto.id}' class= 'counter-sub'>-</button>
        <p id='quantidade-${produto.id}' class = 'counter-quant'>${idsProdutoCarrinhoQuantidade[produto.id]}</p>
        <button id ='incrementar-produto-${produto.id}' class = 'counter-add'>+</button>
    </div>`;

article.innerHTML = cardProdutoCarrinho;

containerProdutosCarrinho.appendChild(article);

document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", ()=> decrementarQuantidadeProduto(produto.id));

document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", ()=> incrementarQuantidadeProduto(produto.id));

document.getElementById(`excluir-card-${produto.id}`).addEventListener("click", ()=> removerDoCarrinho(produto.id));
}




export function renderizarProdutosCarrinho(idProduto){
    const containerProdutosCarrinho =  document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML= "";

    for(const idProduto in idsProdutoCarrinhoQuantidade){
        desenharProdutoNoCarrinho(idProduto)
    }
}

export function adicionarAoCarrinho (idProduto) {

    if(idProduto in idsProdutoCarrinhoQuantidade) {
        incrementarQuantidadeProduto(idProduto)
        return;
    }

    idsProdutoCarrinhoQuantidade[idProduto] = 1;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoQuantidade);
    desenharProdutoNoCarrinho(idProduto);
}

export function atualizarPrecoCarrinho () {
    const preco = document.getElementById('preco-total');
    let precoTotal = 0;
    for(const idProdutoNoCarrinho in idsProdutoCarrinhoQuantidade) {
    precoTotal += catalogo.find(p => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoQuantidade[idProdutoNoCarrinho];
    }

    preco.innerText = `Total: $${precoTotal}`;
    salvarLocalStorage('total', precoTotal);
}