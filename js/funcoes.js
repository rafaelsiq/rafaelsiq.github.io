$(function() {
  var operacao = "A";
  var tbClientes = localStorage.getItem("tbClientes"); // Recupera os dados armazenados
  tbClientes = JSON.parse(tbClientes); // Converte string para objeto
  if (tbClientes == null)
    // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];

  for (var i in tbClientes) {
    var cli = JSON.parse(tbClientes[i]);
    //console.log(cli.Nome);
    $("#nomeCliente").append(
      "<option value='" + cli.Nome + "'>" + cli.Nome + "</option>"
    );
  }

  function cadastrar() {
    var cliente = JSON.stringify({
      Nome: $("#idnome").val(),
      Peso: $("#idpeso").val(),
      Altura: $("#idaltura").val(),
      Genero: $("#idgenero").val(),
      Data: $("#iddata").val()
    });

    tbClientes.push(cliente);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
  }
  $("#frmCadastro").on("submit", function() {
    if (operacao == "A") return cadastrar();
  });

  $('select[name="nomeCliente"]').on("change", function() {
    // preenche o campo IMC atual

    var imc_atual = $(this).val();

    for (var i in tbClientes) {
      var cli = JSON.parse(tbClientes[i]);
      if (imc_atual == cli.Nome) {
        cli.Altura = cli.Altura / 100;
        var resultadoIMC = cli.Peso / (cli.Altura * cli.Altura);
        resultadoIMC = resultadoIMC.toFixed(2);
        //console.log(resultadoIMC);
        $("#valor_imc").val(resultadoIMC);
      } else {
      }
    }
    if (resultadoIMC < 17) {
      document.getElementById("idresult").style.borderColor = "red";
      document.getElementById("idresult").style.color = "red";
      $("#idresult").val("Muito abaixo do peso");
    } else if (resultadoIMC >= 17 && resultadoIMC <= 18.49) {
      document.getElementById("idresult").style.borderColor = "orange";
      document.getElementById("idresult").style.color = "orange";
      $("#idresult").val("Abaixo do peso");
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.99) {
      document.getElementById("idresult").style.borderColor = "green";
      document.getElementById("idresult").style.color = "green";
      $("#idresult").val("Peso normal");
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.99) {
      document.getElementById("idresult").style.borderColor = "orange";
      document.getElementById("idresult").style.color = "orange";
      $("#idresult").val("Acima do peso");
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.99) {
      document.getElementById("idresult").style.borderColor = "red";
      document.getElementById("idresult").style.color = "red";
      $("#idresult").val("Obesidade I");
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.99) {
      document.getElementById("idresult").style.borderColor = "red";
      document.getElementById("idresult").style.color = "red";
      $("#idresult").val("Obesidade II");
    } else {
      document.getElementById("idresult").style.borderColor = "red";
      document.getElementById("idresult").style.color = "red";
      $("#idresult").val("Obesidade III");
    }
  });
});
