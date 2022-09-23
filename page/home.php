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
    <link rel="icon" type="image/png" href="../assets/IconePage/page.png" />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/home.css">
    <title>Inicio</title>
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
                                                    <img src="../assets/Perfil/emilia.jpg" alt="Perfil"
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
                                                            <a class="nav-link"
                                                                href="https://getbootstrap.com/docs/5.1/examples/"
                                                                id="linkMenu"><i class="bi bi-house-door"
                                                                    style="padding-right: 5px;"></i>Inicio</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-file-earmark-text"
                                                                    style="padding-right: 5px;"></i>Novidades</a>
                                                        </li>
                                                        <li class="nav-item" style="padding: 1%;">
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-music-note-list"
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
                                                            <a class="nav-link" href="#" id="linkMenu"><i
                                                                    class="bi bi-box-arrow-left"
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
                    <div class="container flow" id="containerF">
                        <h6>Favoritas</h6>
                        <div class="media-scroller snaps-inline vertical-scroll">
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensF" src="../assets/Favoritas/lisaCAPA.jpg"
                                        alt="Lisa - Crossing Field">
                                    <h2>Lisa</h2>
                                    <p class="subTituloFav">Crossing Field</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensF" src="../assets/Favoritas/officialHigeDandismCAPA.jpg"
                                        alt="Official Hige Dandism - Cry Baby">
                                    <h2>Official Hige Dandism</h2>
                                    <p class="subTituloFav"> Cry Baby</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensF" src="../assets/Favoritas/yoasobiCAPA.jpg"
                                        alt="Yoasobi - Racing into the Night">
                                    <h2>Yoasobi</h2>
                                    <p class="subTituloFav">Racing into the Night</p>
                                </div>
                            </div>
                            <div class="media-element">
                                <img class="imagensF" src="../assets/Favoritas/makiOtsukiCAPA.jpg"
                                    alt="Maki Otsuki - Memories">
                                <h2>Maki Otsuki</h2>
                                <p class="subTituloFav"> Memories</p>
                            </div>
                            <div class="media-element">
                                <img class="imagensF" src="../assets/Favoritas/reoNaCAPA.jpg" alt="ReoNA - Nai Nai">
                                <h2>ReoNA</h2>
                                <p class="subTituloFav">Nai Nai</p>
                            </div>
                            <div class="col">
                                <div class="media-element">
                                    <img class="imagensF" src="../assets/Favoritas/gooseHouseCAPA.jpg"
                                        alt="GooseHouse - Hikaru Nara">
                                    <h2>GooseHouse</h2>
                                    <p class="subTituloFav">Hikaru Nara</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- Fim Favoritas -->
                <div class="container">
                    <div class="container">
                        <H6>Músicas mais Tocadas</H6>
                    </div>
                    <div class="row">
                        <div class="col col-sm-12 col-lg-6 col-12"
                            style="overflow-y: auto; height:550px; margin: 20px 0 20px;" id="scrollToc">
                            <a href="#" style="text-decoration: none;" class="linkToc">
                                <div class="container" id="containerS">
                                    <div class="col" style="display: flex; align-items: center;">
                                        <p class="subNum">1</p>
                                        <img class="imagensS" src="../assets/MTocadas/ikimono-gakariCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <h3 class="TituloToc">
                                                <b>Ikimono Gakari</b>
                                            </h3>
                                            <p class="subTituloToc">Hotaru no Hikari</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" style="text-decoration: none;" class="linkToc">
                                <div class="container" id="containerS">
                                    <div class="col" style="display: flex; align-items: center;">
                                        <p class="subNum">2</p>
                                        <img class="imagensS" src="../assets/MTocadas/aimerCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <h3 class="TituloToc">
                                                <b>Aimer</b>
                                            </h3>
                                            <p class="subTituloToc">Spark Again</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" style="text-decoration: none;" class="linkToc">
                                <div class="container" id="containerS">
                                    <div class="col" style="display: flex; align-items: center;">
                                        <p class="subNum">3</p>
                                        <img class="imagensS" src="../assets/MTocadas/yoasobiCAPA2.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <h3 class="TituloToc">
                                                <b>Yoasobi</b>
                                            </h3>
                                            <p class="subTituloToc">Tabun</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" style="text-decoration: none;" class="linkToc">
                                <div class="container" id="containerS">
                                    <div class="col" style="display: flex; align-items: center;">
                                        <p class="subNum">4</p>
                                        <img class="imagensS" src="../assets/MTocadas/miuraJamCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <h3 class="TituloToc">
                                                <b>Aimer</b>
                                            </h3>
                                            <p class="subTituloToc">Zankyou Sanka</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" style="text-decoration: none;" class="linkToc">
                                <div class="container" id="containerS">
                                    <div class="col" style="display: flex; align-items: center;">
                                        <p class="subNum">5</p>
                                        <img class="imagensS" src="../assets/MTocadas/radwimpsCAPA.jpg">
                                        <div class="container-fluid" style="text-align:center;">
                                            <h3 class="TituloToc">
                                                <b>Radwimps</b>
                                            </h3>
                                            <p class="subTituloToc">Sparkle</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" style="text-decoration: none;" class="linkToc">
                                <div class="container" id="containerS">
                                    <div class="col" style="display: flex; align-items: center;">
                                        <p class="subNum">6</p>
                                        <img class="imagensS" src="../assets/MTocadas/yoshikiCAPA.png">
                                        <div class="container-fluid" style="text-align:center;">
                                            <h3 class="TituloToc">
                                                <b>Yoshiki</b>
                                            </h3>
                                            <p class="subTituloToc">Red Swan</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col">
                            <H6 style="text-align: center; margin: 2px 0 4px;">Artistas mais Pesquisados</H6>
                            <div class="container" style="display: flex; align-items: center;">
                                <p class="subNum">1</p>
                                <img src="../assets/APesquisados/lisaPerfil.png" alt="" class="imagensA">
                                <h4 class="TituloArt">Lisa</h4>
                            </div>
                            <div class="container" style="display: flex; align-items: center;">
                                <p class="subNum">2</p>
                                <img src="../assets/APesquisados/yoasobiPerfil.png" alt="" class="imagensA">
                                <h4 class="TituloArt">Yoasobi</h4>
                            </div>
                            <div class="container" style="display: flex; align-items: center;">
                                <p class="subNum">3</p>
                                <img src="../assets/APesquisados/reoNaPerfil.jpg" alt="" class="imagensA">
                                <h4 class="TituloArt">ReoNa</h4>
                            </div>
                            <div class="container" style="display: flex; align-items: center;">
                                <p class="subNum">4</p>
                                <img src="../assets/APesquisados/AimerPerfil.jpg" alt="" class="imagensA">
                                <h4 class="TituloArt">Aimer</h4>
                            </div>
                            <div class="container" style="display: flex; align-items: center;">
                                <p class="subNum">5</p>
                                <img src="../assets/APesquisados/kanaBoonPerfil.jpg" alt="" class="imagensA">
                                <h4 class="TituloArt">Kana-Boon</h4>
                            </div>
                        </div><!-- Fim conteúdo Artistas -->
                    </div><!-- Fim Conteúdo Sub-Principal (ROW)-->
                </div><!-- Fim Conteúdo Sub-Principal (CONTAINER)-->
            </div><!-- Fim Conteúdo Principal -->
        </div><!-- Fim RowPrincipal -->
    </div><!-- FimContainerPrincipal -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</body>

</html>