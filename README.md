# Projeto de Testes E2E - Cardápio Digital

Este projeto contém a automação de testes end-to-end (E2E) para o sistema **Cardápio Digital**, utilizando **Cypress** e o padrão **Page Object Model (POM)**. O objetivo é garantir a qualidade dos fluxos críticos do sistema, como adicionar produtos ao carrinho, remover produtos, finalizar pedidos, entre outros.

## Índice
- [Descrição](#descrição)
- [Ferramentas Utilizadas](#ferramentas-utilizadas)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar os Testes](#como-executar-os-testes)
- [Page Object Model (POM)](#page-object-model-pom)
- [Exemplo de Teste](#exemplo-de-teste)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Este projeto visa automatizar os testes do **Cardápio Digital**, um sistema de pedidos online. Ele cobre fluxos como a navegação, adição de itens ao carrinho, remoção de itens e finalização de pedidos, garantindo que as funcionalidades principais estejam funcionando corretamente.

Os testes foram implementados utilizando **Cypress**, um dos frameworks mais utilizados para automação de testes E2E de aplicações web. A abordagem **Page Object Model (POM)** foi adotada para garantir melhor organização e facilidade na manutenção dos testes.

## Ferramentas Utilizadas

- **[Cypress](https://www.cypress.io/)**: Framework de testes E2E.
- **[@faker-js/faker](https://github.com/faker-js/faker)**: Biblioteca para gerar dados fictícios (nomes, endereços, números de telefone).
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **NPM**: Gerenciador de pacotes para instalar dependências.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório:
```bash
git clone https://github.com/DavidCoelho95/cardapio-digital-anota-ai-e2e-cypress.git
>>>>>>> 
```

### 2.  Instale as dependências:
```bash
npm install
```
### 3. Rodar os testes:
```bash
npx cypress open
```
Este comando abrirá o Cypress Test Runner, onde você poderá selecionar os testes para rodar.

Modo Headless (sem interface gráfica):
```bash
npx cypress run
```
## Estrutura do Projeto
A estrutura do projeto segue o padrão do Cypress com a implementação do Page Object Model (POM) para facilitar a reutilização de código e a manutenção dos testes.
```bash
├── cypress
│   ├── fixtures        # Arquivos de dados estáticos utilizados nos testes
│   ├── e2e     # Testes de integração/end-to-end
│   │   ├── paginaInicial.cy.js
│   │   └── adicionarItem.cy.js
│   │   └── removerItem.cy.js
│   │   └── pedido.cy.js
│   ├── pages           # Arquivos do Page Object Model
│   │   ├── carrinhoPage.js
│   │   ├── Home.js
│   │   └── PaginaDetalhesProdutoPage.js
│   │   └── PedidoPage.js
│   └── support         # Arquivos de suporte e configurações do Cypress
├── cypress.json        # Configurações do Cypress
├── package.json        # Dependências do projeto
└── README.md           # Documentação do projeto
```
Principais Pastas:
pages: Contém os Page Objects, onde cada página do sistema é representada por uma classe com métodos que encapsulam a interação com os elementos da interface.
e2e: Contém os testes de integração, que executam os cenários E2E.
fixtures: Contém arquivos de dados estáticos que podem ser utilizados nos testes.

## Page Object Model (POM)
O padrão Page Object Model (POM) organiza os elementos e as interações de cada página em classes separadas, facilitando a manutenção e reutilização de código.

### Exemplo de Página no POM:
```javascript
// cypress/pages/cartPage.js
class CartPage {
  getCartItem() {
    return cy.get('.cart-item');
  }

  removeItem() {
    return cy.get('[data-testid="btn-down"]').click();
  }

  finalizeOrder() {
    return cy.get('#finalize_order').click();
  }
}
export default new CartPage();
```
### Exemplo de Teste Utilizando POM:
```javascript
// cypress/integration/cart.spec.js
import CartPage from '../pages/cartPage';

describe('Teste de Carrinho de Compras', () => {
  it('Deve adicionar e remover um item do carrinho', () => {
    cy.visit('/');
    cy.get('.product-item').first().click();
    cy.get('[data-testid="Adicionar ao Carrinho"]').click();
    CartPage.getCartItem().should('exist');
    CartPage.removeItem();
    CartPage.getCartItem().should('not.exist');
  });
});
```





