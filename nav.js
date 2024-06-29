window.onload = function() {
    var navItems = document.querySelectorAll('nav ul li a'); // Select anchor tags inside list items
    var maxWidth = 0;

    // elemento mas ancho
    navItems.forEach(function(item) {
        if (item.offsetWidth > maxWidth) {
            maxWidth = item.offsetWidth;
        }
    });

    // todos los elementos al mismo ancho
    navItems.forEach(function(item) {
        item.style.width = maxWidth + 'px';
        item.style.display = 'inline-block'; // Ensure the anchor tags behave like block elements
    });
};
