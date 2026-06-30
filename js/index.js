// =============================
// SCROLL SUAVE BOTÓN HERO
// =============================

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
// ANIMACIÓN DE CARDS AL SCROLL
// =============================

const animatedCards = document.querySelectorAll(".index-animated");

function mostrarCards() {
    animatedCards.forEach((card) => {
        const posicion = card.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 80) {
            card.classList.add("visible");
        }
    });
}

// Ejecutar al hacer scroll
window.addEventListener("scroll", mostrarCards);

// Ejecutar al cargar por si algunas ya son visibles
window.addEventListener("load", mostrarCards);