class CarrinhoPage {
    
    // Seletores
    carrinhoContainer = 'div.carrinho';  // Seletor do contêiner do carrinho
    itemNoCarrinho = 'div.item-carrinho';  // Seletor de um item dentro do carrinho

    // Verifica se o item está no carrinho
    verificarItemNoCarrinho(nomeDoItem) {
        cy.get(this.carrinhoContainer)
          .should('contain', nomeDoItem);  // Verifica se o item foi adicionado ao carrinho
    }

    // Verifica se o carrinho está vazio
    verificarCarrinhoVazio() {
        cy.get(this.carrinhoContainer)
          .should('not.contain', this.itemNoCarrinho);  // Verifica se o carrinho está vazio
    }

    // Remove um item do carrinho (caso tenha botão para remover)
    removerItemDoCarrinho(nomeDoItem) {
        cy.get(this.carrinhoContainer)
          .contains(nomeDoItem)
          .parent()  // Encontra o item correto no carrinho
          .within(() => {
              cy.get('button.remover')  // Seletor do botão de remover (substitua conforme necessário)
                .click();
          });
    }

    // Confirmação da compra ou finalização do pedido
    finalizarCompra() {
        cy.get('button.finalizar-compra')  // Seletor do botão de finalizar compra
          .click();
    }
}

export default CarrinhoPage;
