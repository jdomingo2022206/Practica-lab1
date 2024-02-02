
let ussEncontrado;

function start() {
  const usuarios = [
    { user: "juan", mail: "juan@example.com", pass: "123" },
    { user: "maria", mail: "maria@example.com", pass: "456" },
    { user: "otto", mail: "otto@example.com", pass: "789" },
  ];
  let uss = document.getElementById("txtUser").value;
  let pss = document.getElementById("txtPass").value;
  log(usuarios, uss, pss);
}

function log(usuarios, uss, pss) {
  const usuarioEncontrado = usuarios.find((user) => user.user === uss);
  ussEncontrado = usuarioEncontrado;
  if (usuarioEncontrado && usuarioEncontrado.pass === pss) {
    console.log("Inicio de sesión exitoso");
    window.location.href = "./src/html/principal.html";
  } else {
    alert("Sus credenciales son incorrectas o no existen, por favor intente de nuevo.");
    console.log("Credenciales incorrectas");
  }
}

function register() {
  //window.location.href = "./src/html/register.html";
}

function profile(){
  //document.getElementById("ussName").innerText = ussEncontrado.user;
  document.getElementById("ussName").innerText = "juan";
  document.getElementById("ussId").innerText = "@juan";
  document.getElementById("ussEmail").innerText = "juan@example.com";
}
