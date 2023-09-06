export const catalogo = [
    {
        id: "1",
        marca:"Creamy",
        nome: "Ácido Mandélico",
        preco:79.90 ,
        nomeArquivoImagem:"produto-1.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "2",
        marca:"Creamy",
        nome: "Ácido Glicólico",
        preco:77.90,
        nomeArquivoImagem:"produto-2.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "3",
        marca:"Creamy",
        nome: "Gel Creme Facial Retinol 0,3 + Nano Vitamina C",
        preco:68.90,
        nomeArquivoImagem:"produto-3.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "4",
        marca:"Creamy",
        nome: "Serum Facial Vitamina C Glicolisada",
        preco:81.90,
        nomeArquivoImagem:"produto-4.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "5",
        marca:"Creamy",
        nome: "Ácido Salicílico",
        preco:75.80,
        nomeArquivoImagem:"produto-5.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "6",
        marca:"Creamy",
        nome: "Protetor Solar Oil Free",
        preco:85.90,
        nomeArquivoImagem:"produto-6.png",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "7",
        marca:"Creamy",
        nome: "Gel Creme Calmante 40g",
        preco:55.90,
        nomeArquivoImagem:"produto-7.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {
        id: "8",
        marca:"Creamy",
        nome: "Serum Facial Anti-idade 30ml",
        preco:45.90,
        nomeArquivoImagem:"produto-8.jpg",
        hidratante: false,
        gelDeLipeza: false,
        },
        {
        id: "9",
        marca:"Creamy",
        nome: "Ácido Lático Creamy",
        preco:77.90,
        nomeArquivoImagem:"produto-9.jpg",
        hidratante: true,
        gelDeLipeza: false,
        },
        {id: "10",
        marca:"Creamy",
        nome: "Gel de Limpeza 180ml",
        preco:91.50,
        nomeArquivoImagem:"produto-10.jpg",
        hidratante: false,
        gelDeLipeza: true,
        },
    ];

    export function salvarLocalStorage(chave, informacao) {
        localStorage.setItem(chave, JSON.stringify(informacao))
    }

    export function lerLocalStorage(chave) {
        return JSON.parse(localStorage.getItem(chave))
    }

    export function apagarDoLocalStorage(chave){
        localStorage.removeItem(chave)
    }

    export function desenharProdutoDoCarrinhoSimples (idProduto, idContainerHTML, quantidadeProduto){
        const produto = catalogo.find((p) => p.id === idProduto);

        const containerProdutosCarrinho =  document.getElementById(idContainerHTML);
        const article = document.createElement('article');
        const cardProdutoCarrinho = `
            <img src="./assets/img/${produto.nomeArquivoImagem}" alt="">
    
            <div>
                <p class="nome-carrinho">${produto.nome}</p>
                <p>$ ${produto.preco}</p>
            </div>
    
            <p id='quantidade-${produto.id}' class = 'quantidade-checkout'>${quantidadeProduto}</p>`;
    
    article.innerHTML = cardProdutoCarrinho;
    
    containerProdutosCarrinho.appendChild(article);
    }