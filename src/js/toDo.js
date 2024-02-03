
let taskList = [
    { name: "task 1", desc: "dont have description 1", status: false},
    { name: "task 2", desc: "dont have description 2", status: false },
    { name: "task 3", desc: "dont have description 3", status: false },
    { name: "task 4", desc: "dont have description 4", status: false },
    { name: "task 5", desc: "dont have description 5", status: false },
    { name: "task 6", desc: "dont have description 6", status: true },
    { name: "task 7", desc: "dont have description 7", status: true },
    { name: "task 8", desc: "dont have description 8", status: true },
  ];

  /*Logica*/ 

function eliminarTask() {
    let nombreEliminar = document.getElementById('nameDelete').value;
    let bandera = false;
    taskList.forEach((cFind) => {
        if (cFind.name === nombreEliminar) {
            alert('El task sera eliminado');
            taskList = taskList.filter((c) => c.name !== nombreEliminar);
            bandera = true;
        }
    });

    if (bandera === false) {
        alert('El task no existe');
    }
    console.log(taskList);
    limpiarFormularioDelete();
    cargarDatosTable();
}

function crearTask() {
    let nombre = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    if (nombre === '' || desc === '') {
        alert('Todos los campos son obligatorios');
        return;
    }
    let newTask= { name: nombre, desc: desc, status: false};
    taskList.push(newTask);
    limpiarFormulario();
    cargarDatosTable();
}


function cargarDatosTable(){
    let table = document.querySelector('.table-container tbody');
    table.innerHTML = '';
    taskList.forEach((c) => {
        // Crea una nueva fila
        let row = table.insertRow();
        // Añade celdas a la fila con los datos de taskList
        let cellName = row.insertCell(0);
        let cellDesc = row.insertCell(1);
        let cellStatus = row.insertCell(2);

        cellName.textContent = c.name;
        cellDesc.textContent = c.desc;
        cellStatus.textContent = c.status ? 'Complete' : 'Pending';
    });

    let tablePending = document.querySelector('.table-container.favorite tbody');
    tablePending.innerHTML = '';
    taskList.forEach((c) => {
        if (c.status === true) {
            // Crea una nueva fila
            let row = tablePending.insertRow();
            // Añade celdas a la fila con los datos de taskList
            let cellName = row.insertCell(0);
            let cellDesc = row.insertCell(1);
            let cellStatus = row.insertCell(2);

            cellName.textContent = c.name;
            cellDesc.textContent = c.desc;
            
            cellStatus.textContent = c.status ? 'Complete' : 'Pending';
        }
    });
}

/*limpiar*/

function limpiarFormulario() {
    // Restablece los valores de los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('desc').value = '';
}

function limpiarFormularioDelete() {
    // Restablece los valores de los campos del formulario
    document.getElementById('nameDelete').value = '';
}

/*Start*/

let table = document.querySelector('.table-container tbody');
table.innerHTML = '';
taskList.forEach((c) => {
    // Crea una nueva fila
    let row = table.insertRow();
    // Añade celdas a la fila con los datos de taskList
    let cellName = row.insertCell(0);
    let cellDesc = row.insertCell(1);
    let cellStatus = row.insertCell(2);

    cellName.textContent = c.name;
    cellDesc.textContent = c.desc;
    cellStatus.textContent = c.status ? 'Complete' : 'Pending';
});

let tablePending = document.querySelector('.table-container.favorite tbody');
tablePending.innerHTML = '';
taskList.forEach((c) => {
    if (c.status === true) {
        // Crea una nueva fila
        let row = tablePending.insertRow();
        // Añade celdas a la fila con los datos de taskList
        let cellName = row.insertCell(0);
        let cellDesc = row.insertCell(1);
        let cellStatus = row.insertCell(2);

        cellName.textContent = c.name;
        cellDesc.textContent = c.desc;
        
        cellStatus.textContent = c.status ? 'Complete' : 'Pending';
    }
});

