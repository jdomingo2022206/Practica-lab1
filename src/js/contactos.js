
let contacto = [
    { name: "alejandro", mail: "alejandro@example.com", fax: "0000-0000" },
    { name: "jimena", mail: "jimena@example.com", fax: "0000-0000" },
    { name: "pablo", mail: "pablo@example.com", fax: "0000-0000" },
  ];

function crearContacto(nombre, correo, fax) {
    let nuevoContacto = { name: nombre, mail: correo, fax: fax };
    contacto.push(nuevoContacto);
}

function eliminarContacto(nombre) {
    contacto = contacto.filter((c) => c.name !== nombre);
}

function mostrarContactos() {
    contacto.forEach((c) => {
        console.log(`Nombre: ${c.name}, Correo: ${c.mail}, Fax: ${c.fax}`);
    });
}