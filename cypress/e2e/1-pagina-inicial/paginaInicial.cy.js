import PaginaInicialPage from "../../support/pages/PaginaInicialPage";

describe("Página Inicial do Cardápio Digital", () => {
  it.only("Deve carregar a página corretamente com todos os elementos visíveis", () => {
    PaginaInicialPage.visit(); // Acesse a página inicial
    PaginaInicialPage.validarPaginaInicial(); // Verifique se os elementos estão visíveis na versão desktop
  });
});
