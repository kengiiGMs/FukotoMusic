<?php

      if(!isset($_SESSION)){
            session_start();
        }
        if(!isset($_SESSION['nome_login'])){
            header("location: ../index.php");
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
    <link rel="icon" type="image/png" href="../assets/IconePage/page.png" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <title>Inicio</title>
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
                                                    <img src="../assets/Perfil/emilia.jpg" alt="Perfil"
                                                        style="margin: 20px 0 10px; max-width: 90%; border-radius: 100%; border: 3px; border-style:solid; border-color: mediumvioletred">
                                                </div>
                                                <?php echo"<p style='text-align: center; font-size: 20px; margin: 0;'> $nomeUsuario </p>"?>
                                                <a href="#" class="linkVerPerfil">Ver
                                                    Perfil</a>
                                            </div>

                                            <div class="row">
                                                <div class="col m-auto">
                                                    <ul class="nav flex-column position-relative headerUL">
                                                        <li class="nav-item texte">
                                                            <a class="nav-link linkMenu" href=""><i
                                                                    class="bi bi-house-door"></i>Inicio</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-file-earmark-text"></i>Novidades</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="playlist/musica.php"><i
                                                                    class="bi bi-music-note-list"></i>Playlist</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-heart"></i>Favoritas</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-boombox"></i>Rádio</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-clock-history"></i>Histórico</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu" href="#"><i
                                                                    class="bi bi-gear"></i>Configurações</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link linkMenu"
                                                                href="../crud/logar/sair.php"><i
                                                                    class="bi bi-box-arrow-left"></i>Sair</a>
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
                    <div class="container flow" id="containerFavoritas">
                        <H3 class="titulosHome">Favoritas</H3>
                        <div class="media-scroller snaps-inline vertical-scroll">
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensFavoritas" src="../assets/Favoritas/lisaCAPA.jpg"
                                        alt="Lisa - Crossing Field">
                                    <h4 class="titulosFavoritas">Lisa</h4>
                                    <p class="subTituloFavoritas">Crossing Field</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensFavoritas" src="../assets/Favoritas/officialHigeDandismCAPA.jpg"
                                        alt="Official Hige Dandism - Cry Baby">
                                    <h4 class="titulosFavoritas">Official Hige Dandism</h4>
                                    <p class="subTituloFavoritas"> Cry Baby</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensFavoritas" src="../assets/Favoritas/yoasobiCAPA.jpg"
                                        alt="Yoasobi - Racing into the Night">
                                    <h4 class="titulosFavoritas">Yoasobi</h4>
                                    <p class="subTituloFavoritas">Racing into the Night</p>
                                </div>
                            </div>
                            <div class="media-element">
                                <img class="imagensFavoritas" src="../assets/Favoritas/makiOtsukiCAPA.jpg"
                                    alt="Maki Otsuki - Memories">
                                <h4 class="titulosFavoritas">Maki Otsuki</h4>
                                <p class="subTituloFavoritas"> Memories</p>
                            </div>
                            <div class="media-element">
                                <img class="imagensFavoritas" src="../assets/Favoritas/reoNaCAPA.jpg"
                                    alt="ReoNA - Nai Nai">
                                <h4 class="titulosFavoritas">ReoNA</h4>
                                <p class="subTituloFavoritas">Nai Nai</p>
                            </div>
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensFavoritas" src="../assets/Favoritas/gooseHouseCAPA.jpg"
                                        alt="GooseHouse - Hikaru Nara">
                                    <h4 class="titulosFavoritas">GooseHouse</h4>
                                    <p class="subTituloFavoritas">Hikaru Nara</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">


                    <div class="container">
                        <H3 class="titulosHome">Músicas mais Tocadas</H3>
                    </div>
                    <div class="row">
                        <div class="col col-sm-12 col-lg-6 col-12 maisTocadas" id="scrollToc">
                            <a href="#" class="linkTocadas">
                                <div class="container containerMaisTocadas">
                                    <div class="col colunaMaisTocadas">
                                        <p class="posicaoMaisTocadas">1</p>
                                        <img class="imagensMaisTocadas" src="../assets/MTocadas/ikimono-gakariCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <H4 class="TituloMaisTocadas">
                                                <b>Ikimono Gakari</b>
                                            </H4>
                                            <p class="subTituloMaisTocadas">Hotaru no Hikari</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="linkTocadas">
                                <div class="container containerMaisTocadas">
                                    <div class="col colunaMaisTocadas">
                                        <p class="posicaoMaisTocadas">2</p>
                                        <img class="imagensMaisTocadas" src="../assets/MTocadas/aimerCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <H4 class="TituloMaisTocadas">
                                                <b>Aimer</b>
                                            </H4>
                                            <p class="subTituloMaisTocadas">Spark Again</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="linkTocadas">
                                <div class="container containerMaisTocadas">
                                    <div class="col colunaMaisTocadas">
                                        <p class="posicaoMaisTocadas">3</p>
                                        <img class="imagensMaisTocadas" src="../assets/MTocadas/yoasobiCAPA2.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <H4 class="TituloMaisTocadas">
                                                <b>Yoasobi</b>
                                            </H4>
                                            <p class="subTituloMaisTocadas">Tabun</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="linkTocadas">
                                <div class="container containerMaisTocadas">
                                    <div class="col colunaMaisTocadas">
                                        <p class="posicaoMaisTocadas">4</p>
                                        <img class="imagensMaisTocadas" src="../assets/MTocadas/miuraJamCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <H4 class="TituloMaisTocadas">
                                                <b>Aimer</b>
                                            </H4>
                                            <p class="subTituloMaisTocadas">Zankyou Sanka</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="linkTocadas">
                                <div class="container containerMaisTocadas">
                                    <div class="col colunaMaisTocadas">
                                        <p class="posicaoMaisTocadas">5</p>
                                        <img class="imagensMaisTocadas" src="../assets/MTocadas/radwimpsCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <H4 class="TituloMaisTocadas">
                                                <b>Radwimps</b>
                                            </H4>
                                            <p class="subTituloMaisTocadas">Sparkle</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="linkTocadas">
                                <div class="container containerMaisTocadas">
                                    <div class="col colunaMaisTocadas">
                                        <p class="posicaoMaisTocadas">6</p>
                                        <img class="imagensMaisTocadas" src="../assets/MTocadas/yoshikiCAPA.png">
                                        <div class="container-fluid" style="text-align:center;">
                                            <H4 class="TituloMaisTocadas">
                                                <b>Yoshiki</b>
                                            </H4>
                                            <p class="subTituloMaisTocadas">Red Swan</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div class="col">
                            <H3 class="titulosHome">Artistas mais Pesquisados</H3>

                            <div class="container containerMaisPesquisados">
                                <p class="posicaoMaisPesquisados">1</p>
                                <img src="../assets/APesquisados/lisaPerfil.png" alt="" class="imagensMaisProcurados">
                                <h4 class="TituloMaisProcurados">Lisa</h4>
                            </div>

                            <div class="container containerMaisPesquisados">
                                <p class="posicaoMaisPesquisados">2</p>
                                <img src="../assets/APesquisados/yoasobiPerfil.png" alt=""
                                    class="imagensMaisProcurados">
                                <h4 class="TituloMaisProcurados">Yoasobi</h4>
                            </div>

                            <div class="container containerMaisPesquisados">
                                <p class="posicaoMaisPesquisados">3</p>
                                <img src="../assets/APesquisados/reoNaPerfil.jpg" alt="" class="imagensMaisProcurados">
                                <h4 class="TituloMaisProcurados">ReoNa</h4>
                            </div>

                            <div class="container containerMaisPesquisados">
                                <p class="posicaoMaisPesquisados">4</p>
                                <img src="../assets/APesquisados/AimerPerfil.jpg" alt="" class="imagensMaisProcurados">
                                <h4 class="TituloMaisProcurados">Aimer</h4>
                            </div>

                            <div class="container containerMaisPesquisados">
                                <p class="posicaoMaisPesquisados">5</p>
                                <img src="../assets/APesquisados/kanaBoonPerfil.jpg" alt=""
                                    class="imagensMaisProcurados">
                                <h4 class="TituloMaisProcurados">Kana-Boon</h4>
                            </div>

                        </div>

                    </div>


                </div>
            </div>


        </div>
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
        integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous">
    </script>
</body>

</html>