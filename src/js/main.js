// main.js
const User = require('./user'); 

// crear y almacenar usuarios
const usuarios = [
    new User("juan123", "correo1@example.com", "contraseña123"),
    new User("maria456", "correo2@example.com", "otraContraseña456"),
    
];


// Imprimir la lista de usuarios
console.log("Lista de usuarios:", usuarios);
/*
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const ingresarBtn = form.querySelector('input[value="Ingresar"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        handleFormSubmit();
    });

    ingresarBtn.addEventListener('click', function (event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        const username = form.elements['txtUser'].value;
        const password = form.elements['txtPass'].value;

        // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    }
});



/*
// Simula un proceso de inicio de sesión
const usuarioInput = "juan123";
const contraseñaInput = "contraseña123";

// Buscar el usuario en la lista
const usuarioEncontrado = usuarios.find(user => user.getUser() === usuarioInput);

if (usuarioEncontrado && usuarioEncontrado.validateLogin(usuarioInput, contraseñaInput)) {
    console.log("Inicio de sesión exitoso");
} else {
    console.log("Credenciales incorrectas");
}

*/