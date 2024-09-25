import HomePage from "../../support/pages/HomePage";
import DetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";
import CarrinhoPage from "../../support/pages/CarrinhoPage";
import PedidoPage from "../../support/pages/PedidoPage";

describe('Realizar Pedido', () => {
  it('Deve realizar pedido para entrega em casa', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); 
    DetalhesProdutoPage.validarDetalhesDoProduto();
    DetalhesProdutoPage.clicarBotaoAdicionar();
    DetalhesProdutoPage.avancarParaCarrinho();
    CarrinhoPage.verificarItemNoCarrinho();
    CarrinhoPage.avancarParaCheckout();
    PedidoPage.validarPaginaIdentificacao();
    PedidoPage.preencherDadosIdentificacao();
    PedidoPage.avancarParaTelaFinalizarPedido();
    PedidoPage.validarModalConfirmarDadosIdentificacao();
    PedidoPage.confirmarDadosIdentificacao();
    PedidoPage.validarPaginaFinalizarPedido();
    PedidoPage.cadastrarEndereco();
    PedidoPage.selecionarFormaDePagamentoEmDinheiro();
    PedidoPage.preencherCampoObservacoes();
    PedidoPage.concordarComPoliticaPrivacidade();
    PedidoPage.clicarNoBotaoFazerPedido();

  });
  it('Deve realizar pedido para retirar no estabelecimento', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); 
    DetalhesProdutoPage.validarDetalhesDoProduto(); 
    DetalhesProdutoPage.clicarBotaoAdicionar();
    DetalhesProdutoPage.avancarParaCarrinho();
    CarrinhoPage.verificarItemNoCarrinho();
    CarrinhoPage.avancarParaCheckout();
    PedidoPage.validarPaginaIdentificacao();
    PedidoPage.preencherDadosIdentificacao();
    PedidoPage.avancarParaTelaFinalizarPedido();
    PedidoPage.validarModalConfirmarDadosIdentificacao();
    PedidoPage.confirmarDadosIdentificacao();
    PedidoPage.validarPaginaFinalizarPedido();
    PedidoPage.selecionarRetirarNoEstabelecimento();
    PedidoPage.selecionarFormaDePagamentoEmDinheiro();
    PedidoPage.preencherCampoObservacoes();
    PedidoPage.concordarComPoliticaPrivacidade();
    PedidoPage.clicarNoBotaoFazerPedido();

  });

  it('Deve realizar pedido para consumir no local', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); 
    DetalhesProdutoPage.validarDetalhesDoProduto(); 
    DetalhesProdutoPage.clicarBotaoAdicionar();
    DetalhesProdutoPage.avancarParaCarrinho();
    CarrinhoPage.verificarItemNoCarrinho();
    CarrinhoPage.avancarParaCheckout();
    PedidoPage.validarPaginaIdentificacao();
    PedidoPage.preencherDadosIdentificacao();
    PedidoPage.avancarParaTelaFinalizarPedido();
    PedidoPage.validarModalConfirmarDadosIdentificacao();
    PedidoPage.confirmarDadosIdentificacao();
    PedidoPage.validarPaginaFinalizarPedido();
    PedidoPage.selecionarConsumirNoLocal();
    PedidoPage.selecionarFormaDePagamentoEmDinheiro();
    PedidoPage.preencherCampoObservacoes();
    PedidoPage.concordarComPoliticaPrivacidade();
    PedidoPage.clicarNoBotaoFazerPedido();

  });

});
