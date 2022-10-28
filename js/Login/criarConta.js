function verificarCadastro() {
	event.preventDefault();
	var nome_login = $("#nome_login").val();
	var senha_login = $("#senha_login").val();
	var confirma_senha = $("#confirma_senha").val();
	var email_login = $("#email_login").val();

	if (senha_login == confirma_senha) {
		$.ajax({
			type: "POST",
			url: "../../crud/logar/consultaCadastro.php",
			data: $("#formCadastro").serialize(),
			success: function (resultado) {
				if (resultado == 0) {
					alert("Usuário já Cadastrado");
				} else if (resultado == 1) {
					alert("Usúario Cadastrado com Sucesso");
					window.location.href = "../../index.php";
				} else {
					alert("ERRO SQL TENTE NOVAMENTE OU PEÇA AJUDA DOS ADMINISTRADORES");
				}
			},
		});
	} else {
		alert("As senhas não são iguais");
	}
}
