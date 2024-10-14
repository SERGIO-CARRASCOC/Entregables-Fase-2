// script.js
document.getElementById('driverForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const driverName = document.getElementById('driverName').value;
    const driverLicense = document.getElementById('driverLicense').value;
    const driverPhone = document.getElementById('driverPhone').value;

    // Aquí puedes agregar la lógica para manejar la gestión de conductores
    const driverList = document.getElementById('driverList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${driverName}, Licencia: ${driverLicense}, Teléfono: ${driverPhone}`;
    driverList.appendChild(listItem);

    // Limpiar el formulario
    document.getElementById('driverForm').reset();
    alert('Conductor guardado exitosamente');
});
