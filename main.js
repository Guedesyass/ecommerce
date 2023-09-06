import { renderizarCatalogo } from "./src/cardProduto";
import { inicializarFiltros } from "./src/filtroCatalogo";
import { inicializarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho} from "./src/menuCarrinho";



renderizarCatalogo();
inicializarCarrinho();
inicializarFiltros();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();


