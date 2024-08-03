document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const menuScreen = document.getElementById('menu-screen');
    const logoutButton = document.getElementById('logout-button');

    // Función para mostrar el formulario de inicio de sesión
    function showLoginScreen() {
        loginScreen.classList.add('active');
        menuScreen.classList.remove('active');
    }

    // Función para mostrar el menú de aplicaciones
    function showMenuScreen() {
        loginScreen.classList.remove('active');
        menuScreen.classList.add('active');
    }

    // Verifica si el usuario ya está autenticado
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        showMenuScreen();
    } else {
        showLoginScreen();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Guarda las credenciales en el almacenamiento local
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            showMenuScreen();
        }
    });

    // Maneja el clic en el botón de cerrar sesión
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        showLoginScreen();
    });

    document.querySelectorAll('.app').forEach(app => {
        app.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank'); // Redirige al perfil en una nueva pestaña
        });
    });
});