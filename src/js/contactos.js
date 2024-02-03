
let contacto = [
    { name: "alejandro", mail: "alejandro@example.com", fax: "0000-0000", favorite: false},
    { name: "jimena", mail: "jimena@example.com", fax: "0000-0000", favorite: false },
    { name: "pablo", mail: "pablo@example.com", fax: "0000-0000", favorite: false },
    { name: "marco", mail: "marco@example.com", fax: "0000-0000", favorite: false },
    { name: "rodrigo", mail: "rodrigo@example.com", fax: "0000-0000", favorite: false },
    { name: "andrea", mail: "andrea@example.com", fax: "0000-0000", favorite: true },
    { name: "mama", mail: "mama@example.com", fax: "0000-0000", favorite: true },
    { name: "papa", mail: "papa@example.com", fax: "0000-0000", favorite: true },
  ];

  /*Logica*/ 

function eliminarContacto() {
    let nombreEliminar = document.getElementById('nameDelete').value;
    let bandera = false;
    contacto.forEach((cFind) => {
        if (cFind.name === nombreEliminar) {
            alert('El contacto sera eliminado');
            contacto = contacto.filter((c) => c.name !== nombreEliminar);
            bandera = true;
        }
    });

    if (bandera === false) {
        alert('El contacto no existe');
    }
    //contacto = contacto.filter((c) => c.name !== nombreEliminar);
    limpiarFormularioDelete();
    cargarDatosTable();
}

function crearContacto() {
    let nombre = document.getElementById('name').value;
    let correo = document.getElementById('email').value;
    let fax = document.getElementById('fax').value;
    let favorite = document.getElementById('favoriteContact').checked;

    let nuevoContacto = { name: nombre, mail: correo, fax: fax, favorite: favorite};
    contacto.push(nuevoContacto);
    limpiarFormulario();
    cargarDatosTable();
}


function cargarDatosTable(){
    let table = document.querySelector('.table-container tbody');
    table.innerHTML = '';
    contacto.forEach((c) => {
        // Crea una nueva fila
        let row = table.insertRow();
        // Añade celdas a la fila con los datos de contacto
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellFax = row.insertCell(2);
        let cellFavorite = row.insertCell(3);

        cellName.textContent = c.name;
        cellEmail.textContent = c.mail;
        cellFax.textContent = c.fax;
        cellFavorite.textContent = c.favorite ? 'Sí' : 'No';
    });

    let tableFavorite = document.querySelector('.table-container.favorite tbody');
    tableFavorite.innerHTML = '';
    contacto.forEach((c) => {
        if (c.favorite === true) {
            // Crea una nueva fila
            let row = tableFavorite.insertRow();
            // Añade celdas a la fila con los datos de contacto
            let cellName = row.insertCell(0);
            let cellEmail = row.insertCell(1);
            let cellFax = row.insertCell(2);
            let cellFavorite = row.insertCell(3);

            cellName.textContent = c.name;
            cellEmail.textContent = c.mail;
            cellFax.textContent = c.fax;
            cellFavorite.textContent = c.favorite ? 'Sí' : 'No';
        }
    });
}

/*limpiar*/

function limpiarFormulario() {
    // Restablece los valores de los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('fax').value = '';
    document.getElementById('favoriteContact').checked = false;
}

function limpiarFormularioDelete() {
    // Restablece los valores de los campos del formulario
    document.getElementById('nameDelete').value = '';
}

/*Start*/

let table = document.querySelector('.table-container tbody');
table.innerHTML = '';
contacto.forEach((c) => {
    // Crea una nueva fila
    let row = table.insertRow();
    // Añade celdas a la fila con los datos de contacto
    let cellName = row.insertCell(0);
    let cellEmail = row.insertCell(1);
    let cellFax = row.insertCell(2);
    let cellFavorite = row.insertCell(3);

    cellName.textContent = c.name;
    cellEmail.textContent = c.mail;
    cellFax.textContent = c.fax;
    cellFavorite.textContent = c.favorite ? 'Sí' : 'No';
});

let tableFavorite = document.querySelector('.table-container.favorite tbody');
tableFavorite.innerHTML = '';
contacto.forEach((c) => {
    if (c.favorite === true) {
        // Crea una nueva fila
        let row = tableFavorite.insertRow();
        // Añade celdas a la fila con los datos de contacto
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellFax = row.insertCell(2);
        let cellFavorite = row.insertCell(3);

        cellName.textContent = c.name;
        cellEmail.textContent = c.mail;
        cellFax.textContent = c.fax;
        cellFavorite.textContent = c.favorite ? 'Sí' : 'No';
    }
});

