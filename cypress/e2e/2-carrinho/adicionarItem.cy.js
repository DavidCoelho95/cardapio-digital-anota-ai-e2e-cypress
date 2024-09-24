import HomePage from "../../support/pages/HomePage";
import DetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";
import CarrinhoPage from "../../support/pages/CarrinhoPage";

describe('Adicionar item ao carrinho pela página inicial', () => {
  it.only('Deve adicionar um item ao carrinho a partir da página inicial', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); // Chama o método para verificar a carga da página
    DetalhesProdutoPage.validarDetalhesDoProduto(); //Valida detakhes do produto
    DetalhesProdutoPage.clicarBotaoAdicionar();
    DetalhesProdutoPage.avancarParaCarrinho();
    CarrinhoPage.verificarItemNoCarrinho();
  });

});
