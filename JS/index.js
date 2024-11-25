document.addEventListener('DOMContentLoaded', function() {
    // Funcionamiento de los modales
    $("#loginModal").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Cerrar": function() {
                $(this).dialog("close");
            }
        }
    });

    $("#registerModal").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Cerrar": function() {
                $(this).dialog("close");
            }
        }
    });

    $("#login").click(function(event) {
        event.preventDefault();
        $("#loginModal").dialog("open");
    });

    $("#register").click(function(event) {
        event.preventDefault();
        $("#registerModal").dialog("open");
    });
    
    // Funcionamiento del formulario de registro
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        
        const formulario = document.getElementById('registerForm');

        var nombre = $('#userInputRegister').val();
        var email = $('#mailInputRegister').val();
        var password = $('#passwordInputRegister').val();
        var confirmPassword = $('#confirmInputRegister').val();

        if (nombre === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Ingresa tu nombre de usuario',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (email === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Ingresa tu correo electronico',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (password === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Ingresa tu contraseña',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (confirmPassword === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Confirma tu contraseña',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (password != confirmPassword) {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Las contraseñas no coinciden',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            $.ajax({
                url: './PHP/Register.php',
                type: 'POST',
                data: {
                    nombre: nombre,
                    email: email,
                    password: password
                },
                success: function(response) {
                    if (response === 'Registro creado exitosamente.') {
                        formulario.reset();
                        
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registro completo",
                            background: '#8e2704',
                            color: '#fff',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                },
                error: function(xhr, status, error) {
                    $('#resultado').html('Error: ' + error);
                }
            });
        }
    });

    $('#loginForm').on('submit', function(event) {
        event.preventDefault();

        const formulario = document.getElementById('loginForm');
    
        var user = $('#userInputLogin').val();
        var password = $('#passwordInputLogin').val();

        if (user === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Ingresa tu nombre de usuario',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (password === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Datos incompletos",
                text: 'Ingresa tu contraseña',
                background: '#8e2704',
                color: '#fff',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            $.ajax({
                url: './PHP/Login.php',
                type: 'POST',
                data: {
                    user: user,
                    password: password
                },
                success: function(response) {
                    console.log(response);
                    window.location.href = './main.html'
                },
                error: function(xhr, status, error) {
                    $('#resultado').html('Error: ' + error);
                }
            });
        }
    
    });
});