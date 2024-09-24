class CarrinhoPage {
  
  // Verifica se o item está no carrinho
  verificarItemNoCarrinho() {
    cy.viewport("macbook-15"); // Mudar para desktop
    this.validarElementosDesktop();
    // Validações para a versão Mobile
    cy.viewport("iphone-6"); // Mudar para mobile
    this.validarElementosMobile();
  }
  validarElementosDesktop() {
    // Verificar se o nome "Carrinho" está presente no topo
    cy.get('.navigation-header').contains("Carrinho").should("be.visible");
    // Verificar se o item está presente no carrinho
    cy.get('[data-testid="chooser"]').should("be.visible");
    // Verificar se o botão "Adicionar mais itens" está presente e visível
    cy.get(":nth-child(2) > .button")
      .should("be.visible")
      .and("contain", "Adicionar mais itens");
    // Verificar se o botão "Avançar" está presente e visível
    cy.get("button").contains("Avançar").should("be.visible");
  }
  validarElementosMobile() {
    // Verificar se o nome "Carrinho" está presente no topo
    cy.get('.navigation-header').contains("Carrinho").should("be.visible");
    // Verificar se o item está presente no carrinho
    cy.get('[data-testid="chooser"]').should("be.visible");
    // Verificar se o botão "Adicionar mais itens" está presente e visível
    cy.get(":nth-child(2) > .button")
      .should("be.visible")
      .and("contain", "Adicionar mais itens");
    // Verificar se o botão "Avançar" está presente e visível
    cy.get("button").contains("Avançar").should("be.visible");
  }

  // Remove um item do carrinho (caso tenha botão para remover)
  removerItemDoCarrinho() {
   // Verificar se o item está presente antes de tentar removê-lo
   cy.get('[data-testid="chooser"]').should('be.visible');
   // Verificar se o botão de remoção está presente e visível
   cy.get('[data-testid="btn-down"]').should('be.visible');
   // Clicar no botão de remoção
   cy.get('[data-testid="btn-down"]').click();

   cy.viewport("macbook-15"); // Mudar para desktop
   this.validarElementosModal()
   cy.viewport("iphone-6"); // Mudar para mobile
   this.validarElementosModal()
  }
  validarElementosModal(){
    // Verificar se o modal está visível
    cy.get('.modal').should('be.visible');
    // Verificar se o texto de confirmação "Deseja remover" está presente no modal
    cy.get('.modal').contains('Deseja remover').should('be.visible');
    // Verificar se o botão "Sim" está presente e visível
    cy.get('[data-testid="Sim"]').should('be.visible').and('contain', 'Sim');
    // Verificar se o botão "Não" está presente e visível
    cy.get('[data-testid="Não"]').should('be.visible').and('contain', 'Não');
  }

  confirmarRemocaoDoItem(){
    cy.get('[data-testid="Sim"]').contains("Sim").click(); // Clica em "Sim" para confirmar a remoção
    this.validarAlertaItemRemovido()
  }
  validarAlertaItemRemovido(){
    // Verificar se o container do alerta está visível
    cy.get('[data-testid="alert-container"]').should('be.visible');
    // Verificar se o conteúdo do alerta está presente
    cy.get('.alert-content').should('be.visible');
    // Verificar se o alerta contém a mensagem "item removido com sucesso"
    cy.contains('Item removido com sucesso').should('be.visible');
  }
 naoConfirmarRemocaoDoItem(){
    cy.get('[data-testid="Não"]').click(); // Clica em "Não" para cancelar a remoção
  }
  
  // Avançar para checkout
  avancarParaCheckout() {
    cy.get('.bottom-navigation__slot > .button')
      .should('be.visible') // Verifica se o botão está visível
      .and('contain', 'Avançar')// Verifica se o texto "Avançar" está presente no botão
      .click();
  }
}

export default new CarrinhoPage();
