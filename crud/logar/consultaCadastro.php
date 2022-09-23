<?php
include_once('../../bd/conexao.php');
    $banco = new conexao();
    $con = $banco->getConexao();

$nome_login =  $_POST['nome_login'];
$email_login = $_POST['email_login'];
$senha_login = sha1($_POST['senha_login']);


$pesquisaUsuario = "SELECT id_usuario FROM usuario where nome_usuario = '$nome_login'";
$result= $con->query($pesquisaUsuario);
    if ($result->rowCount() > 0) {
        echo 0;

    }else{
        $cadastroUsuario = "INSERT INTO usuario (nome_usuario, senha_usuario, email_usuario) VALUES (?,?,?)";
        $resultado = $con->prepare($cadastroUsuario);
        $resultado->bindValue(1, $nome_login);
        $resultado->bindValue(2, $senha_login);
        $resultado->bindValue(3, $email_login);
        $final = $resultado->execute();
        
        echo 1; 
    }

?>