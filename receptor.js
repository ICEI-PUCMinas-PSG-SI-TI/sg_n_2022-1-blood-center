
// A função cadastroSolicitarDoação vai pegar todos os dados do input a armazenar no localStorage quando o usuário 
//apertar o botão para cadastro

function cadastroSolicitarDoacao(){
  var solicita = {
    nomePaciente: document.getElementById("nomePaciente").value,
    senha: document.getElementById("senhaPaciente").value,
    email: document.getElementById("emailPaciente").value,
    estadoDoacao: document.getElementById("estadoDoacao").value,
    tiposangue: document.getElementById("tiposangue").value,
    unidadeDeDoacao: document.getElementById("unidadeDeDoacao").value,
    celular: document.getElementById("celular").value,
    observacao: document.getElementById("observacao").value,
    rua: document.getElementById("rua").value,
    numero: document.getElementById("numero").value,
    bairro: document.getElementById("bairro").value,
    cep: document.getElementById("cep").value,
    localPaciente: document.getElementById("localPaciente").value,
  }
 alert("Cadastro para solicitação de doação foi realizado com sucesso" );
 localStorage.setItem("dadosReceptor", JSON.stringify(solicita));
 window.location.href="login.html";
}

//A função chamardadosReceptor era para funcionar bucando os dados que estão armazenados no localStorage
//e enviar para a pagina de perfil do receptor "pagReceptor.html"
    var solicita = JSON.parse(localStorage.getItem("dadosReceptor"));
    document.getElementById("valornomePaciente").innerHTML = solicita.nomePaciente;
    document.getElementById("valoremailPaciente").innerHTML = solicita.email;
    document.getElementById("valorsenhaPaciente").innerHTML = solicita.senha;
    document.getElementById("valorestadoPaciente").innerHTML = solicita.estadoDoacao;
    document.getElementById("valorsanguePaciente").innerHTML = solicita.tiposangue;
    document.getElementById("valorlocalPaciente").innerHTML = solicita.localPaciente;
    document.getElementById("valorunidadeDoacao").innerHTML = solicita.unidadeDeDoacao;
    document.getElementById("valorcelularPaciente").innerHTML = solicita.celular;
    document.getElementById("valorobservaçãoPaciente").innerHTML = solicita.observacao;
    document.getElementById("valorruaPaciente").innerHTML = solicita.rua;
    document.getElementById("valornumeroPaciente").innerHTML = solicita.numero;
    document.getElementById("valorbairroPaciente").innerHTML = solicita.bairro;
    document.getElementById("valorcepPaciente").innerHTML = solicita.cep;