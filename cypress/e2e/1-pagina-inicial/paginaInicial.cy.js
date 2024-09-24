import HomePage from "../../support/pages/HomePage";

describe("Página Inicial do Cardápio Digital", () => {
  it("Deve carregar a página inicial corretamente com todos os elementos visíveis", () => {
    HomePage.visit(); // Acesse a página inicial
    HomePage.validarPaginaInicial(); // Verifique se os elementos estão visíveis na versão desktop
  });
});
