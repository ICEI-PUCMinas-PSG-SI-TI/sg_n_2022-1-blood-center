<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Blood Center</title>
    <style>
      .pessoal{
        background-color: rgb(216, 137, 144);
        margin-top: 70px;
        margin-right:20%;
        margin-left: 20%;
        margin-bottom: 70px;
        padding: 40px;
        border-radius: 15px;
        
        
      }
      .inforcadastradas{
        margin-left: 10%;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
      }

      .imgpessoal{
        margin-left: 50%;
        margin-bottom: 10%;
           
      }
    </style>
  
</head>

    <!-- INICIO CABEÇALHO DO SITE -->
    <header class="container cabeçalho">

    <!-- INICIO CONFIGURAÇÃO MENU DESKTOP -->

    <div class="logotipo">
      <img src="BC/Design_sem_nome-removebg-preview.png" class="logo">
      </div>

    <div class="menu">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="solicitar.html">Solicitar Doação</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="novodoador.html">Novo Doador</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="hemocentros.html">Hemocentros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="quemSomos.html">Quem somos</a>
        </li>
       <a href="login.html"><svg class="pessoinha" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
          <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
          </svg> <p class="acesso">Minha Conta</p></a>
      </ul>


    </div>

    <!-- FIM CONFIGURAÇÃO MENU DESKTOP -->

    
    
    <!-- INICIO CONFIGURAÇÃO MENU RESPONSIVO -->
    
    <div class="name">
      <h2><i>BLOOD CENTER</i></h2>
    </div>
    
    <nav class="menu-barras">
      <div class="collapse" id="navbarToggleExternalContent">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="solicitar.html">Solicitar Doação</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="novodoador.html">Novo Doador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="hemocentros.html">Hemocentros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="quemSomos.html">Quem somos</a>
          </li>
        </ul>
        <a href="login.html"><svg class="pessoinha" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
          <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
          </svg></a>
      </div>
      <nav class="navbar navbar-dark ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
	  </nav >
    <!-- FIM CONFIGURAÇÃO MENU RESPONSIVO -->

    </header>
    <!-- FIM CABEÇALHO DO SITE -->

    <body>
       
        <diV class="pessoal">

        <h2 class="tema"><i>Informações do receptor</i></h2>

        <div class = "inforcadastradas">

        <br>

        <?php

         $email = $_POST['nemail'];
         $senha = $_POST['nsenha'];
         $nomePaciente = $_POST['nnomePaciente'];
         $tiposangue = $_POST['ntiposangue'];
         $estadoDoacao = $_POST['nestadoDoacao'];
         $localInternacao = $_POST['nlocalInternacao'];
         $unidadeDeDoacao = $_POST['nunidadeDeDoacao'];
         $celular = $_POST['ncelular'];
         $observacao = $_POST['nobservacao'];
         $rua = $_POST['nrua'];
         $numero = $_POST['nnumero'];
         $bairro = $_POST['nbairro'];
         $cep = $_POST['ncep'];

         echo '<b> Email: </b> ' .$email. '<br>';
         echo '<b> Senha: </b> ' .$senha. '<br>';
         echo '<b> Nome do Paciente: </b> ' .$nomePaciente. '<br>';
         echo '<b> Tipo Sanguíneo: </b> ' .$tiposangue. '<br>';
         echo '<b> Estado de doação: </b> ' .$estadoDoacao. '<br>';
         echo '<b> Local da Internação: </b> ' .$localInternacao. '<br>';
         echo '<b> Unidade de doação: </b> ' .$unidadeDeDoacao. '<br>';
         echo '<b> Celular: </b> ' .$celular. '<br>';
         echo '<b> Observação: </b> ' .$observacao. '<br>';
         echo '<b> Rua: </b> ' .$rua. '<br>';
         echo '<b> N°: </b> ' .$numero. '<br>';
         echo '<b> Bairro: </b> ' .$bairro. '<br>';
         echo '<b> CEP: </b> ' .$cep. '<br>';

?>

        <div class="imgpessoal">
 
         <img width="200" height="200" src="BC/paleta.jpg" >

        </div>

      </div>

    </div>



    </body>

    <!--INICIO DO RODAPÉ -->
  <footer class=" container footer">
    <div class="footer_area">
       Copyright 2022 - Blood Center - Doação 1 
    </div>
</footer>
<!--FIM DO RODAPÉ -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</html>