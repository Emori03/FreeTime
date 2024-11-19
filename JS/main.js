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

});