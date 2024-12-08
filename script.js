"use stric" //Modo scricto como buena practica..
let autor = document.querySelector(".autor").addEventListener("click",()=>{window.open("https://portfolio-bing-davids-projects.vercel.app/")}) //redireccion del footer a mi web.


document.addEventListener("DOMContentLoaded", () => {
    //Selecionar los elementos del DOM necesarui para el formulario
    const usuarioInput = document.querySelector(".usuario");
    const passwordInput = document.querySelector(".password");
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        //Guarda la info en variables ademas quita los espacios
        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value.trim();

        // solicitud a la "API"
        const resultado = autenticarUsuario({ username: usuario, password });

        if (resultado.success) {
            window.location.href = "./msg.html"; // Redirigir
        } else {
            Notificacion(resultado.message); 
        }
    });
});


