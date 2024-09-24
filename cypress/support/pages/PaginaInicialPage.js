class PaginaInicialPage {
  visit() {
    cy.visit(
      "https://staging-cardapio-digital.anota-ai.com/loja/teste-vaga-qa?f=msa"
    );
  }

  // Seletores
  nomeDoItem = "Mini Chicabon 92g";

  // Método para verificar se a página carrega corretamente - DESKTOP
  validarPaginaInicial() {
    // Validações para a versão Desktop
    cy.viewport("macbook-15"); // Mudar para desktop
    this.validarElementosDesktop();
    // Validações para a versão Mobile
    cy.viewport("iphone-6"); // Mudar para mobile
    this.validarElementosMobile();
  }
  validarElementosDesktop() {
    // Verifica se a informação do estabelecimento está visível
    cy.get('[data-testid="company-info"]').should("be.visible");
    // Verifica se o elemento do item está presente e visível
    cy.get('[data-v-7479b01a][role="button"].item')
      .should("be.visible") // Verifica se o elemento está visível
      .and("have.class", "item") // Verifica se o elemento possui a classe 'item'
      .contains("Início"); //Verifica se contém o texto 'Início'
    // Verifica se o menu está visível na tela
    cy.get("div.side-bar").should("be.visible");
    // Verifica se pelo menos um item do cardápio está visível
    cy.get("div.item-card.item")
      .should("be.visible")
      .its("length")
      .should("be.gte", 1); // Verifica se há pelo menos um item
  }
  validarElementosMobile() {
    // Verifica se a informação do estabelecimento está visível
    cy.get(".company-header").should("be.visible");
    // Verifica se o elemento do item está presente e visível
    cy.get('[data-v-7479b01a][role="button"].item')
      .should("be.visible") // Verifica se o elemento está visível
      .and("have.class", "item") // Verifica se o elemento possui a classe 'item'
      .contains("Início"); //Verifica se contém o texto 'Início'
    // Verifica se o menu está visível na tela
    cy.get('[data-testid="tab-item-list"]').should("be.visible");
    // Verifica se pelo menos um item do cardápio está visível
    cy.get("div.item-card.item")
      .should("be.visible")
      .its("length")
      .should("be.gte", 1); // Verifica se há pelo menos um item
  }

  // Clica no item específico para abrir a página de detalhes
  selecionarItemPorNome() {
    // Seleciona o item que contém o título "Mini Chicabon 92g"
    cy.get(".item-card .title")
      .contains("Mini Chicabon 92g")
      .should("be.visible") // Verifica se está visível
      .click({ force: true }); // Força o clique, caso haja alguma sobreposição
  }
}
export default new PaginaInicialPage();
