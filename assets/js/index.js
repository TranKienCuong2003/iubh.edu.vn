document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('modal');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToRegister = document.getElementById('switch-to-register');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    registerBtn.addEventListener('click', function() {
        modal.classList.add('show');
        registerForm.classList.add('show');
        loginForm.classList.remove('show');
    });

    loginBtn.addEventListener('click', function() {
        modal.classList.add('show');
        loginForm.classList.add('show');
        registerForm.classList.remove('show');
    });

    switchToLogin.addEventListener('click', function() {
        loginForm.classList.add('show');
        registerForm.classList.remove('show');
    });

    switchToRegister.addEventListener('click', function() {
        registerForm.classList.add('show');
        loginForm.classList.remove('show');
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.remove('show');
        });
    });

    modal.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.classList.remove('show');
        }
    });
});