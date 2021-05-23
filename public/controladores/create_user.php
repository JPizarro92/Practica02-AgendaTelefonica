<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Usuario</title>

</head>
<body>
    <?php

    include "../../config/connectDB.php";

    $usu_cedula = isset($_POST['cedula'])?trim($_POST['cedula']):null;
    $usu_name = isset($_POST['nombres'])?mb_strtoupper(trim($_POST['nombres']),'UTF-8'):null ;
    $usu_surname = isset($_POST['apellidos'])?mb_strtoupper(trim($_POST['apellidos']),'UTF-8'):null;
    $usu_date_birth = isset($_POST['fechaNacimiento'])?trim($_POST['fechaNacimiento']):null;
    $usu_email = isset($_POST['correo'])?trim($_POST['correo']) :null;
    $usu_password = isset($_POST['password'])?trim($_POST['password']) :null;
    $usu_address = isset($_POST['direccion'])?trim($_POST['direccion']):null;
    echo '<p></p>' . $usu_date_birth;
    
    $sql = "INSERT INTO usuario 
        VALUES (0,  
                '$usu_cedula', 
                '$usu_name', 
                '$usu_surname', 
                '$usu_date_birth', 
                'USER', 
                '$usu_email', 
                MD5('$usu_password'), 
                null,
                '$usu_address', 
                'N', 
                now(), 
                null)";
    
    if ($conn->query($sql) === TRUE) { 
        echo "<p>Se ha creado los datos personales correctamemte!!!</p>"; 
    }else{ 
        if($conn->errno == 1062){ 
            echo "<p class='error'>La persona con la cedula $cedula ya esta registrada en el sistema </p>"; 
        }else{ echo "<p class='error'>Error: " . mysqli_error($conn) . "</p>"; 
        } 
    } 
    //cerrar la base de datos 
    $conn->close(); 
    echo "<a href='../vista/crear_usuario.html'>Regresar</a>"; ?> </body>
    
    ?>


</body>
</html>