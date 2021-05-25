function validacionCampos(){
    var bandera=true;

    for(var i=0;i< document.forms[0].elements.length;i++){
        var elemento=document.forms[0].elements[i]
        if(elemento.value==''){
            if(elemento.id == 'cedula'){
                alert('el campo cedula esta vacia ')
            }

            if(elemento.id == 'nombres'){
                alert('el campo nombre esta vacia ')
            }

            if(elemento.id == 'apellidos'){
                alert('el campo apellido esta vacia ')
            }

            if(elemento.id == 'direccion'){
                alert('el campo direccion esta vacia ')
            }

            if(elemento.id=='telefono'){
                alert('el campo telefono esta vacia ')
            }

            if(elemento.id=='fechaNacimiento'){
                alert('el campo de la fecha de nacimiento esta vacia ')
            }

            if(elemento.id=='correo'){
                alert('el campo del correo electronico esta vacia ')
            }

            if(elemento.id=='contraseña'){
                alert('el campo contraseña esta vacia ')
            }


            elemento.style.border ='1px red solid'
            elemento.className='error'
            bandera=false
        }
    }

    if(bandera){
        document.location.href="../template/pagina.php"
    }

    return bandera
}

function validacionNumeros(){
    var elemento = document.getElementById('telefono')
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)

    console.log(miAscii)
    if(miAscii>47 && miAscii<58){
        document.getElementById('mensajeTelefono').innerHTML=''
        if(elemento.value.length>10){
            document.getElementById('mensajeTelefono').innerHTML='<br>el numero de telefono sobrepasa los 10 caracteres'
        }
        
    }else{
        document.getElementById('mensajeTelefono').innerHTML='<br>debe ingresar solo numeros'
    }

    if(elemento.value.length==0){
        document.getElementById('mensajeTelefono').innerHTML=''
    }
}

function valCedula(cedula) {
    document.getElementById('mensajeCedula').innerHTML = ''
    var miAscii = cedula.value.charCodeAt(cedula.value.length-1)
    
    console.log(miAscii)
    if(miAscii>47 && miAscii< 58){
        if (cedula.value.length == 10) {
            var digito_region = cedula.value.substring(0, 2)
            if (digito_region >= 0 && digito_region <= 24) {
                var ultimo_digito = cedula.value.substring(9, 10)
                var pares = parseInt(cedula.value.substring(1, 2)) + parseInt(cedula.value.substring(3, 4)) + parseInt(cedula.value.substring(5, 6)) + parseInt(cedula.value.substring(7, 8))

                var numero1 = cedula.value.substring(0, 1)
                var numero1 = (numero1 * 2)
                if (numero1 > 9) {
                    var numero1 = (numero1 - 9)
                }

                var numero3 = cedula.value.substring(2, 3);
                var numero3 = (numero3 * 2);
                if (numero3 > 9) {
                    var numero3 = (numero3 - 9);
                }

                var numero5 = cedula.value.substring(4, 5);
                var numero5 = (numero5 * 2);
                if (numero5 > 9) {
                    var numero5 = (numero5 - 9);
                }

                var numero7 = cedula.value.substring(6, 7);
                var numero7 = (numero7 * 2);
                if (numero7 > 9) {
                    var numero7 = (numero7 - 9);
                }

                var numero9 = cedula.value.substring(8, 9);
                var numero9 = (numero9 * 2);
                if (numero9 > 9) {
                    var numero9 = (numero9 - 9);
                }

                var impares = numero1 + numero3 + numero5 + numero7 + numero9

                var suma_total = (pares + impares)

                var primer_digito_suma = (suma_total).toString().substring(0, 1)

                var decena = (parseInt(primer_digito_suma) + 1) * 10

                var digito_validador = decena - suma_total

                if (digito_validador == 10) {
                    digito_validador = 0
                }

                if (digito_validador == ultimo_digito) {
                    document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es valida'
                } else {
                    document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es invalida'
                }
            } else {

                document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula no pertenece a ninguna region'
                return false
            }

        } else {

            document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula debe tener 10 digitos'
            return false
        }
    }else{
        if(cedula.value.length == 0){
            document.getElementById('mensajeCedula').innerHTML = ''
        return false
        }
        document.getElementById('mensajeCedula').innerHTML = '<br>debe ingresar solo numeros'
        return false
    }
    return true
}


function validarNombre(elemento){
    var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
    if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
    
        if(elemento.value.length > 2){
            var con=0
            for(var i=2;i<elemento.value.length;i++){
                var let1=elemento.value.charCodeAt(i)
                var let2=elemento.value.charCodeAt(i - 1)
                //console.log(let1)
                //console.log(let2)
                
                if(let2==32 && (let1 >= 97 && let1 <= 122 || let1 >= 65 && let1 <= 90)){
                    con++
                    
                }
            }
            console.log(con)
            if(con==1){
                document.getElementById('mensajeNombres').innerHTML = ''
            }else{
                document.getElementById('mensajeNombres').innerHTML = '<br>Debe contener dos nombres'
            }
        }else{
            if(elemento.value.length == 0){
                document.getElementById('mensajeNombres').innerHTML = ''
                return false
            }
            document.getElementById('mensajeNombres').innerHTML = '<br>Debe contener dos nombres'
            return false
        }
        
    }else{
        if(elemento.value.length == 0){
            document.getElementById('mensajeNombres').innerHTML = ''
            return false
        }
        document.getElementById('mensajeNombres').innerHTML = '<br>Debe contener solo letras'
    }

}



function validarApellido(elemento){
    var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
    if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
    
        if(elemento.value.length > 2){
            var con=0
            for(var i=2;i<elemento.value.length;i++){
                var let1=elemento.value.charCodeAt(i)
                var let2=elemento.value.charCodeAt(i - 1)
                //console.log(let1)
                //console.log(let2)
                
                if(let2==32 && (let1 >= 97 && let1 <= 122 || let1 >= 65 && let1 <= 90)){
                    con++
                    
                }
            }
            console.log(con)
            if(con==1){
                document.getElementById('mensajeApellido').innerHTML = ''
            }else{
                document.getElementById('mensajeApellido').innerHTML = '<br>Debe contener dos Apellidos'
            }
        }else{
            if(elemento.value.length == 0){
                document.getElementById('mensajeApellido').innerHTML = ''
                return false
            }
            document.getElementById('mensajeApellido').innerHTML = '<br>Debe contener dos Apellidos'
            return false
        }
        
    }else{
        if(elemento.value.length == 0){
            document.getElementById('mensajeApellido').innerHTML = ''
            return false
        }
        document.getElementById('mensajeApellido').innerHTML = '<br>Debe contener solo letras'
    }

}



function validacionCorreo(elemento){
    if(elemento.value.length > 2){
        document.getElementById('mensajeCorreo').innerHTML=''
        var pos=elemento.value.indexOf('@')
        if(pos!=-1){
            var cor=elemento.value.substring(pos+1,elemento.value.length)
            
            if((cor == 'est.ups.edu.ec') || (cor == 'ups.edu.ec')){
                return true
            }else{
                document.getElementById('mensajeCorreo').innerHTML='<br>extenciones permitidas (ups.edu.ec, est.ups.edu.ec)'
            }
        }else{
            document.getElementById('mensajeCorreo').innerHTML='<br>correo invalido falta el @'
        }
    }else{
        document.getElementById('mensajeCorreo').innerHTML='<br>correo invalido'
    }
    if(elemento.value.length==0){
        document.getElementById('mensajeCorreo').innerHTML=''
    }
}

function validacionFecha(elemento){
    if(elemento.value.length==10){
        document.getElementById('mensajeFecha').innerHTML=''
        //console.log(elemento.value.charCodeAt(elemento.value.length-1))
        if(elemento.value.charCodeAt(2) == 47 && elemento.value.charCodeAt(5)== 47){
            var dia = parseInt(elemento.value.substring(0,2))
            var mes = parseInt(elemento.value.substring(3,5))
            var año = parseInt(elemento.value.substring(6,10))

            console.log(dia)
            console.log(mes)
            console.log(año)

            if(mes<13 && mes>0){
                
                if((mes==01) || (mes==03) || (mes == 05) || (mes == 07) || (mes == 09) || (mes == 11)){
                    if(dia>31 || dia <1){
                        document.getElementById('mensajeFecha').innerHTML='<br>el dia no esta en el rango del mes'
                    }
                }else{
                    if(mes==02){
                        if(dia>29 || dia <1){
                            document.getElementById('mensajeFecha').innerHTML='<br>el dia no esta en el rango del mes'
                        }
                    }else{
                        if(dia>30 || dia <1){
                            document.getElementById('mensajeFecha').innerHTML='<br>el dia no esta en el rango del mes'
                        }
                    }
                }

                if(año>2020 || año<1900){
                    document.getElementById('mensajeFecha').innerHTML='<br>el año es incorrecto'
                }
            }else{
                document.getElementById('mensajeFecha').innerHTML='<br>error el mes no existe'
            }
        }else{
            document.getElementById('mensajeFecha').innerHTML='<br>error al ingresar la fecha(ejemplo 02/10/1998)'
        }
    }else{
        document.getElementById('mensajeFecha').innerHTML='<br>error al ingresar la fecha(ejemplo 02/10/1998)'
    }

    if(elemento.value.length == 0){
        document.getElementById('mensajeFecha').innerHTML=''
    }
}

//validacion de la contraseña del formulario

/// ver la validacion de las mayusculas y minusculas 

function validarContraseña(elemento) {
    document.getElementById('mensajeContraseña').innerHTML = ''
    if (elemento.value.length > 7) {
        document.getElementById('mensajeContraseña').innerHTML = ''
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)

        if (elemento.value.indexOf('@') == -1 && elemento.value.indexOf('_') == -1 && elemento.value.indexOf('$') == -1) {

            document.getElementById('mensajeContraseña').innerHTML = '<br> La contraseña debe contener almenos uno de estos tres caracteres (@,_,$)'
            return false

        } else {
            var min = 0
            var may = 0
            for (var i = 0; i <= elemento.value.length; i++) {
                if (elemento.value.charCodeAt(i) >= 97 && elemento.value.charCodeAt(i) <= 122) {
                    may++

                } else if (elemento.value.charCodeAt(i) >= 65 && elemento.value.charCodeAt(i) <= 90) {
                    min++
                }
            }

            if (min > 0 && may > 0) {
                document.getElementById('mensajeContraseña').innerHTML = ''
                return true
            } else {
                document.getElementById('mensajeContraseña').innerHTML = '<br> La contraseña debe tener mayusculas y minusculas'
                return false
            }

        }
    } else {
        document.getElementById('mensajeContraseña').innerHTML = '<br> La contraseña debe tener como minimo 8 caracteres'
        return false
    }
}










function validarApellidos(elemento) {
    if (elemento.value.length > 0) {
        document.getElementById('mensajeApellido').innerHTML = ''
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)
        var espacio1 = elemento.value.indexOf(' ')
        var j = 0
        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
            for (var i = 0; i <= elemento.value.length; i++) {
                if (espacio1 != -1) {
                    if (miAscii <= 97 && miAscii >= 122 || miAscii <= 65 && miAscii >= 90 || miAscii != 32) {
                        j = j + 1
                        console.log("j " + j)
                        if (j <= 1) {
                            return true
                        }
                    } else {
                        document.getElementById('mensajeApellido').innerHTML = '<br>El campo debe contener dos Apellidos'
                        return false
                    }
                } else {
                    document.getElementById('mensajeApellido').innerHTML = '<br>El campo debe contener dos Apellidos'
                    return false
                }
            }
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            document.getElementById('mensajeApellido').innerHTML = '<br>El campo Apellidos debe contener solo letras'
            return false
        }
    } else {
        if(elemento.value.length==0){
            document.getElementById('mensajeApellido').innerHTML = ''
        }
        return false
    }

    
}

function validarNombres(elemento) {
    if (elemento.value.length > 0) {
        document.getElementById('mensajeNombres').innerHTML = ''
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)
        var espacio1 = elemento.value.indexOf(' ')
        var j = 0
        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
            for (var i = 0; i <= elemento.value.length; i++) {
                if (espacio1 != -1) {
                    if (miAscii <= 97 && miAscii >= 122 || miAscii <= 65 && miAscii >= 90 || miAscii != 32) {
                        j = j + 1
                        console.log("j " + j)
                        if (j <= 1) {
                            return true
                        }
                    } else {
                        document.getElementById('mensajeNombres').innerHTML = '<br>El campo debe contener dos nombres'
                        return false
                    }
                } else {
                    document.getElementById('mensajeNombres').innerHTML = '<br>El campo debe contener dos nombres'
                    return false
                }
            }
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombres debe contener solo letras'
            return false
        }
    } else {
        if(elemento.value.length==0){
            document.getElementById('mensajeNombres').innerHTML = ''
        }
        return false
    }

    
}