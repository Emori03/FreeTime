document.addEventListener('DOMContentLoaded', function() {
    const toggleAsideButton = document.getElementById('toggleAside');
    const aside = document.getElementById('menuAside');

    toggleAsideButton.addEventListener('click', function() {
        if (aside.style.display === 'none' || aside.style.display === '') {
            aside.style.display = 'block';
        } else {
            aside.style.display = 'none';
        }
    });

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
    
});

