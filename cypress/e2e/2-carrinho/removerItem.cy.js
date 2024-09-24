import PaginaInicialPage from "../../support/pages/PaginaInicialPage";
import PaginaDetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";

describe('Remover item do carrinho', () => {
  it.only('Deve remover um item do carrinho', () => {
    // cy.viewport("iphone-6"); // Define a viewport como iPhone 6
    PaginaInicialPage.visit();
    PaginaInicialPage.selecionarItemPorNome(); // Chama o método para verificar a carga da página
    PaginaDetalhesProdutoPage.validarDetalhesDoProduto(); //Valida detakhes do produto
    PaginaDetalhesProdutoPage.clicarBotaoAdicionar();
  });

});
