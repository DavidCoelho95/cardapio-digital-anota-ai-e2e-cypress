import { generateData } from "../../support/fakerUtils"; // Ajuste o caminho conforme necessário
import { generateAddress } from "../../support/fakerUtils"; // Ajuste o caminho conforme necessário

const nomeGerado = generateData.getNome();
const numeroWhatsAppGerado = generateData.getNumeroWhatsApp();
const address = generateAddress(); // Gera um endereço falso

class PedidoPage {
  // Verifica se o item está no carrinho
  validarPaginaIdentificacao() {
    cy.viewport("macbook-15"); // Mudar para desktop
    this.validarElementosPaginaIdentificacao();
    // Validações para a versão Mobile
    cy.viewport("iphone-6"); // Mudar para mobile
    this.validarElementosPaginaIdentificacao();
  }
  validarElementosPaginaIdentificacao() {
    // Verificar se o texto "Identifique-se" está presente no cabeçalho de navegação
    cy.get(".navigation-header")
      .contains("Identifique-se")
      .should("be.visible");
    // Verificar a presença dos dois campos de entrada
    cy.get('[raw=""] > [data-testid="field-input"]')
      .first()
      .should("be.visible");
    cy.get(':nth-child(2) > [data-testid="field-input"]').should("be.visible");
    // Verificar se o texto descritivo está presente com a mensagem "Para realizar seu pedido vamos precisar"
    cy.get(".description-text")
      .contains(
        "Para realizar seu pedido vamos precisar de suas informações, este é um ambiente protegido."
      )
      .should("be.visible");
    // Verificar se o botão com o texto "Avançar" está presente e desabilitado
    cy.get(".button").contains("Avançar").should("be.visible"); // Verifica se o botão está visível

    // Tentar clicar no botão e garantir que a ação de clique não ocorra
    cy.get(".button").contains("Avançar").click({ force: true }); // Forçar o clique
    // // Opcionalmente, verifica que o botão não executa alguma ação após o clique
    // cy.get(".field-error").contains("Digite um número válido com DDD");
  }
  preencherDadosIdentificacao() {
    // Usar Faker para preencher campos
    cy.get('[raw=""] > [data-testid="field-input"]')
      .first()
      .clear()
      .type(numeroWhatsAppGerado);

    cy.get(':nth-child(2) > [data-testid="field-input"]')
      .clear()
      .type(nomeGerado);
  }
  avancarParaTelaFinalizarPedido() {
    cy.get(".button").contains("Avançar").click();
  }
  validarModalConfirmarDadosIdentificacao() {
    cy.viewport("macbook-15"); // Mudar para desktop
    this.validarElementosModalConfirmarDados();
    // Validações para a versão Mobile
    cy.viewport("iphone-6"); // Mudar para mobile
    this.validarElementosModalConfirmarDados();
  }
  validarElementosModalConfirmarDados() {
    // Verificar a presença do modal
    cy.get(".modal").should("be.visible");
    // Validar o título do modal
    cy.get(".confirm-identity-content__title").should(
      "contain.text",
      "Confirme seus dados"
    );
    // Validar o nome gerado
    cy.get(".confirm-identity-content__name").should(
      "contain.text",
      nomeGerado
    );
    // Validar o telefone gerado
    // cy.get('.confirm-identity-content__phone').should("contain.text", numeroWhatsAppGerado);

    // Validar a presença dos botões
    cy.get('[data-testid="Editar informações"]').should("be.visible");
    cy.get('[data-testid="Confirmar"]').should("be.visible");
  }

  confirmarDadosIdentificacao() {
    cy.get('[data-testid="Confirmar"]').click();
  }

  validarPaginaFinalizarPedido() {
    this.validarElementosPaginaFinalizarPedido();
    // Validações para a versão Mobile
    cy.viewport("iphone-6"); // Mudar para mobile
    this.validarElementosPaginaFinalizarPedido();
    cy.viewport("macbook-15"); // Mudar para desktop
    this.validarElementosPaginaFinalizarPedido();
  }
  validarElementosPaginaFinalizarPedido() {
    // Verificar se o texto "Finalizar pedido" está presente no cabeçalho de navegação
    cy.get(".navigation-header")
      .contains("Finalizar pedido")
      .should("be.visible");
    // Verificar se contém o nome gerado
    cy.get(".user-details").should("contain.text", nomeGerado);

    //Valida modal do endereço
    cy.get(".delivery-address").should("be.visible").and("not.be.empty"); // Certifica-se de que não está vazio
    // Validar a opção "Retirar em mãos"
    cy.get('[data-testid="take_alone"]')
      .should("be.visible")
      .and("contain.text", "Retirar no estabelecimento"); // Verifique o texto que deveria estar presente
    // Validar a opção "Local"
    cy.get('[data-testid="local_alone"]')
      .should("be.visible")
      .and("contain.text", "Consumir no local"); // Verifique o texto que deveria estar presente

    // Verificar se o campo de observações está visível/
    cy.get('[data-testid="input-text"]').should("be.visible"); // Verifica se o campo está visível
    //   .and("have.attr", "placeholder", "Ex Apertar.");

    // Verificar o botão de finalização do pedido
    cy.get("#finalize_order")
      .should("be.visible") // Verifica se o botão está visível
      .and("contain.text", "Selecione a forma de entrega"); // Verifique o texto do botão
  }
  cadastrarEndereco() {
    cy.get(".delivery-address__container > .button")
      .should("be.visible") // Verifica se o botão está visível
      .and("contain.text", "Cadastrar endereço") // Verifica se o botão contém o texto esperado
      .click();
    // Verificar se o modal está visível
    cy.get(".bottom-modal__content")
      .should("be.visible") // Verifica se o modal está visível
      .and("contain.text", "Selecione seu bairro"); // Verifica se o modal contém o texto esperado
    //Selecionar bairro
    cy.get(".list-item").click();
    this.preencherDadosEndereco();
    this.salvarEndereco();
    this.selecionarEnderecoEntregaEmCasa();
  }
  preencherDadosEndereco() {
    // Preenche os campos com os dados gerados
    cy.get(
      '[data-testid="address-form"] > :nth-child(1) > [data-testid="field-input"]'
    ).type(address.rua);
    cy.get(':nth-child(2) > [data-testid="field-input"]').type(address.numero);
    cy.get(':nth-child(3) > [data-testid="field-input"]').type(
      address.complemento
    );
    cy.get(':nth-child(4) > [data-testid="field-input"]').type(
      address.pontoDeReferencia
    );
    //  cy.get('[data-testid="address-form"] > :nth-child(5) > .column > [data-testid="field-input"]')
    //   .should('not.be.empty'); // Verifica se o campo Bairro não está vazio
    // // Verificar se o sexto campo está preenchido
    // cy.get(':nth-child(6) > [data-testid="field-input"]')
    //   .should('not.be.empty'); // Verifica se o campo Cidade não está vazio
  }
  salvarEndereco() {
    cy.get(".button") // Seletor do botão
      .contains("Salvar") // Verifica se contém o texto "Salvar"
      .click(); // Clica no botão
  }
  selecionarEnderecoEntregaEmCasa() {
    cy.get(".delivery-address").click();
  }
  selecionarRetirarNoEstabelecimento() {
    cy.get('[data-testid="take_alone"]').click();
  }
  selecionarConsumirNoLocal() {
    cy.get('[data-testid="local_alone"]').click();
  }
  selecionarFormaDePagamentoEmDinheiro() {
    cy.get(
      '.payment-methods > .expandable > [data-testid="expandable-content"] > :nth-child(1) > :nth-child(1) > .radio-chooser'
    ).click()
    this.validarElementosModalPagamento()
    this.naoPrecisaDeTroco();
  }
  validarElementosModalPagamento() {
  // Verifica se o campo de input está presente
  cy.get('[data-testid="field-input"]')
    .should('be.visible');
  // Verifica se o botão "Não preciso de troco" está presente
  cy.get('[data-testid="Não preciso de troco"]')
    .should('be.visible');
  // Verifica se o botão "Confirmar" está presente
  cy.get('[data-testid="Confirmar"]')
    .should('be.visible');
  }
  naoPrecisaDeTroco(){
    cy.get('[data-testid="Não preciso de troco"]').click();
  }
  preencherCampoObservacoes(){
    cy.get('[data-testid="input-text"]').type('Teste QA')
  }

  concordarComPoliticaPrivacidade()
  {
<<<<<<< HEAD
    cy.get('.box').should('be.visible').click();
=======
    cy.get('.box', { timeout: 10000 }).click();
>>>>>>> origin/main
  }

  clicarNoBotaoFazerPedido(){
     cy.get('#finalize_order') 
     .should('be.visible') 
     .click(); 
    this.validarElementosPaginaConfirmacaoPedido();
  }
  validarElementosPaginaConfirmacaoPedido(){
    // Verifica se o cabeçalho contém "Pedido realizado"
    // cy.get('.header')
    //   .should('contain', 'Pedido realizado');
    // Verifica se a mensagem de feedback contém "Pedido realizado com sucesso!"
    cy.get('.feedback')
      .should('contain', 'Pedido realizado com sucesso!');
    // Verifica se o botão "Acompanhar pedido" está presente e visível
    cy.get('.primary')
      .should('be.visible')
      .and('contain', 'Acompanhar pedido');
    // Verifica se o botão "Continuar para o WhatsApp" está presente e visível
    cy.get('.outline')
      .should('be.visible')
      .and('contain', 'Continuar no WhatsApp');

  }
}

export default new PedidoPage();
