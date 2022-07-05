  //A função vai pegar os dados do input e armazenar no local stogerer...
  function cadastrodoador(){
    var nome = document.getElementById("nomeDoador");
    var senha = document.getElementById("senhaDoador");
    var email = document.getElementById("emailDoador");
    var genero = document.getElementById("genero");
    var estadocivil = document.getElementById("estadocivil");
    var tiposangue = document.getElementById("tiposangue");
    var estado = document.getElementById("estadoDoacao");
    var cidade = document.getElementById("cidade");
    var celular = document.getElementById("celular");
    var observacao = document.getElementById("observacao");
    var doacao = document.getElementById("doacao");
    var rua = document.getElementById("rua");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");

    let dadosD = JSON.parse(localStorage.getItem("dadosDoador"));


    if(dadosD == null){
      localStorage.setItem("dadosDoador", "[]");
      dadosD = [];
    }
    

    var auxRegistro = {
      nome: nomeDoador.value,
      senha: senhaDoador.value,
      email: emailDoador.value,
      genero: genero.value,
      estadocivil: estadocivil.value,
      tiposangue: tiposangue.value,
      estado:estado.value,
      cidade: cidade.value,
      celular:celular.value,
      observacao: observacao.value,
      doacao: doacao.checked,
      rua:rua.value,
      numero: numero.value,
      bairro: bairro.value,
      cep: cep.value

   }
   dadosD.push(auxRegistro);
   alert("Cadastro para ser um doador foi realizador com sucesso");
   localStorage.setItem("dadosDoador", JSON.stringify(dadosD));


    
    // A função chamardadosdoador era para funcionar bucando os dados que estão armazenados no localStorage 
    //e enviar para a pagina de perfil do doador "pagDoador.html"

    function chamardadosDoador(){
    var nome = localStorage.getItem('nomeDoador');
    var senha = localStorage.getItem('senhaDoador');
    var genero = localStorage.getItem('emailDoador');
    var estadocivil = localStorage.getItem('genero');
    var tiposangue = localStorage.getItem('estadocivil');
    var estado = localStorage.getItem('estadoDoacao');
    var cidade = localStorage.getItem('cidade');
    var celular = localStorage.getItem('celular');
    var observacao = localStorage.getItem('observacao');
    var doacao = localStorage.getItem('doacao');
    var rua = localStorage.getItem('rua');
    var numero = localStorage.getItem('numero');
    var bairro = localStorage.getItem('bairro');
    var cep = localStorage.getItem('cep');


    document.getElementById("valornome").value= nome;
    document.getElementById("valorsenha").value= senha;
    document.getElementById("valoremail").value= email;
    document.getElementById("valorgenero").value= genero;
    document.getElementById("valorestadocivil").value= estadocivil;
    document.getElementById("valortiposanguineo").value= tiposangue;
    document.getElementById("valorestado").value= estado;
    document.getElementById("valorcidade").value= cidade;
    document.getElementById("valorcelular").value= celular;
    document.getElementById("valorobservacao").value= observacao;
    document.getElementById("valordoacao").value= doacao;
    document.getElementById("valorrua").value= rua;
    document.getElementById("valornumero").value= numero;
    document.getElementById("valorbairro").value= bairro;
    document.getElementById("valorcep").value= cep;
    

    }
};











      






     
      

