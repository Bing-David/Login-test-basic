"use stric"
let autor = document.querySelector(".autor").addEventListener("click",()=>{window.open("https://portfolio-bing-davids-projects.vercel.app/")})


document.addEventListener("DOMContentLoaded", () => {
    const usuarioInput = document.querySelector(".usuario");
    const passwordInput = document.querySelector(".password");
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

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


