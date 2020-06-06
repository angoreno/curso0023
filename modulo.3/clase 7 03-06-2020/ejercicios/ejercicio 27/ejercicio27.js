function validaNombre(){
    var isValid = false;
    const input = document.forms['validaForm']['nombre'];
    const largo = 30;
    const patron = new RegExp('^[A-Z]+$', 'i');

    if(!input.value) {
        isValid = false;
    } else {
        if(input.value.length > largo) {
            isValid = false;
        } else {
            if(!patron.test(input.value)){ 
                isValid = false;
            } else {
                isValid = true;
                var cNombre=1;
            }
        }
    }
    if(!isValid) {
        // rojo: no es valido
        input.style.borderColor = 'salmon'; 
      } else {
        // verde: si es valido
        input.style.borderColor = 'palegreen';
      }
    return cNombre;
}
function validaApellido(){
    var isValid = false;
    const input = document.forms['validaForm']['apellido'];
    const largo = 50;
    const patron = new RegExp('^[A-Z]+$', 'i');

    if(!input.value) {
        isValid = false;
    } else {
        if(input.value.length > largo) {
            isValid = false;
        } else {
            if(!patron.test(input.value)){ 
                isValid = false;
            } else {
                isValid = true;
                var vApellido=1;
            }
        }
    }
    if(!isValid) {
        // rojo: no es valido
        input.style.borderColor = 'salmon'; 
      } else {
        // verde: si es valido
        input.style.borderColor = 'palegreen';
      }
      return vApellido;
}
function validaTelefono(){
    var isValid = false;
    const input = document.forms['validaForm']['telefono'];
    const largo = 50;
    const patron = new RegExp('^[0-9]+$', 'i');

    if(!input.value) {
        isValid = false;
    } else {
        if(input.value.length > largo) {
            isValid = false;
        } else {
            if(!patron.test(input.value)){ 
                isValid = false;
            } else {
                isValid = true;
                var vTelefono=1;
            }
        }
    }
    if(!isValid) {
        // rojo: no es valido
        input.style.borderColor = 'salmon'; 
      } else {
        // verde: si es valido
        input.style.borderColor = 'palegreen';
      }
      return vTelefono;
}
function validaDireccion(){
    var isValid = false;
    const input = document.forms['validaForm']['direccion'];
    const largo = 100;

    if(!input.value) {
        isValid = false;
    } else {
        if(input.value.length > largo) {
            isValid = false;
        }else{
            isValid = true;
            var vDireccion=1;
        } 
    }
    if(!isValid) {
        // rojo: no es valido
        input.style.borderColor = 'salmon'; 
      } else {
        // verde: si es valido
        input.style.borderColor = 'palegreen';
      }
      return vDireccion;
}
function validaCiudad(){
    var isValid = false;
    const input = document.forms['validaForm']['ciudad'];
    const largo = 100;

    if(!input.value) {
        isValid = false;
    } else {
        if(input.value.length > largo) {
            isValid = false;
        }else{
            isValid = true;
            var vCiudad=1;
        }
    }
    if(!isValid) {
        // rojo: no es valido
        input.style.borderColor = 'salmon'; 
      } else {
        // verde: si es valido
        input.style.borderColor = 'palegreen';
      }
      return vCiudad;
}
function verificar() {
    var conta = 0;
    var conta1 = validaNombre();
    var conta2 = validaApellido();
    var conta3 = validaTelefono();
    var conta4 = validaDireccion();
    var conta5 = validaCiudad();

    conta=conta1+conta2+conta3+conta4+conta5;

    if(conta<5){
        alert("Verificar la informacion entregada, uno o mas campos sin llenar.")
    }else{
        muestraInformacion();
    }
    
  }

  function muestraInformacion(){
      alert("Muestra informacion del alumno");
  }