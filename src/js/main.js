function start() {
  const usuarios = [
    { user: "juan", mail: "juan@example.com", pass: "123" },
    { user: "maria", mail: "maria@example.com", pass: "456" },
    { user: "otto", mail: "otto@example.com", pass: "789" },
  ];
  const uss = document.getElementById("txtUser").value;
  const pss = document.getElementById("txtPass").value;
  log(usuarios, uss, pss);
}

function log(usuarios, uss, pss) {
  const usuarioEncontrado = usuarios.find((user) => user.user === uss);
  
  if (usuarioEncontrado && usuarioEncontrado.pass === pss) {
    console.log("Inicio de sesión exitoso");
    window.location.href = "./src/html/principal.html";
  } else {
    alert("Sus credenciales son incorrectas o no existen, por favor intente de nuevo.");
    console.log("Credenciales incorrectas");
  }
}
