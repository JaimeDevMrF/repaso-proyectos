addEventListener("DOMContentLoaded", () => {
    const entrada = document.getElementById("texto");
    const boton = document.getElementById("boton");
    const contenedor = document.getElementById("container")
    const check = document.getElementById("checkk")
    
    function obtenerTexto() {
        const valor = entrada.value;
        crearTarea(valor)
    }
    boton.addEventListener("click", obtenerTexto);

    function crearTarea(mensaje) {
        const div = document.createElement("div");
        div.id = "tareas";

        const p = document.createElement("p");
        p.textContent = mensaje
        div.appendChild(p)

        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = "checkk"
        div.appendChild(input);

        contenedor.appendChild(div)
    };

    check.addEventListener("change", () => {
        const div = document.getElementById("tareas");
        div.remove();
        console.log("hola");
    })

});