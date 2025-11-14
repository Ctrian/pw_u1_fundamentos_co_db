function guardar() {
    validarCampos();
 
}
 
function validarCampos(){
    limpiarMensajes();
    let nombre = document.getElementById("id_nombre").value;
 
    if(nombre === ""){
        mostrarMensaje('Nombre necesario');
        mostrarAsterisco('id_error_nombre');
        return;
 
    }
 
    let apellido = document.getElementById("id_apellido").value;
 
    if(apellido === ""){
        mostrarMensaje('Apellido necesario');
        mostrarAsterisco('id_error_apellido');
        return;
 
    }
 
    let fecha = document.getElementById("id_fn").value;
 
    if(fecha === ""){
        mostrarMensaje('Fecha necesario');
        mostrarAsterisco('id_error_fn');
        return;
 
    }
 
    let email = document.getElementById("id_email").value;
 
    if(!validarEmail(email)){
        mostrarMensaje('Email necesario');
        mostrarAsterisco('id_error_email');
        validarEmail('id_email');
        return;
 
    }
 
    let password = document.getElementById("id_pass").value;
    if(password === ""){
        mostrarMensaje('Contrasenia necesario');
        mostrarAsterisco('id_error_pass');
        return;
 
    }
}
 
function mostrarMensaje(msj) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msj;
    mensaje.style.display = "block";
 
}
 
function mostrarAsterisco(idElemento){
    const el = document.getElementById(idElemento);
    el.innerText = '*';
    el.style.display = "inline";
 
}

function limpiarMensajes(){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText="";
    mensaje.style.display="none";

    const erroresAsteriscos = document.querySelectorAll('.error_asterisco');
    erroresAsteriscos.forEach(e => {
        e.innerText = '';
        e.style.display = "none";});

}
 
function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}