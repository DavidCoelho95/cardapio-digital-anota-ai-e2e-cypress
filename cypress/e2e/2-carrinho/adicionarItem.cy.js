import PaginaInicialPage from "../../support/pages/PaginaInicialPage";
import PaginaDetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";

describe('Adicionar item ao carrinho pela página inicial', () => {
  it.only('Deve adicionar um item ao carrinho a partir da página inicial', () => {
    // cy.viewport("iphone-6"); // Define a viewport como iPhone 6
    PaginaInicialPage.visit();
    PaginaInicialPage.selecionarItemPorNome(); // Chama o método para verificar a carga da página
    PaginaDetalhesProdutoPage.validarDetalhesDoProduto(); //Valida detakhes do produto
    PaginaDetalhesProdutoPage.clicarBotaoAdicionar();
  });

});
