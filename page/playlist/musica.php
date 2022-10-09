<?php

      if(!isset($_SESSION)){
            session_start();
        }
        if(!isset($_SESSION['nome_login'])){
            header("location: ../../index.php");
        }

?>

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
    <link rel="icon" type="image/png" href="../../assets/IconePage/page.png" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../../css/home.css">
    <title>Playlist</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4">
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="container-fluid">
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                        Menu</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <div class="col">
                                            <div class="row">
                                                <form class="d-flex">
                                                    <input class="form-control me-2" type="search"
                                                        placeholder="Precisa de Ajuda?" aria-label="Search">
                                                    <button class="btn btn-outline purple" type="submit">Buscar</button>
                                                </form>
                                                <div class="text-center">
                                                    <img src="../../assets/Perfil/emilia.jpg" alt="Perfil"
                                                        style="margin: 20px 0 10px; max-width: 90%; border-radius: 100%; border: 3px; border-style:solid; border-color: mediumvioletred">
                                                </div>
                                                <p style="text-align: center; font-size: 20px; margin: 0; ">NaomiDxD
                                                </p>
                                                <a href="#" id="vLinkMenu">Ver
                                                    Perfil</a>
                                            </div>
                                            <div class="row">
                                                <div class="col m-auto">
                                                    <ul class="nav flex-column position-relative "
                                                        style="text-align: justify;">
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="../home.php" id="linkMenu"><i
                                                                    class="bi bi-house-door"
                                                                    style="padding-right: 5px;"></i>Inicio</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-file-earmark-text"
                                                                    style="padding-right: 5px;"></i>Novidades</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="playlist/musica.php"
                                                                id="linkMenu"><i class="bi bi-music-note-list"
                                                                    style="padding-right: 5px;"></i>Playlist</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-heart"
                                                                    style="padding-right: 5px;"></i>Favoritas</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-boombox"
                                                                    style="padding-right: 5px;"></i>Rádio</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-clock-history"
                                                                    style="padding-right: 5px;"></i>Histórico</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-gear"
                                                                    style="padding-right: 5px;"></i>Configurações</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="../crud/logar/sair.php"
                                                                id="linkMenu"><i class="bi bi-box-arrow-left"
                                                                    style="padding-right: 5px;"></i>Sair</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div><!-- FimMenuLateral -->
            <div class="col-lg-8" style="background-image: linear-gradient(to bottom right, purple, red);">
                <div class="row">
                    <div class="container-fluid" style="padding: 0; margin: 0;">
                        <div class="d-none d-lg-block">
                            <nav class="navbar navbar-light bg-light">
                                <div class="container-fluid">
                                    <div class="row m-auto">
                                        <form class="d-flex">
                                            <input class="form-control" type="search"
                                                placeholder="Digite aqui o nome do Artista, Playlist ou Música"
                                                aria-label="Search" size="90%"
                                                style="font-size: 90%; text-align: center;" />
                                            <button class="btn btn-outline purple" type="submit"
                                                style="margin-left: 10px;">Buscar</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div><!-- FimPesquisa -->
                <div class="row">
                    <div class="container m-auto" style="text-align:center">
                        <h3>Playlist</h3>
                        <div class="container">
                            <div class="card text-center m-auto" style="width: 28rem;">
                                <img class="card-img">
                                <div class="card-body">
                                    <ul class="nav nav-pills mb-2 nav-fill" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link buttonSelect active" id="pills-home-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                                role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link buttonSelect" id="pills-profile-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-profile" type="button"
                                                role="tab" aria-controls="pills-profile"
                                                aria-selected="false">Letra</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                            aria-labelledby="pills-home-tab" tabindex="0">
                                            <h4 class="card-title"></h4>
                                            <h5 class="artist"></h5>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="container current-duration">00:00</div>
                                                </div>
                                                <div class="col-5">
                                                    <input type="range" class="seekbar" step min="0" max="0"
                                                        style="width:100%">
                                                </div>
                                                <div class="col">
                                                    <div class="container total-duration">
                                                        00:00
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                            aria-labelledby="pills-profile-tab" tabindex="0">
                                            <div>
                                                <p class="lyrics"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <button type="button" class="btn btn-outline purple">
                                        <img src="../../assets/musicOptions/left.png" width="20px">
                                    </button>
                                    <button type="button" class="btn btn-outline purple" id="play-pause">
                                        <img src="../../assets/musicOptions/play.png" width="20px">
                                    </button>
                                    <button type="button" class="btn btn-outline purple">
                                        <img src="../../assets/musicOptions/right.png" width="20px">
                                    </button>
                                    <div class="row" style="text-align:center; padding-top:20px">
                                        <div class="container">
                                            <button href="" class="btn btn-outline purple">
                                                <img src="../../assets/musicOptions/sound.png" width="20px">
                                                <input type="range" class="vol-control" step min="0" max="100">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- Fim Playlist -->
            </div><!-- Fim Conteúdo Principal -->
        </div><!-- Fim RowPrincipal -->
    </div><!-- FimContainerPrincipal -->
    <script src="../../js/index.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">

    </script>
</body>

</html>