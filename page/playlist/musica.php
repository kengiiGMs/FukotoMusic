<?php

      if(!isset($_SESSION)){
            session_start();
        }
        if(!isset($_SESSION['nome_login'])){
            header("location: ../../index.php");
        }else{
            $nomeUsuario = $_SESSION['nome_login'];
        }

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" type="image/png" href="../../assets/IconePage/page.png" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../../css/style.css">
    <title>Playlist</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">


            <div class="col-lg-4 backgroundMenu">
                <nav class="navbar navbar-expand-lg bg-light sticky-top">
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
                                    <div class="container containerTituloMenu">
                                        <H6 class="offcanvas-title" id="offcanvasNavbarLabel">
                                            Menu</H6>
                                    </div>
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
                                                        class="imagemPerfil">
                                                </div>
                                                <?php echo"<p style='text-align: center; font-size: 20px; margin: 0;'> $nomeUsuario </p>"?>
                                                <a href="#" class="linkVerPerfil">Ver
                                                    Perfil</a>
                                            </div>

                                            <div class="row">
                                                <div class="col m-auto">
                                                    <ul class="nav flex-column position-relative headerUL">
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="../home.php">
                                                                <i class="bi bi-house-door"></i>Inicio
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#">
                                                                <i class="bi bi-file-earmark-text"></i>Novidades
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="playlist/musica.php">
                                                                <i class="bi bi-music-note-list"></i>Playlist
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#">
                                                                <i class="bi bi-heart""></i>Favoritas
                                                            </a>
                                                        </li>
                                                        <li class=" nav-item">
                                                                    <a class="nav-link linkMenu" href="#">
                                                                        <i class="bi bi-boombox"></i>Rádio
                                                                    </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-clock-history"></i>Histórico
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-gear"></i>Configurações
                                                            </a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu"
                                                                href="../../crud/logar/sair.php"><i
                                                                    class="bi bi-box-arrow-left"></i>Sair
                                                            </a>
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
            </div>


            <div class="col-lg-8 backgroundConteudoPrincipal">


                <div class="row">
                    <div class="container-fluid barraDepesquisaPrincipal">
                        <div class="d-none d-lg-block">
                            <nav class="navbar navbar-light bg-light">
                                <div class="container-fluid">
                                    <div class="row m-auto">
                                        <form class="d-flex formbarraDePesquisa">
                                            <input class="form-control" type="search"
                                                placeholder="Digite aqui o nome do Artista, Playlist ou Música"
                                                aria-label="Search" size="90%" />
                                            <button class="btn btn-outline purple" type="submit">Buscar</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="container m-auto" style="text-align:center">
                        <H3 class="titulosPlaylist">Playlist</H3>
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
                                                    <div class="container" id="current-duration">
                                                    </div>
                                                </div>
                                                <div class="col-5">
                                                    <input type="range" id="seekbar" step min="0" max="0"
                                                        style="width:100%">
                                                </div>
                                                <div class="col">
                                                    <div class="container" id="total-duration">
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
                                    <button type="button" class="btn btn-outline purple" id="back-music">
                                        <img src="../../assets/musicOptions/left.png" width="20px">
                                    </button>
                                    <button type="button" class="btn btn-outline purple" id="play-pause">
                                        <img id="play-pause-image" width="20px">
                                    </button>
                                    <button type="button" class="btn btn-outline purple" id="pass-music">
                                        <img src="../../assets/musicOptions/right.png" width="20px">
                                    </button>
                                    <div class="row" style="text-align:center; padding-top:20px">
                                        <div class="container">
                                            <button href="" class="btn btn-outline purple" id="muted">
                                                <img id="muted-image" width="20px">
                                            </button>
                                            <input type="range" id="volume-control" step min="0" max="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>


    <script src="../../js/PlayerMusic/index.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
        integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous">
    </script>
</body>

</html>