addEventListener("DOMContentLoaded", () => {
    
    
    
    function obtenerDia() {
        const date = new Date();
        const dia = date.getDay().toString().padStart(2, "0");
        const mes = date.getMonth().toString().padStart(2, "0");
        const ano = date.getFullYear().toString().padStart(2, "0");
        const fecha = `${dia} - ${mes} - ${ano}`;
        const fechaTexto = document.getElementById("zona");
        fechaTexto.textContent = fecha;
    }
    
    
    function obtenerHora() {
        const date = new Date();
        const hour = date.getHours().toString().padStart(2, "0");;
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const hora = `${hour}:${minutes}:${seconds}`;
        const horaTexto = document.getElementById("hora");
        horaTexto.textContent = hora;
        
    }
    setInterval(obtenerHora, 1000);
    setInterval(obtenerDia, 1000);
    obtenerHora();
    obtenerDia();

});

