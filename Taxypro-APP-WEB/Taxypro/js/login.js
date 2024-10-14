// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para manejar el login
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    alert('Login exitoso');
});
