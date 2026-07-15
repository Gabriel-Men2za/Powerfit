function mostrarOcultarMenu() {
    // Buscamos el menú en la página
    var menu = document.getElementById("menu-navegacion");
    
    // Si está escondido (none), lo mostramos (block). Si se ve, lo escondemos.
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// Esto busca todos los enlaces de tu menú
var enlaces = document.querySelectorAll("#menu-navegacion a");

// A cada enlace le añadimos la orden de cerrar el menú al hacerle clic
enlaces.forEach(function(enlace) {
    enlace.onclick = function() {
        var menu = document.getElementById("menu-navegacion");
        
        // Si la pantalla es de móvil (menor o igual a 768px), esconde el menú
        if (window.innerWidth <= 768) {
            menu.style.display = "none";
        }
    };
});
