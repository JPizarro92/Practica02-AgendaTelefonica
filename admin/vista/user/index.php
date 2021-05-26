<?php 
    session_start(); 
    if(!isset($_SESSION['isLogged']) || $_SESSION['isLogged'] === FALSE){ 
        header("Location: ../../../public/vista/login.html"); 
    } 

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="../../..//public/vista/css/normalize.css">
    <link rel="stylesheet" href="../../../public/vista/css/style.css">
    <link rel="stylesheet" href="../css/layout.css">
    <link rel="shortcut icon" href="../../../admin/" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../javascript/busqueda.js"></script>
</head>
<body>
    <header class="header">
        <div class="header-superior">
            <div class="header-superior-izquierda">
                <a href="#"><img src="../../../public/vista/img/Logotipo.png" alt=""></a>
            </div>
            <div class="header-superior-derecha">
                <nav class="navigation login">
                    <div class="contenedor-busqueda">
                        <span><i class="fas fa-search icono-buscar"></i></span>
                        <input type="text" class="busqueda">   
                    </div>
                    
                    <a href="../../../config/cerrar_sesion.php">Cerrar Sesión</a>
                </nav>
                
            </div>
        </div>
        <div class="contenedor-nav contenedor-titulo">
            <h1>AGENDA</h1> 
        </div>
    </header>

<main>
    
    <div class="encabezado">
        <div class="encabezado-superior">
            <div class="encabezado-superior-texto">
                <i class="fas fa-users fa-2x"></i>
                <h3>Búsqueda</h3>
            </div>
            
        </div>
        <div class="encabezado-inferior">
            <form onsubmit="return buscarPorCedula()" class="form-busqueda">
                <input type="text" id="cedula" name="cedula" value="">
                <input type="button" id="buscar" name="buscar" value="Buscar" onclick="buscarPorCedula()">
            </form>
        </div>
    </div>

    <div id="informacion" class="informacion" style="display: flex">
        
    </div>

    
</main>
<footer>
    <div class="contenedor-footer">
        <div class="content-foo">
            <i class="fas fa-mobile-alt icono"></i>
            <h4>Phone</h4>
            <p>+59389894523</p>
        </div>
        <div class="content-foo">
            <i class="fas fa-envelope icono"></i>
            <h4>Email</h4>
            <p>jpizarror@est.ups.edu.ec <br>
                scallet@est.ups.edu.ec
            </p>
        </div>
        <div class="content-foo">
            <i class="fas fa-map-marker-alt icono"></i>
            <h4>Location</h4>
            <p>Cuenca/Ecuador</p>
        </div>
    </div>
    <h2 class="titulo-final">&copy; JRDesing | Jorge Pizarro - Rolando Calle </h2>
</footer>
</body>
</html>