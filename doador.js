  //A função vai pegar os dados do input e armazenar no local stogerer...
function cadastrodoador(){
  var doador = {
    nome: document.getElementById("nomeDoador").value,
    senha: document.getElementById("senhaDoador").value,
    email: document.getElementById("emailDoador").value,
    genero: document.getElementById("genero").value,
    estadocivil: document.getElementById("estadocivil").value,
    tiposangue: document.getElementById("tiposangue").value,
    estado: document.getElementById("estadoDoacao").value,
    cidade: document.getElementById("cidade").value,
    celular: document.getElementById("celular").value,
    observacao: document.getElementById("observacao").value,
    doacao: document.getElementById("doacao").value,
    rua: document.getElementById("rua").value,
    numero: document.getElementById("numero").value,
    bairro: document.getElementById("bairro").value,
    cep: document.getElementById("cep").value,
  }
     alert("Cadastro para ser um doador foi realizador com sucesso");
     localStorage.setItem("dadosDoador", JSON.stringify(doador));
     window.location.href="login.html";
    }
      
      // A função chamardadosdoador era para funcionar bucando os dados que estão armazenados no localStorage 
      //e enviar para a pagina de perfil do doador "pagDoador.html"
      var doador =  JSON.parse(localStorage.getItem("dadosDoador"));
      document.getElementById('valornome').innerHTML = doador.nome ;
      document.getElementById("valorsenha").innerHTML = doador.senha ;
      document.getElementById("valoremail").innerHTML = doador.email ;
      document.getElementById("valorgenero").innerHTML = doador.genero ;
      document.getElementById("valorestadocivil").innerHTML = doador.estadocivil ;
      document.getElementById("valortiposanguineo").innerHTML = doador.tiposangue ;
      document.getElementById("valorestado").innerHTML = doador.estado ;
      document.getElementById("valorcidade").innerHTML = doador.cidade ;
      document.getElementById("valorcelular").innerHTML = doador.celular ;
      document.getElementById("valorobservacao").innerHTML = doador.observacao ;
      document.getElementById("valordoacao").innerHTML = doador.doacao ;
      document.getElementById("valorrua").innerHTML = doador.rua ;
      document.getElementById("valornumero").innerHTML = doador.numero ;
      document.getElementById("valorbairro").innerHTML = doador.bairro ;
      document.getElementById("valorcep").innerHTML = doador.cep ;











        






       
        

