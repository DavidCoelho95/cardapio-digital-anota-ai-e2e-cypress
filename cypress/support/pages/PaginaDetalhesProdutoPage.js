class PaginaDetalhesProdutoPage {
  // Validar detalhes do produto
   validarDetalhesDoProduto() {
    // Validações para a versão Desktop
    cy.viewport("macbook-15"); // Mudar para desktop
    this.validarElementosDesktop();
    // Validações para a versão Mobile
    cy.viewport("iphone-6"); // Mudar para mobile
    this.validarElementosMobile();
  }
   validarElementosDesktop() {
    //Validar a presença do texto "Detalhes do produto"
    cy.contains("Detalhes do produto");
    // Validar a presença do nome do produto
    cy.get(
      ".product-details .item-header-container__item__info .font-5.weight-700"
    ).should("exist");
    // Validar a presença da imagem do produto
    cy.get(".item-header-container__item__crop img")
      .should("exist")
      .and("have.attr", "src")
      .and("not.be.empty"); // Verifica se o atributo 'src' não está vazio
    // Validar a presença do botão "Adicionar"
    cy.get(".button.primary.lg").should("exist");
  }

   validarElementosMobile() {
    // Seletores e validações para mobile
    cy.get('.item-header-container__item__crop').should("be.visible"); // Exemplo de título
    cy.get('.item-header-container__item__info').should("be.visible"); // Exemplo de preço
    cy.get(".button.primary.lg").should("exist");
    // Outras validações específicas para mobile
  }

  clicarBotaoAdicionar() {
    // Seleciona o botão "Adicionar" baseado na estrutura HTML
    cy.get('button.button.primary.lg.-data') // Seletor para o botão Adicionar
      .should('be.visible') // Verifica se o botão está visível
      .click(); // Clica no botão
  }


}

export default new PaginaDetalhesProdutoPage();
