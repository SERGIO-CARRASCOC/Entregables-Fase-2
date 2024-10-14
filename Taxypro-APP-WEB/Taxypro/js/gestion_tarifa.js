document.getElementById('tarifa-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipoTarifa = document.getElementById('tipo-tarifa').value;
    const monto = document.getElementById('monto').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${tipoTarifa}</td>
        <td>$${monto}</td>
        <td><button onclick="eliminarTarifa(this)">Eliminar</button></td>
    `;
    document.getElementById('tarifas-list').appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('tarifa-form').reset();
});

function eliminarTarifa(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}