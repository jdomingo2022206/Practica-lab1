
class User {
    constructor(user, mail, pass) {
        this.user = user;
        this.mail = mail;
        this.pass = pass;
    }

    // Getters
    getUser() {
        return this.user;
    }

    getMail() {
        return this.mail;
    }

    getPass() {
        return this.pass;
    }

    // Setters
    setUser(user) {
        this.user = user;
    }

    setMail(mail) {
        this.mail = mail;
    }

    setPass(pass) {
        this.pass = pass;
    }

    validateLogin(inputUser, inputPass) {
        return inputUser === this.user && inputPass === this.pass;
    }
}





console.log("Iniciando aplicación");
start();
function start() {
  const user = User;
  var usuarios = [
    new user("juan", "juan@example.com", "123"),
    new user("maria", "maria@example.com", "456"),
    new user("otto", "otto@example.com", "789"),
  ];
  console.log("Lista de usuarios:", usuarios);
  const uss = document.getElementById("txtUser").value;
  const pss = document.getElementById("txtPass").value;
  log(usuarios, uss, pss);
}

function log(usuarios, uss, pss) {
  console.log("Iniciando sesión");
  console.log("Iniciando sesión" + uss + " " + pss);
  console.log("Lista de usuarios:", usuarios);
  const usuarioEncontrado = usuarios.find((user) => user.getUser() === uss);

  if (usuarioEncontrado && usuarioEncontrado.validateLogin(uss, pss)) {
    console.log("Inicio de sesión exitoso");
    window.location.href = "./src/html/principal.html";
  } else {
    alert("Sus credenciales son incorrectas o no exiten, por favor intente de nuevo.");
    console.log("Credenciales incorrectas");
  }
}
