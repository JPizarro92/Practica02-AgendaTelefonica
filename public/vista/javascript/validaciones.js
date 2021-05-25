function __(id){
    return document.getElementById(id);
}

function validarCamposObligatorios() { 
    var bandera = true;
    var banderaM = true;
    var banderaF = true;
    for(var i = 0; i < document.forms[0].elements.length; i++){ 
        var elemento = document.forms[0].elements[i] 
        if(elemento.value == '' && ( elemento.type == 'text' || elemento.type == 'date' || elemento.type == 'email' || elemento.type == 'password')){ 
            if(elemento.id == 'cedula'){ __('mensajeCedula').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'nombres'){ __('mensajeNombres').innerHTML = '(*campo obligaatorio)'}
            if(elemento.id == 'apellidos'){ __('mensajeApellidos').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'direccion'){ __('mensajeDireccion').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'fechaNacimiento'){ __('mensajeFechaNacimiento').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'correo'){ __('mensajeCorreo').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'password'){ __('mensajePassword').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'movil'){ __('mensajeMovil').innerHTML = '(*campo obligatorio)'}
            if(elemento.id == 'fijo'){ __('mensajeFijo').innerHTML = '(*campo obligatorio)'}
            //elemento.style.border = '1px red solid'
            bandera = false
        }else{
            if(elemento.id == 'cedula'){ 
                __('mensajeCedula').innerHTML = ''
                bandera = validarNumeroCedula('mensajeCedula', elemento)
            }
            if(elemento.id == 'nombres'){ __('mensajeNombres').innerHTML = ''}
            if(elemento.id == 'apellidos'){ __('mensajeApellidos').innerHTML = ''}
            if(elemento.id == 'direccion'){ __('mensajeDireccion').innerHTML = ''}
            if(elemento.id == 'fechaNacimiento'){ __('mensajeFechaNacimiento').innerHTML = ''}
            if(elemento.id == 'correo'){ __('mensajeCorreo').innerHTML = ''}
            if(elemento.id == 'password'){ __('mensajePassword').innerHTML = ''}
            if(elemento.id == 'movil'){ __('mensajeMovil').innerHTML = ''}
            if(elemento.id == 'fijo'){ __('mensajeFijo').innerHTML = ''}
            //elemento.style.border = 'none'
        }
    } 

    if(__('operadoraFija').value==''){
        __('mensajeOperadoraFija').innerHTML = '(*campo obligatorio)'
        banderaF = false;
    }else{
        __('mensajeOperadoraFija').innerHTML = ''
    }

    if(__('operadoraMovil').value==''){
        __('mensajeOperadoraMovil').innerHTML = '(*campo obligatorio)'
        banderaM = false;
    }else{
        __('mensajeOperadoraMovil').innerHTML = ''
    }

    return bandera && banderaM && banderaF 
}

//Funcion OK - no tocar
function validarNumeroCedula(nombreSpanId, elemento){
    //Proceso de validación de cedula
    span = __(nombreSpanId)
    span.style.color = "orange"
    if(elemento.value.length == 10){
        var cad = elemento.value
        var total = 0;
        var longitud = cad.length;
        var longcheck = longitud - 1;

        if (cad !== "" && longitud == 10){ 
            for(i = 0; i < longcheck; i++){
                if (i%2 === 0) {
                    var aux = cad.charAt(i) * 2;
                    if (aux > 9) aux -= 9;
                        total += aux;
                } else {
                    total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
                }
            }
            total = total % 10 ? 10 - total % 10 : 0;
            if (cad.charAt(longitud-1) == total) {
                span.innerHTML = "<i class='fas fa-check-circle'></i>"
                span.style.color = "green"
                elemento.style.border = '1px rgb(59, 59, 59) solid'
                return true
            }else{
                span.innerHTML = " (La cédula ingresada no es válida)"
                span.style.color = "red"
                return false
            }
        }
    }else if(elemento.value.length == 0){
        span.innerHTML = ' (*campo obligatorio)'
        return false
    }else{
        document.getElementById('mensajeCedula').innerHTML = ' (el campo debe tener 10 números)'
        return false
    }
}

//Función OK - no tocar
function validarNumero(evt, nombreSpanId, elemento){
    // code is the decimal ASCII representation of the pressed key.
    var span = __(nombreSpanId);
    var code = (evt.which) ? evt.which : evt.keyCode;
    span.style.color = "orange";
    if(code==8) { // backspace.
        return true;
    } else if(code>=48 && code<=57) { // is a number.
        span.innerHTML=''
        return true;
    } else{ // other keys.
        if(elemento.value.length !=10){
            span.innerHTML=' (Ingrese solo números)'
        }
        return false;
    }
}

function validarNombres(nombreSpanId, elemento){
    span = __(nombreSpanId)
    span.style = 'red'
    if(elemento.value.length == 0 ){
        span.innerHTML = ' (*campo obligatorio)'
        return false
    }else{
        span.innerHTML = "<i class='fas fa-check-circle'></i>"
        span.style.color = "green"
        return true
    }
    
}

//Función OK - no tocar
function validarLetras(evt, nombreSpanId, elemento) { 
    let span = __(nombreSpanId);
    let code = (evt.which) ? evt.which : evt.keyCode;
    //let wordCount = elemento.value.trim().replace(/\s+/gi, ' ').split(' ').length;
    span.style.color = "orange";
    if(code==8) { // backspace.
        return true;
    }else if((code>=97 && code<=122) || code==32 || code==09 || (code>=65 && code<=90)) { // is a number.
        span.innerHTML=""
        return true;
    } else{ // other keys.
        span.innerHTML=' (Debe ingresar únicamente letras)';
        return false;
    }
    
}

//Función OK - no tocar
function validarNumeroTelefonico(nombreSpanId, elemento){
    span = __(nombreSpanId)
    span.style.color = "orange"
    if(elemento.value.length == 0){
        span.innerHTML = ' (*campo obligatorio)'
        return false
    }else if(elemento.value.length !=10 ){
        span.innerHTML = ' (el campo debe tener 10 números)'
        return false
    }else{
        span.innerHTML = "<i class='fas fa-check-circle'></i>"
        span.style.color = "green"
        return true
    }
}

//Función pendiente de mejorar(validar que sea mayor de edad)
function validarFechaIngresada(nombreSpanId, elemento){
    var span = __(nombreSpanId)
    span.style="red"
    if(elemento.value.length == 0){
        span.innerHTML = ' (*campo obligatorio)'
        return false
    }else{
        span.innerHTML = "<i class='fas fa-check-circle'></i>"
        span.style.color = "green"
        return true
    }
    
}

//Función validar correo OK - no tocar
function validarCorreo(nombreSpanId, elemento) {
    let span = __(nombreSpanId);
    let correo = elemento.value;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    span.innerHTML = ""
    if(elemento.value.length==0){
        span.innerHTML = " (*campo obligatorio)"
        span.style.color = "orange"
        return false
    }else if (!email.test(correo)) {
        span.innerHTML = " (correo no válido)"
        span.style.color = "red"
        return false
    } else {
        span.innerHTML = "<i class='fas fa-check-circle'></i>"
        span.style.color = "green"
        return true
    }
}

//
function validarCampoContrasena(nombreSpanId, elemento){
    let span = __(nombreSpanId)
    span.style="red"
    
    if(elemento.value.length == 0){
        span.innerHTML = ' (*campo obligatorio)'
        return false
    }else if(validarContrasena(elemento.value)){
        span.innerHTML = "<i class='fas fa-check-circle'></i>"
        span.style.color = "green"
        return true
    }else{
        span.innerHTML=" (error - ingrese al menos 1 mayuscula, 1 miniscula, 1 carácter especial)"
        return false
    }
}

function validarContrasena(contrasenna){
    if(contrasenna.length >= 8){		
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;
            
        for(var i = 0;i<contrasenna.length;i++){
            if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90){
                    mayuscula = true;
            }else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122){
                    minuscula = true;
            }else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57){
                    numero = true;
            }else{
                caracter_raro = true;
            }
        }
        if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true){
            return true;
        }
    }	
    return false;
}