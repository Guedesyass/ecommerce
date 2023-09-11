const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));
    
    for(const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function esconderHidratante() {
    exibirTodos();
    const hidrantante = Array.from(catalogoProdutos.getElementsByClassName('hidrantante'));

    for (const produto of hidrantante) {
        produto.classList.add("hidden");
    }
};

function esconderGelLimpeza() {
    exibirTodos();
    const esconderGelLimpeza = Array.from(catalogoProdutos.getElementsByClassName('gelDeLimpeza'));

    for (const produto of esconderGelLimpeza) {
        produto.classList.add("hidden");
    }
};


export function inicializarFiltros () {
    const produtoLimpeza = document.getElementById('exibir-limpeza');
    produtoLimpeza.addEventListener('click', esconderHidratante);

    const produtoHidratante = document.getElementById('exibir-hidratante');
    produtoHidratante.addEventListener('click', esconderGelLimpeza);

    const todos = document.getElementById('exibir-todos');
    todos.addEventListener('click', exibirTodos);
};