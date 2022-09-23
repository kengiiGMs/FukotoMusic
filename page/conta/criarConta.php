<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" type="image/png" href="assets/IconePage/page.png" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../../css/index.css">
    <title>Login</title>
</head>

<body>
    <div id="login">
        <div class="container">
            <div id="baseLogin">
                <div class="col-8 m-auto" id="formLogin">
                    <form method="POST" action="" autocomplete="off" onSubmit="verificarCadastro();" id="formCadastro">
                        <h2 style="text-align:center; font-size:25px; padding:15px; color:white">
                            CADASTRE A SUA CONTA</h2>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control nome_login" id="nome_login" name='nome_login'
                                required placeholder="Usuario">
                            <label>Usuario</label>
                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="email" class="form-control email_login" id="email_login" name='email_login'
                                required placeholder="Email">
                            <label>Email</label>
                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="password" class="form-control senha_login" id="senha_login" name='senha_login'
                                required placeholder="Senha">
                            <label>Senha</label>
                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="password" class="form-control confirma_senha" id="confirma_senha"
                                name='confirma_senha' required placeholder="Confirme a sua senha">
                            <label>Confirme a sua senha</label>
                        </div>
                        <button type="submit" class="btn btn-outline purple btn-lg w-100"
                            value="cadastrar">Cadastrar</button>
                        <button type="button" class="btn btn-outline purple btn-lg w-100"
                            onclick="location.href='../../index.php'" style="margin-top:5px">Voltar</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
</script>
<script>
function verificarCadastro() {
    var nome_login = $(".nome_login").val();
    var senha_login = $(".senha_login").val();
    var confirma_senha = $(".confirma_senha").val();
    var email_login = $(".email_login").val();

    if (senha_login == confirma_senha) {
        $.ajax({
            type: "POST",
            url: "../../crud/logar/consultaCadastro.php",
            data: $("#formCadastro").serialize(),
            success: function(resultado) {
                if (resultado == 0) {
                    alert("Usuário já Cadastrado");
                } else if (resultado == 1) {
                    alert("Usúario Cadastrado com Sucesso");
                    window.location.href = "../../index.php";
                } else {
                    alert("ERRO SQL TENTE NOVAMENTE OU PEÇA AJUDA DOS ADMINISTRADORES");
                }
            }
        });
    } else {
        alert("As senhas não são iguais");

    }

}
</script>

</html>