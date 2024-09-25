import HomePage from "../../support/pages/HomePage";
import DetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";
import CarrinhoPage from "../../support/pages/CarrinhoPage";

describe('Adicionar item ao carrinho pela página inicial', () => {
  it.only('Deve adicionar um item ao carrinho a partir da página inicial', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); 
    DetalhesProdutoPage.validarDetalhesDoProduto(); 
    DetalhesProdutoPage.clicarBotaoAdicionar();
    DetalhesProdutoPage.avancarParaCarrinho();
    CarrinhoPage.verificarItemNoCarrinho();
  });

});
