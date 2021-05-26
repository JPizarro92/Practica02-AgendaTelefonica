

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