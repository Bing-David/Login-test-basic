// Simulación de base de datos de usuarios
const usuarios = [
    { username: "admin", password: "sena2024" },
    { username: "usuario", password: "usuario2024" },
];

// Simular API: función para manejar la autenticación
function autenticarUsuario(datos) {
    const { username, password } = datos;

    // Buscar coincidencia en la "base de datos"
    const usuarioValido = usuarios.find(
        (user) => user.username === username && user.password === password
    );

    // Simular una respuesta de API
    if (usuarioValido) {
        return { success: true, message: "Autenticacion exitosa" };
    } else {
        return { success: false, message: "Usuario o contraseña incorrectos!" };
    }
}



//CONFIGURACION DE NOTIFICACIONES...
function Notificacion(mensaje) {
//se crea un elemento "div" en el dom cada que se llama esta funcion y se estiliza
// con los siguientes parametros, ademas toma el mensaje como parametro para mostrarlo.

    let notifiacion = document.getElementById('notificacion');
    if (!notifiacion) {
        //diseño
        notifiacion = document.createElement('div');
        notifiacion.id = 'notificacion';
        notifiacion.style.position = 'fixed';
        notifiacion.style.bottom = '20px';
        notifiacion.style.right = '20px';
        notifiacion.style.zIndex = '9999';
        notifiacion.style.display = 'flex';
        notifiacion.style.flexDirection = 'column';
        notifiacion.style.gap = '10px';
        document.body.appendChild(notifiacion);
    }

    const txtNotifiacion = document.createElement('div'); 
    //diseño
    txtNotifiacion.textContent = mensaje;
    txtNotifiacion.style.padding = '15px';
    txtNotifiacion.style.backgroundColor = '#39A900';
    txtNotifiacion.style.color = '#fff';
    txtNotifiacion.style.borderRadius = '13px'
    txtNotifiacion.style.boxShadow = "4px 4px 0px #1a1a1a";
    txtNotifiacion.style.fontSize = "14px";
    txtNotifiacion.style.opacity = '0';
    txtNotifiacion.style.transform = 'translateY(20px)';
    txtNotifiacion.style.transition = "all 0.3s ease"

    notifiacion.appendChild(txtNotifiacion);

    requestAnimationFrame(() => {
        txtNotifiacion.style.opacity = '1';
        txtNotifiacion.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        txtNotifiacion.style.opacity = '0';
        txtNotifiacion.style.transform = 'translateY(20px)';
        txtNotifiacion.addEventListener('transitionend', () => {
            txtNotifiacion.remove();
        });
    }, 3000); //3s
}
