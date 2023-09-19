botao.addEventListener("click", function () {
  var nomedoCliente = nome.value;
  var quantiaSorvete = quantidade.value;
  var saboresSorvetes = sabores.value;

  /*alert(
    "nome: " +
      nomedoCliente +
      " Qnt: " +
      quantiaSorvete +
      " sabor " +
      saboresSorvetes
  );*/

  var dadosPedido =
    "nome: " +
    nomedoCliente +
    " Qnt: " +
    quantiaSorvete +
    "sabor: " +
    saboresSorvetes;
  //alert("Teste");

  Pedido.innerHTML = nomedoCliente;
  pedidoQuantia.innerHTML = quantiaSorvete;
  pedidoSabores.innerHTML = saboresSorvetes;
});
