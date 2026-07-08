// =============================
// 1. FUNCIONES DE MOVIMIENTO (SCROLL)
// =============================

/**
 * Esta función busca cualquier elemento con la clase .section 
 * y desliza la página suavemente hasta ese punto.
 */
function scrollToSection() {
    const section = document.querySelector(".section");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

// =============================
// 2. ANIMACIÓN DE CARDS AL SCROLL
// =============================

const animatedCards = document.querySelectorAll(".index-animated");

/**
 * Detecta si las tarjetas con la clase .index-animated están en 
 * el área visible de la pantalla para activar su animación.
 */
function mostrarCards() {
    animatedCards.forEach((card) => {
        const posicion = card.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 80) { // Se activa cuando la tarjeta sube a la vista.
            card.classList.add("visible");
        }
    });
}

// Ejecutar al hacer scroll y al cargar la página para detectar elementos que ya están visibles.
window.addEventListener("scroll", mostrarCards);
window.addEventListener("load", mostrarCards);


// =============================
// 3. CONEXIÓN CON EL HTML (EVENTOS)
// =============================

/**
 * Este bloque es el que "conecta" tu botón del HTML con la función de scroll.
 * El ID "btn-ver-mas" en el HTML ahora tiene una acción asignada.
 */
const btnVerMas = document.getElementById("btn-ver-mas");

if (btnVerMas) {
    btnVerMas.addEventListener("click", function () {
        scrollToSection();
    });
}
