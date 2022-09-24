<?php
include_once('../../bd/conexao.php');
    $banco = new conexao();
    $con = $banco->getConexao();

$nome_login =  $_POST['nome_login'];
$senha_login = sha1($_POST['senha_login']);


$pesquisaUsuario = "SELECT id_usuario FROM usuario WHERE nome_usuario = '$nome_login' AND senha_usuario = '$senha_login'";
$result= $con->query($pesquisaUsuario);
    if ($result->rowCount() > 0) {

        if(!isset($_SESSION)){
            session_start();
        }
        $_SESSION['nome_login'] = $nome_login;
        echo 1;

    }else{
        echo 0; 
    }

?>