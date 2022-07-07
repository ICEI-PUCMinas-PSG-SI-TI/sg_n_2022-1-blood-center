
// A função cadastroSolicitarDoação vai pegar todos os dados do input a armazenar no localStorage quando o usuário 
//apertar o botão para cadastro

function cadastroSolicitarDoacao(){
    var nomePaciente = document.getElementById("nomePaciente");
    var senha = document.getElementById("senhaPaciente");
    var email = document.getElementById("emailPaciente");
    var estadoDoacao = document.getElementById("estadoDoacao");
    var tiposangue = document.getElementById("tiposangue");
    var unidadeDeDoacao = document.getElementById("unidadeDeDoacao");
    var celular = document.getElementById("celular");
    var observacao = document.getElementById("observacao");
    var rua = document.getElementById("rua");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");
    var localPaciente = document.getElementById("localPaciente");
    

    let dadosR = JSON.parse(localStorage.getItem("dadosReceptor"));

    if(dadosR == null){
      localStorage.setItem("dadosReceptor", "[]");
      dadosR = [];
    }
    alert(dadosR);
    var auxRegistro = {
      nomePaciente: nomePaciente.value,
      senhaPaciente:senhaPaciente.value,
      email: email.value,
      tiposangue: tiposangue.value,
      estadoDoacao: estadoDoacao.value,
      unidadeDeDoacao: unidadeDeDoacao.value,
      celular:celular.value,
      observacao: observacao.value,
      rua:rua.value,
      numero: numero.value,
      bairro: bairro.value,
      cep: cep.value,
      localPaciente : localPaciente
   }

   dadosR.push(auxRegistro);
   alert("Cadastro para solicitação de doação foi realizado com sucesso" );

   localStorage.setItem("dadosReceptor", JSON.stringify(dadosR));

   window.location.href="login.html";
   

  }
  
  //A função chamardadosReceptor era para funcionar bucando os dados que estão armazenados no localStorage
  //e enviar para a pagina de perfil do receptor "pagReceptor.html"
      function chamardadosReceptor(){

      var nome = localStorage.getItem('nomePaciente');
      var senha = localStorage.getItem('senhaPaciente');
      var email = localStorage.getItem('emailPaciente');
      var estadoDoacao = localStorage.getItem('estadoDoacao');
      var tiposangue = localStorage.getItem('tiposangue');
      var localPaciente = localStorage.getItem('localPaciente');
      var unidadeDeDoacao = localStorage.getItem('unidadeDeDoacao');
      var celular = localStorage.getItem('celular');
      var observacao = localStorage.getItem('observacao');
      var rua = localStorage.getItem('rua');
      var numero = localStorage.getItem('numero');
      var bairro = localStorage.getItem('bairro');
      var cep = localStorage.getItem('cep');
  
    

      document.getElementById("valornomePaciente").value= nome;
      document.getElementById("valoremailPaciente").value= senha;
      document.getElementById("valorsenhaPaciente").value= email;
      document.getElementById("valorestadoPaciente").value= estadoDoacao;
      document.getElementById("valorsanguePaciente").value= tiposangue;
      document.getElementById("valorlocalPaciente").value= localPaciente;
      document.getElementById("valorunidadeDoacao").value= unidadeDeDoacao;
      document.getElementById("valorcelularPaciente").value= celular;
      document.getElementById("valorobservaçãoPaciente").value= observacao;
      document.getElementById("valorruaPaciente").value= rua;
      document.getElementById("valornumeroPaciente").value= numero;
      document.getElementById("valorbairroPaciente").value= bairro;
      document.getElementById("valorcepPaciente").value= cep;
      }
