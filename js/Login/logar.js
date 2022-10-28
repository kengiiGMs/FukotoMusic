function efetuarLogin() {
	event.preventDefault();
	var nome_login = $("#nome_login").val();
	var senha_login = $("#senha_login").val();
	if (senha_login != "" && nome_login != "") {
		$.ajax({
			type: "POST",
			url: "crud/logar/validarLogin.php",
			data: $("#formEntrar").serialize(),
			success: function (resultado) {
				if (resultado == 0) {
					alert("Senha ou Usuário Incorretos");
					$("#senha_login").val("");
				} else if (resultado == 1) {
					window.location.href = "page/home.php";
				} else {
					alert("ERRO SQL TENTE NOVAMENTE OU PEÇA AJUDA DOS ADMINISTRADORES");
				}
			},
		});
	}
}
