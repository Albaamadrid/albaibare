
document.addEventListener('DOMContentLoaded', function() {
    var acordeonTitulos = document.querySelectorAll('.contenido-acordeon-titulo');
    
    acordeonTitulos.forEach(function(titulo) {
        titulo.addEventListener('click', function() {
            var contenidoAcordeon = this.parentElement;

            if (contenidoAcordeon.classList.contains('abierto')) {
                contenidoAcordeon.classList.remove('abierto');
            } else {
                // Cierra todos los elementos abiertos
                document.querySelectorAll('.contenido-acordeon.abierto').forEach(function(abierto) {
                    abierto.classList.remove('abierto');
                });
                // Abrir el elemento clicado
                contenidoAcordeon.classList.add('abierto');
            }
        });
    });
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Colapsado y expandido - Seccion Inicio

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos principales del DOM
    const container = document.querySelector('.container'); // El contenedor principal
    const frontendSection = document.getElementById('frontend'); // Sección de "frontend"
    const uxuiSection = document.getElementById('uxui'); // Sección de "uxui"

    // Añade un evento para cuando el ratón PASE por encima de la sección "frontend"
    frontendSection.addEventListener('mouseover', function() {
        expandSection('frontend'); // Llama a la función para EXPANDIR la sección "frontend"
    });

    // Añade un evento para cuando el ratón SALGA de la sección "frontend"
    frontendSection.addEventListener('mouseout', function() {
        resetSections(); // Llama a la función para RESTABLECER las secciones a su estado original
    });

    // Añade un evento para cuando el ratón PASE por encima de la sección "uxui"
    uxuiSection.addEventListener('mouseover', function() {
        expandSection('uxui'); // Llama a la función para EXPANDIR la sección "uxui"
    });

    // Añade un evento para cuando el ratón SALGA de la sección "uxui"
    uxuiSection.addEventListener('mouseout', function() {
        resetSections(); // Llama a la función para RESTABLECER las secciones a su estado original
    });

    // Función para EXPANDIR
    function expandSection(sectionId) {
        const section = document.getElementById(sectionId); // Obtiene la sección que debe expandirse
        const otherSection = sectionId === 'frontend' ? uxuiSection : frontendSection; // Identifica la otra sección

        section.classList.add('expanded'); // Añade la clase 'expanded' para expandir la sección
        otherSection.classList.add('collapsed'); // Añade la clase 'collapsed' para colapsar la otra sección

        // Controla la transformación del contenedor para centrar la sección expandida
        if (sectionId === 'uxui') {
            container.style.transform = 'translateX(0%)'; 
        }  
        else if (sectionId === 'frontend') {
            container.style.transform = 'translateX(0%)';
        }
        else {
            container.style.transform = 'translateX(-50%)'; 
        }
    }

    // Función para RESTABLECER 
    function resetSections() {
        frontendSection.classList.remove('expanded', 'collapsed'); // Elimina las clases 'expanded' y 'collapsed' de "frontend"
        uxuiSection.classList.remove('expanded', 'collapsed'); // Elimina las clases 'expanded' y 'collapsed' de "uxui"
        container.style.transform = 'translateX(0)'; // Restablece la transformación del contenedor a su posición original
    }
});




// Para que la animación ocurra solo una vez
AOS.init({
    once: true,  
  });


/*
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}




function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
        menu.classList.add('show');
    }
}*/


// Función para alternar el menú
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
        menu.classList.add('show');
    }
}

// Función para cerrar el menú
function closeMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.remove('show');
    menu.classList.add('hide');
}

// Cerrar el menú al hacer clic fuera del menú
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        closeMenu();
    }
});

// Cerrar el menú al hacer clic en cualquier enlace del menú
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        closeMenu();

        // Esperar un corto tiempo para que la animación de cierre se ejecute antes de ir a la sección
        setTimeout(() => {
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }, 300); // El tiempo (300 ms) debe coincidir con la duración de la animación CSS
    });
});



