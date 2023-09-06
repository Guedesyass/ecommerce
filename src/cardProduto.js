import { catalogo } from "./utilidade";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo () {
    for (const produtoCatalogo of catalogo){
        const cartaoProduto = `
    <div class="card ${produtoCatalogo.hidratante ? "hidrantante" : "gelDeLimpeza"}" id="card-produto-@${produtoCatalogo.id}">
    <img src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" 
    alt="Texto Alternativo">
    
    <div class = "texto-card">
    <p class="marca">${produtoCatalogo.marca}</p>
    <p class="nome">${produtoCatalogo.nome}</p>
    <p clas="preco">R$ ${produtoCatalogo.preco}0</p>

    <button id='adicionar-${produtoCatalogo.id}'> <i class="fa-solid fa-cart-plus"></i> </button>
    </div>
    </div>`;

    //add o card de produto a seção de produtos HTML
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    } 

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
    }
}

