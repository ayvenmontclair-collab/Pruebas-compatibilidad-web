document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("botonMensaje");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function () {
        mensaje.textContent = "¡El botón funciona correctamente!";
    });

    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        if (nombre === "") {
            resultado.textContent = "Por favor, escribe tu nombre.";
        } else {
            resultado.textContent =
                "Formulario enviado correctamente. ¡Hola, " + nombre + "!";
        }

    });

});
