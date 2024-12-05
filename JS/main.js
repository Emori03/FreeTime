document.addEventListener('DOMContentLoaded', function() {
    // Funcionamiento del menu desplegable
    const toggleAsideButton = document.getElementById('toggleAside');
    const aside = document.getElementById('menuAside');

    toggleAsideButton.addEventListener('click', function() {
        if (aside.style.display === 'none' || aside.style.display === '') {
            aside.style.display = 'block';
        } else {
            aside.style.display = 'none';
        }
    });

    const header = document.getElementById('header');

    if (getParameter('Pagina') === 'main') {
        header.style.height = '30vh';
        header.style.justifyContent = 'center';
        loadModule(getParameter('Pagina'), '#mainContent');
    } else {
        header.style.height = '10vh';
        header.style.justifyContent = 'left';
        loadModule(getParameter('Pagina'), '#mainContent');
    }
});

function getParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function addParameter(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
    window.location.reload();
}

function loadModule(url, elementId) {
    url = './Modulos/' + url + '.html';
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'html',
        success: function(data) {
            $(elementId).html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Hubo un problema con la petición AJAX:', textStatus, errorThrown);
        }
    });
}
