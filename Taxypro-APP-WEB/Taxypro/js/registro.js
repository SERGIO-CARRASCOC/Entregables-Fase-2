// script.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Aquí puedes agregar la lógica para manejar el registro
    console.log('Usuario:', username);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);
    alert('Registro exitoso');
});
