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