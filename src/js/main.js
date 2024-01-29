// main.js
const user = require('./user'); 

// crear y almacenar usuarios
const usuarios = [
    new user("juan", "juan@example.com", "123"),
    new user("maria", "maria@example.com", "456"),
    new user("otto", "otto@example.com", "789"),
    
];


// Imprimir la lista de usuarios
console.log("Lista de usuarios:", usuarios);

const uss = "juan";
const pss = '123';

// Buscar el usuario en la lista
const usuarioEncontrado = usuarios.find(user => user.getUser() === uss);

if (usuarioEncontrado && usuarioEncontrado.validateLogin(uss, pss)) {
    console.log("Inicio de sesión exitoso");
} else {
    console.log("Credenciales incorrectas");
}

