function guardar() {
    validarCampos();
 
}
 
function validarCampos(){
    limpiarMensajes();

    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let fecha = document.getElementById("id_fn").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_pass").value;

    // Mostrar asteriscos en todos los campos con error
    if(nombre === "") mostrarAsterisco('id_error_nombre');
    if(apellido === "") mostrarAsterisco('id_error_apellido');
    if(fecha === "") mostrarAsterisco('id_error_fn');
    if(email === "" || !validarEmail(email)) mostrarAsterisco('id_error_email');
    if(password === "") mostrarAsterisco('id_error_pass');

    // Validar todo con un if general
    if(
        nombre !== "" &&
        apellido !== "" &&
        fecha !== "" &&
        email !== "" &&
        validarEmail(email) &&
        password !== ""
    ){
        mostrarMensaje('Formulario válido. Puedes continuar.');
        // Aquí puedes continuar con el guardado
    } else {
        mostrarMensaje('Por favor, complete los campos obligatorios.');
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