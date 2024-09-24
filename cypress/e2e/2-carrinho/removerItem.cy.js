import CarrinhoPage from "../../support/pages/CarrinhoPage";
import HomePage from "../../support/pages/HomePage";
import DetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";

describe('Remover item do carrinho', () => {
  it.only('Deve remover um item do carrinho', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); 
    DetalhesProdutoPage.validarDetalhesDoProduto(); 
    DetalhesProdutoPage.clicarBotaoAdicionar();
    DetalhesProdutoPage.avancarParaCarrinho();
    CarrinhoPage.verificarItemNoCarrinho();
    CarrinhoPage.removerItemDoCarrinho();
    CarrinhoPage.confirmarRemocaoDoItem();
  });

});
