const user = require('./user');
const usuarios = [
    new user("juan", "juan@example.com", "123"),
    new user("maria", "maria@example.com", "456"),
    new user("otto", "otto@example.com", "789"),
];

console.log("Lista de usuarios:", usuarios);

function log() {
    const uss = document.getElementById('txtUser').value;
    const pss = document.getElementById('txtPass').value;
    console.log("Lista de usuarios:", usuarios);
    const usuarioEncontrado = usuarios.find(user => user.getUser() === uss);

    if (usuarioEncontrado && usuarioEncontrado.validateLogin(uss, pss)) {
        console.log("Inicio de sesión exitoso");
        window.location.href = './src/html/principal.html';
    } else {
        console.log("Credenciales incorrectas");
    }
}
