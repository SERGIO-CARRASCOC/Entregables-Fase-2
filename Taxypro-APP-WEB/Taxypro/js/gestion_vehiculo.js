// script.js
let pagos = [];
let editIndex = -1;

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (editIndex === -1) {
        agregarPago();
    } else {
        actualizarPago();
    }
});

document.getElementById('buscar').addEventListener('input', function() {
    buscarPago(this.value);
});

function agregarPago() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const monto = document.getElementById('monto').value;

    pagos.push({ nombre, email, monto });
    mostrarPagos();
    document.getElementById('payment-form').reset();
}

function mostrarPagos() {
    const tableBody = document.getElementById('payments-table').getElementsByTagName('tbody');
    tableBody.innerHTML = '';

    pagos.forEach((pago, index) => {
        const row = tableBody.insertRow();

        const cellNombre = row.insertCell(0);
        const cellEmail = row.insertCell(1);
        const cellMonto = row.insertCell(2);
        const cellAcciones = row.insertCell(3);

        cellNombre.textContent = pago.nombre;
        cellEmail.textContent = pago.email;
        cellMonto.textContent = pago.monto;
        cellAcciones.innerHTML = `<button onclick="editarPago(${index})">Editar</button> <button onclick="eliminarPago(${index})">Eliminar</button>`;
    });
}

function editarPago(index) {
    const pago = pagos[index];
    document.getElementById('nombre').value = pago.nombre;
    document.getElementById('email').value = pago.email;
    document.getElementById('monto').value = pago.monto;
    editIndex = index;
}

function actualizarPago() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const monto = document.getElementById('monto').value;

    pagos[editIndex] = { nombre, email, monto };
    mostrarPagos();
    document.getElementById('payment-form').reset();
    editIndex = -1;
}

function eliminarPago(index) {
    pagos.splice(index, 1);
    mostrarPagos();
}

function buscarPago(query) {
    const tableBody = document.getElementById('payments-table').getElementsByTagName('tbody');
    tableBody.innerHTML = '';

    pagos.filter(pago => pago.nombre.includes(query) || pago.email.includes(query)).forEach((pago, index) => {
        const row = tableBody.insertRow();

        const cellNombre = row.insertCell(0);
        const cellEmail = row.insertCell(1);
        const cellMonto = row.insertCell(2);
        const cellAcciones = row.insertCell(3);

        cellNombre.textContent = pago.nombre;
        cellEmail.textContent = pago.email;
        cellMonto.textContent = pago.monto;
        cellAcciones.innerHTML = `<button onclick="editarPago(${index})">Editar</button> <button onclick="eliminarPago(${index})">Eliminar</button>`;
    });
}

mostrarPagos();
