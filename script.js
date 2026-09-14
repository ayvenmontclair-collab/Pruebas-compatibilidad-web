const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    resultado.textContent = "Formulario enviado correctamente. ¡Hola, " + nombre + "!";

});