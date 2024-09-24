import HomePage from "../../support/pages/HomePage";
import DetalhesProdutoPage from "../../support/pages/PaginaDetalhesProdutoPage";
import CarrinhoPage from "../../support/pages/CarrinhoPage";
import PedidoPage from "../../support/pages/PedidoPage";

describe('Realizar Pedido', () => {
  it.only('Deve realizar pedido para entrega em casa', () => {
    HomePage.visit();
    HomePage.selecionarItemPorNome(); // Chama o método para verificar a carga da página
    DetalhesProdutoPage.validarDetalhesDoProduto(); //Valida detakhes do produto
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

  });

});
