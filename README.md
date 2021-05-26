# Practica02-AgendaTelefonica
Práctica 2 de programación hipermedia. Creación de Agenda Telefónica usando html, javascript y php.

a.	El diagrama E-R de la solución propuesta. 
 
b.	Nombre de la base de datos 
El nombre que se a definido a la base de datos  lo llamamos Agenda.
 
c.	Sentencias SQL de la estructura de la base de datos 
Sentencia para crear la tabla Operadora.
CREATE TABLE IF NOT EXISTS `operator` (
  `ope_id` int(255) NOT NULL AUTO_INCREMENT,
  `ope_name` varchar(255) NOT NULL,
  `ope_delete` varchar(1) NOT NULL DEFAULT 'N',
  `ope_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ope_update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ope_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
Sentencia para crear la tabla usuario.
CREATE TABLE IF NOT EXISTS `phone` (
  `ph_id` int(255) NOT NULL AUTO_INCREMENT,
  `ph_type` varchar(50) NOT NULL,
  `ph_number` varchar(10) NOT NULL,
  `ph_delete` varchar(1) NOT NULL DEFAULT 'N',
  `ph_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ph_update_at` timestamp NULL DEFAULT NULL,
  `ope_id` int(255) DEFAULT NULL,
  `usu_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`ph_id`)
) 

Sentencia para crear la tabla telefono.	
CREATE TABLE IF NOT EXISTS `usuario` (
  `usu_id` int(255) NOT NULL AUTO_INCREMENT,
  `usu_cedula` varchar(15) NOT NULL,
  `usu_name` varchar(50) NOT NULL,
  `usu_surname` varchar(100) NOT NULL,
  `usu_date_birth` date NOT NULL,
  `usu_rol` varchar(50) NOT NULL,
  `usu_email` varchar(255) NOT NULL,
  `usu_sex` varchar(1) NOT NULL DEFAULT 'N',
  `usu_password` varchar(255) NOT NULL,
  `usu_image` varchar(255) DEFAULT NULL,
  `usu_address` varchar(255) NOT NULL,
  `usu_delete` varchar(1) NOT NULL DEFAULT 'N',
  `usu_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usu_updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`usu_id`)
)

d.	El desarrollo de cada uno de los requerimientos antes descritos.  
Desarrollo
1.	Se creo la pagina principal la que nos permitirá tener acceso a la pagina de registros, es decir a la pagina general la que nos redireccionara dependiendo que vaya a realizar (registro, búsqueda, información, …, etc.)
2.	Existe una modelación por secciones dentro de la capeta general (Admin, Config, Publica) ya que se realiza esto con el fin de poder tener un modelo correcto de la página creada.

3.	La parte publica es la que se mostrara a los usuarios o cliente, esta parte es la que permite tomar información para poder acceder al servicio que nos presta la página.

4.	Se creo también una bien una base de datos que nos permita guardar la información de estos registros para poder tener respaldo y no perder.

5.	Los archivos .css están únicamente configurados para dar formato a la página, con el fin de mostrar una buena interfaz al usuario o cliente.

6.	Todas las carpetas tienen una jerarquía como se reviso en la materia por lo tanto se cumple ese requisito.

7.	Los usuarios para buscar no podrán modificar ya que solo son visitantes por lo tanto ellos solo pueden realizar consulta de búsqueda nada más.

8.	Toda sla evidencia y configuracione detallaremos a continuación 

e.	La evidencia del correcto diseño de las páginas HTML usando CSS. Para lo cuál, se puede generar fotografías instantáneas (pantallazos).  
Página de Inicio
 
Página de login
 
Página de registro
 
Página de Búsqueda
 
Redirección de pagina

 
 

 
Jerarquía de capetas
 
Archivos .CSS
 
Codigo HTMl
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/icono1.jpg" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>
    <header class="header">
        <div class="header-superior">
            <div class="header-superior-izquierda">
                <a href="#"><img src="img/Logotipo.png" alt=""></a>
                
            </div>
            <div class="header-superior-derecha">
                <nav class="navigation login">
                    <div class="contenedor-busqueda">
                        <span><i class="fas fa-search icono-buscar"></i></span>
                        <input type="text" class="busqueda" >   
                        
                    </div>
                    <a href="contactos.html">Buscar</a>
                    <a href="login.html">Login</a>
                    <a href="register.html">Registro</a>
                </nav>
                
            </div>
        </div>
        <div class="contenedor-nav">
            <nav class="navigation">
                <a href="index.html" >Inicio</a>
                <a href="index.html#contenedor-sobre-nosotros" >Nosotros</a>
                <a href="index.html#contenedor" >Portafolio</a>
                <a href="index.html#servicio-cont" >Servicio</a>         
            </nav>
        </div>
        
    </header>

    <main>
        <section class="contenedor sobre-nosotros">
            <h2 class="titulo">Agenda WEB.</h2>
            <div class="contenedor-sobre-nosotros"  id="contenedor-sobre-nosotros">
                <img class="imagen-about-us" src="img/ilustracion1.svg" alt="">
                <div class="contenido-textos">
                    <h3><span>1</span>Información</h3>
                    <p>Nuestra Agenda telefónica, permite a los usuarios tener un buen manejo telefónico de tal modo que garantize la seguridad de sus datos registrados dentro de nuestros servicios,ademas nuestro servicio es pública y libre para el uso de todos quienes lo utilizen.</p>
                    <h3><span>2</span>Acceso</h3>
                    <p>En nuestra pagina todos los regitros telefonicos son validos sin ninguna penalidad ya que a estos pueden acceder muchos y poder tomar el uso de estos registros ya que le acceso dependera mucho de la persona que lo utilice nuestro servicio</p>
                    <h3><span>3</span>Uso</h3>
                    <p>El uso de esta aplicación esta prediseñada especificame para persona que utilizan agendas web ya que es sumanete importante y básica utilizable</p>
                    
                </div>
            </div>
        </section>

        <section class="portafolio">
            <div class="contenedor" id="contenedor">
                <h2 class="titulo">Portafolio</h2>
                <div class="galeria-port">
                    <div class="imagen-port">
                        <img  src="img/1.jpeg" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            
                            <p>Consulta Domicilios</p>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/codigoN.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Códigos Nacionales</p>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/codP.png" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Códigos provinciales</p>
                            <div id="moving.png"></div>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/emerg.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Consulta Número Emergencia</p>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/veli.png" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Velocidad Internet</p>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/ref.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Contactos Referentes</p>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/distan.jpg" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Distancia Ciudad</p>
                        </div>
                    </div>

                    <div class="imagen-port">
                        <img src="img/codI.png" alt="">
                        <div class="hover-galeria">
                            <img src="img/moving.png" alt="">
                            <p>Códigos Internacionales </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="clientes contenedor">
            <h2 class="titulo">¿Que opinan nuestros clientes mas detacados?</h2>
            <dic class="cards">
                <div class="card">
                    <img src="img/face1.jpg" alt="">
                    <div class="contenido-texto-card">
                        <h4>Nombre: Kim Go Eun.</h4>
                        <h5>Tengo 27 años Actor Corean <br> contacto: 902056065 <br/>
                            Email: kimgo@yahooo.com</h5>
                        <p>ES una de las mejores plataformas de uso telfonico y me a servido de mucha utilidad en mi vida laboral.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="img/face2.jpg" alt="">
                    <div class="contenido-texto-card">
                        <h4>Nombre: Son Ye Jin.</h4>
                        <h5>Tengo 22 años Actor Corean <br> contacto: 912156163 <br/>
                            Email: sonjina@yahooo.com</h5>
                        <p>Esta Agenda  es una de la mas usadas bajo sus reglas que estable, siendo la mas destacada fiable y segura.</p>
                    </div>
                </div>
            </dic>
        </section>
        <section class="about-services">
            <div class="contenedor">
                <h2 class="titulo">Nuestros Servicios</h2>
                <div class="servicio-cont" id="servicio-cont">
                    <div class="servicio-ind">
                        <img src="img/ilustracion3.svg" alt="">
                        <h3>Web</h3>
                        <p>El servicio de esta plataforma se encuentra disponible para los cuatro continentes con el proposito de brindar una mejoria agendaria con muchos propositos generales</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="img/ilustracion4.svg" alt="">
                        <h3>Exploren</h3>
                        <p>Es importante saber que esta pagina brinda el servicioo accesible dentro de cualquier navegador web que este a su alcance para poder relacionarse con nosotros, ya que seria muy favorable optar por la nuestra</p>
                    </div>
                    <div class="servicio-ind">x
                        <img src="img/ilustracion5.svg" alt="">
                        <h3>Metas</h3>
                        <p>Estadisticamente el proposito de nosotro es llegar alcanzar una de las metas mas prolongadas para este año ya que seria muy util y de su agrado a seguir usando nuestros servicios</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="contenedor-footer">
            <div clase="content-foo">
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

Login. HTML
<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>Iniciar sesión</title>
 <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <div class="login-box">
        <img src="img/login.jpg" class="avatar" alt="">
        <h1>Login</h1>
        <form id="formulario01" method="POST" action="../controladores/login.php">
            <label for="correo">Correo electrónico</label>
            <input type="text" id="correo" name="correo" value="" placeholder="Ingrese el correo ..."/>
            <br>
            <label for="nombres">Constraseña </label> <input type="password" id="contrasena" name="contrasena" value="" placeholder="Ingrese su contraseña... "/>
            <br>
            <input type="submit" id="login" name="login" value="Iniciar Sesión" />
            <a href="#">Lost your Password?</a><br>
            <a href="register.html">Don't have An account? </a>
        </form> 
    </div>
        
</body>
</html>

Registro

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style-login.css">
    <link rel="shortcut icon" href="img/icono.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script type="text/javascript" src="javascript/validaciones.js"></script>
    <style type="text/css" rel="stylesheet"> .error{ color: red; font-size: 11px;} </style>
</head>
<body>

    <header class="header">
        <div class="header-divisor">
            <img src="img/Logotipo.png" alt="" class="logotipo-centro">
            <a href="index.html">
                <i class="fas fa-home"></i>
                Inicio
            </a>
        </div>
        <div class="header-divisor">
            <a href="login.html" class="loginA">Login</a>
        </div>    
    </header>
    
    <main >
        
        <div class="contenido-registro">    
            <div class="contenido-foto">
                <div class="contenido-img">
                    <img src="img/avatar-male.svg" alt="">
                </div>
                <div class="contenido-subir-foto">
                    <button>examinar...</button>
                </div>
            </div>
            <div class="contenido-formulario">
                <div class="cont-form-titulo">
                    <h2>Registro</h2>
                </div>
                <form class="formulario" id="formulario01" method="POST" action="../controladores/create_user.php" onsubmit="return validarCamposObligatorios()">
                    <div class="fomulario-datos">
        
                        <div class="fomulario-datos-personales">
                            <label for="cedula">Cedula:</label><span id="mensajeCedula" class="error"></span>
                            <div class="input-contenedor">
                                <i class="fas fa-id-card icon"></i>
                                <input type="text" id="cedula" name="cedula" class="" placeholder="Cedula" maxlength="10" onkeypress="return validarNumero(event, 'mensajeCedula', this)" onblur="return validarNumeroCedula('mensajeCedula', this)">
                            </div>
            
                            <label for="nombres">Nombres:</label><span id="mensajeNombres" class="error"></span>
                            <div class="input-contenedor">
                                <i class="fas fa-user-alt icon"></i>
                                <input type="text" id="nombres" name="nombres" placeholder="Nombres" onkeydown="return validarLetras(event, 'mensajeNombres', this)" onblur="return validarNombres('mensajeNombres', this)">    
                            </div>
                            
                            <label for="apellidos">Apellidos:</label><span id="mensajeApellidos" class="error"></span>
                            <div class="input-contenedor">
                                <i class="fas fa-user-alt icon"></i>
                                <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" onkeydown="return validarLetras(event, 'mensajeApellidos', this)" onblur="return validarNombres('mensajeApellidos', this)">
                            </div>
                            
                            <label for="direccion">Dirección:</label><span id="mensajeDireccion" class="error"></span>
                            <div class="input-contenedor">
                                <i class="fas fa-map-marker-alt icon"></i>
                            <input type="text" id="direccion" name="direccion" placeholder="Dirección" onblur="return validarNombres('mensajeDireccion', this)">
                            </div>
                            
                            <label for="sexo">Sexo:</label><span id="mensajeSexo" class="error"></span>
                            <div class="input-contenedor input-other">
                                <div class="input-radio">
                                    <input type="radio" id='sexo' name="sexo" checked value='M' > M 
                                </div>
                                <div class="input-radio">
                                    <input type="radio" id='sexo    ' name="sexo" value='F' > F
                                </div>
                            </div>
                        
                            <label for="fechaNacimiento">Fecha Nacimiento:</label><span id="mensajeFechaNacimiento" class="error"></span>
                            <div class="input-contenedor">
                                <i class="fas fa-calendar-day icon"></i>
                                <input type="date" id="fechaNacimiento" name="fechaNacimiento" placeholder="Fecha Nacimiento" onblur="return validarFechaIngresada('mensajeFechaNacimiento', this)">
                            </div>
                        
                            <label for="correo">Correo Electrónico:</label><span id="mensajeCorreo" class="error" ></span>
                            <div class="input-contenedor">
                                <i class="fas fa-envelope icon"></i>
                                <input type="email" id="correo" name="correo" placeholder="Correo Electronico" onblur="return validarCorreo('mensajeCorreo', this)">
                            </div>
                            
                            <label for="password">Contraseña:</label> <span id="mensajePassword" class="error"></span>
                            <div class="input-contenedor">
                                <i class="fas fa-key icon"></i>
                                <input type="password" id="password" name="password" placeholder="Contraseña" onblur="return validarCampoContrasena('mensajePassword', this)">
                            </div>
                        </div>
                        <div class="fomulario-datos-personales">
                            <!-- Telefono Movil-->
                            <div class="contenedor-datos-telefono">
                                <h4>Movil</h4>
                                <label for="">Operadora:</label> <span id="mensajeOperadoraMovil" class="error"></span>
                                <div class="input-contenedor">
                                    <select id="operadoraMovil" name="operadoraMovil" class="operadora-seleccion">
                                        <option value=""></option>
                                        <option value="1">CLARO</option>
                                        <option value="2">MOVISTAR</option>
                                        <option value="3">CNT</option>
                                        <option value="5">TUENTI</option>
                                    </select>
                                </div>
                                <label for="">Número:</label> <span id="mensajeMovil" class="error"></span>
                                <div class="input-contenedor"> 
                                    <i class="fas fa-mobile-alt"></i>
                                    <input type="movil" id="movil" name="movil" placeholder="ej. 0987654321" maxlength="10">
                                </div>
                            </div>
                            <!-- Telefono Fijo-->
                            <div class="contenedor-datos-telefono">
                                <h4>Teléfono</h4>
                                <label for="">Operadora:</label> <span id="mensajeOperadoraFija" class="error"></span>
                                <div class="input-contenedor">
                                    <select id="operadoraFija" name="operadoraFija" class="operadora-seleccion">
                                        <option value=""></option>
                                        <option value="4">ETAPA</option>
                                        <option value="3">CNT</option>
                                    </select>
                                </div>
                                <label for="">Número:</label> <span id="mensajeFijo" class="error"></span>
                                <div class="input-contenedor">
                                    <i class="fas fa-phone-alt"></i>
                                    <input type="fijo" id="fijo" name="fijo" placeholder="ej. 07-2356587">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="formulario-texto">
                        <input type="submit" class="boton" id="crear" name="crear" value="Crear">
                        <p>Al unirte, aceptas nuestras politicas de privacidad.</p>
                        <p>Ya tienes cuenta? <a class="link" href="login.html">Iniciar Sesión</a></p>
                    </div>
                </form>
            </div>
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



PHP login 
<?php
 session_start();
 include '../../config/connectDB.php';
 $usuario = isset($_POST["correo"]) ? trim($_POST["correo"]) : null;
 $contrasena = isset($_POST["contrasena"]) ? trim($_POST["contrasena"]) : null;
 $sql = "SELECT * FROM usuario WHERE usu_email= '$usuario' and usu_password =
MD5('$contrasena')";
 $result = $conn->query($sql); 
 
 if ($result->num_rows > 0) { 
 $_SESSION['isLogged'] = TRUE;
 header("Location: ../../admin/vista/user/index.php");
 } else { 
 header("Location: ../vista/login.html");
 }

 $conn->close();
?>

Create_Users

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Usuario</title>
    <link rel="stylesheet" href="../vista/css/normalize.css">
    <link rel="stylesheet" href="../vista/css/style.css">
    <link rel="stylesheet" href="../vista/css/layoutform.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>

<body>
<main>
    
        
        <?php

        include "../../config/connectDB.php";

        $usu_cedula = isset($_POST['cedula'])?trim($_POST['cedula']):null;
        $usu_name = isset($_POST['nombres'])?mb_strtoupper(trim($_POST['nombres']),'UTF-8'):null ;
        $usu_surname = isset($_POST['apellidos'])?mb_strtoupper(trim($_POST['apellidos']),'UTF-8'):null;
        $usu_date_birth = isset($_POST['fechaNacimiento'])?trim($_POST['fechaNacimiento']):null;
        $usu_email = isset($_POST['correo'])?trim($_POST['correo']) :null;
        $usu_sex = isset($_POST['sexo'])?trim($_POST['sexo']):null;
        $usu_password = isset($_POST['password'])?trim($_POST['password']) :null;
        $usu_address = isset($_POST['direccion'])?trim($_POST['direccion']):null;
        
        //Creación de Usuario

        $sql = "INSERT INTO usuario VALUES (0, '$usu_cedula', '$usu_name', '$usu_surname', '$usu_date_birth', 'USER', 
                                '$usu_email', '$usu_sex', MD5('$usu_password'), null, '$usu_address', 'N', now(), null)";
        $conn->query($sql);
        
        if ($conn == TRUE) { 
            
            //Obtener ID usuario
            $sql_consulta = mysqli_query($conn, "SELECT usu_id FROM usuario WHERE usu_cedula=$usu_cedula");
            $ph_usu_id = (int) $sql_consulta->fetch_assoc()['usu_id'];
            
            //Creación de contacto móvil
            $ph_type = 'MOVIL';
            $ph_number = isset($_POST['movil'])?trim(trim($_POST['movil'])):null ;
            $ph_ope_id = (int) isset($_POST['operadoraMovil'])?trim($_POST['operadoraMovil']):null;
            $sql = "INSERT INTO phone VALUES (0, '$ph_type', '$ph_number', 'N', now(), null, '$ph_ope_id', '$ph_usu_id')";

            if (!($conn->query($sql))) { 
                //Error de creación
                ?> 
                <section>

                </section>

                <?php
            }
            
            //Creación de contacto fijo
            $ph_type = 'FIJO';
            $ph_number = isset($_POST['fijo'])?trim(trim($_POST['fijo'])):null ;
            $ph_ope_id = isset($_POST['operadoraFija'])?trim($_POST['operadoraFija']):null;
            $sql = "INSERT INTO phone VALUES (0, '$ph_type', '$ph_number', 'N', now(), null, '$ph_ope_id', '$ph_usu_id')";
            
            if (!($conn->query($sql))){ 
                //Error de creación
                ?>
                
                <?php
            }
            
            ?>
            
            <div class="confirmacion-registro">
                <div class="img-logo">
                    <img src="../vista/img/Logotipo.png" alt="">
                </div>
                <div class="confirmacion-texto">
                    <i class="fas fa-check-circle icon-green"></i>
                    <h3>Registro Exitoso</h3>
                </div>
                <a href="../../admin/vista/user/index.php" class="boton" id="">Continuar</a>
            </div>

        <?php  
        }else{ 
            if($conn->errno == 1062){ 
                //Error duplicado
                ?> 
                
                <div class="confirmacion-registro">
                    <div class="img-logo">
                        <img src="../vista/img/Logotipo.png" alt="">
                    </div>
                    <div class="confirmacion-texto">
                        <i class="fas fa-exclamation-triangle icon-yellow"></i>
                        <h3>Correo existente</h3>
                        <p>Intente con otro correo.</p>
                    </div>
                    <a href="../../admin/vista/user/index.php" class="boton" id="">Regresar</a>
                </div>

                <?php
                
            }else{ 
                
                ?> 
                <div class="confirmacion-registro">
                    <div class="img-logo">
                        <img src="../vista/img/Logotipo.png" alt="">
                    </div>
                    <div class="confirmacion-texto">
                        <i class="fas fa-times-circle icon-red"></i>
                        <h3>Lamentemos los problemas</h3>
                        <p>Intente intente mas tarde.</p>
                    </div>
                    <a href="../../admin/vista/user/index.php" class="boton" id="">Regresar</a>
                </div>
                
                <?php
            } 
        }

        //cerrar la base de datos 
        $conn->close(); 

            
    
    
    ?> 

    

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


Buscar PHP


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php
 //incluir conexión a la base de datos

 include '../../config/connectDB.php'; 
 
 $cedula = $_GET['cedula']; 
 //echo "Hola " . $cedula; 
 

$sql = "SELECT * FROM usuario,phone WHERE usu_cedula='$cedula' || usu_email='$cedula'and usuario.usu_id=phone.usu_id "; 

//cambiar la consulta para puede buscar por ocurrencias de letras
 $result = $conn->query($sql);
 echo " <table style='width:100%'>
 <tr>
 <th>Cedula</th>
 <th>Nombres</th> 
 <th>Apellidos</th>
 <th>Dirección</th>
 //<th>Telefono</th> 
 <th>Correo</th>
 <th>Fecha Nacimiento</th> 
 </tr>";
 if ($result->num_rows > 0) { 
 while($row = $result->fetch_assoc()) {
        echo "Datos encontrados";
        echo "<tr>";
        echo " <td>" . $row['usu_cedula'] . "</td>";
        echo " <td>" . $row['usu_name'] ."</td>";
        echo " <td>" . $row['usu_surname'] . "</td>";
        echo " <td>" . $row['usu_address'] . "</td>";
        echo " <td>" . $row['ph_number'] . "</td>"; 
        echo " <td>" . $row['usu_email'] . "</td>"; 
        echo " <td>" . $row['usu_date_birth'] . "</td>"; 
        echo "</tr>"; 
        

 } 
 } else { 
 echo "<tr>";
 echo " <td colspan='7'> No existen usuarios registradas en el sistema </td>";
 echo "</tr>"; 
 }
 
 echo "</table>";
 $conn->close(); 
 
?>
 <div class="header-superior-derecha">
                <div class="navigation login">
                    <a href="https://www.skype.com/es/international-calls/">Llamar</a>
                    <a href="#">Detalle</a>
                    <a href="index.html">Regresar</a>
                </div>
                
          </div>
</body>
</html>


Sript para la conecion con la base de datos
<?php
 $db_servername = "localhost:3307";
 $db_username = "root";
 $db_password = "";
 $db_name = "agenda";

 $conn = new mysqli($db_servername,$db_username,$db_password,$db_name);
 $conn->set_charset('utf8');

 #Probar conexión

 if($conn->connect_error){
    die("Fallo en conexión:".$conn->connect_error);
 }else{
    
 }

?>

f.	La evidencia del correcto funcionamiento de cada uno de los puntos requeridos. 
Todas la evidencia de la funcionalidad  se cumple aunque  en el numeral E de este mismo se dio a conocer.
g.	El informe debe incluir conclusiones apropiadas.  
Conclusiones Generales 
Podemos concluir que la practica se realiza de la manera que se pedía ya que se tuvo que aplicar todo el conocimiento adquirido en clases, ya que algunas cosas que se  incluyen son ciertas partes ya que esta es una parte que influye a la parte investigativa , por lo general esta práctica nos a permitido poner todo el empeño necesario para cumplir con los requisitos que se pedía para alcanzar el objetivo de esta práctica, de hecho  también nos a permitido desempeñar nuestra habilidades  para la implementación de la página que se diseñó, por lo tanto la practica cumple con lo pedido que al inicio se pido que se implemente.
h.	En el informe se debe incluir la información de GitHub (usuario y URL del repositorio de la práctica) 
https://github.com/JorgePizarro/Practica02-AgendaTelefonica.git

