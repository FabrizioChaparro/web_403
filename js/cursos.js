const cursos = [
    {
        nombre: "Programador",
        categoria: "informatica",
        descripcion: "Aprendé desarrollo, lógica y programación moderna.",
        duracion: "1 año",
        requisitos: "Secundario completo",
        img: "../assets/images/programador.jpeg",
    },
    {
        nombre: "Diseño y Programación Web",
        categoria: "informatica",
        descripcion:
            "Creación de páginas web con HTML, CSS, JavaScript, PHP y diseño responsive.",
        duracion: "1 año",
        requisitos: "Secundario",
        img: "../assets/images/web.jpeg",
    },
    {
        nombre: "Electricista Domiciliario",
        categoria: "electricidad",
        descripcion: "Instalaciones eléctricas y mantenimiento.",
        duracion: "1 año",
        requisitos: "Secundario",
        img: "../assets/images/electricista.jpeg",
    },
    {
        nombre: "Electricista Industrial",
        categoria: "electricidad",
        descripcion:
            "Gestionar el servicio de instalación, reparación y/o mantenimiento eléctrico.",
        duracion: "1 año",
        requisitos: "Secundario",
        img: "../assets/images/eleind.jpeg",
    },
    {
        nombre: "Impresión 3D",
        categoria: "informatica",
        descripcion:
            "Diseño de objetos tridimensionales y trabajos de bajada a modelos imprimibles.",
        duracion: "4 meses",
        requisitos: "",
        img: "../assets/images/3d.jpeg",
    },
    {
        nombre: "Administrativo Contable",
        categoria: "administracion",
        descripcion:
            "Práctica necesaria en temáticas contables y financieras.",
        duracion: "Anual",
        requisitos: "",
        img: "../assets/images/administracionpimes.jpeg",
    },
    {
        nombre: "Auxiliar contable",
        categoria: "administracion",
        descripcion:
            "Conocimientos sobre cómo las empresas optimizan capacidades y recursos.",
        duracion: "Anual",
        requisitos: "",
        img: "../assets/images/auxcont.jpeg",
    },
    {
        nombre: "Diseño proyectual asistido por computadora",
        categoria: "informatica",
        descripcion:
            "Dibujo digital de planos y recreación de imágenes en 2D.",
        duracion: "Cuatrimestre",
        requisitos: "",
        img: "../assets/images/autocad.jpeg",
    },
    {
        nombre: "Técnicas en Diseño Gráfico",
        categoria: "grafico",
        descripcion:
            "Composición visual, estética, creatividad y herramientas gráficas.",
        duracion: "Cuatrimestral",
        requisitos: "",
        img: "../assets/images/dg.jpeg",
    },
    {
        nombre: "Energías renovables",
        categoria: "electricidad",
        descripcion:
            "Estudio de energías derivadas de fuentes naturales renovables.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/energiaren.jpeg",
    },
    {
        nombre: "Gasista",
        categoria: "construccion",
        descripcion:
            "Instalar, reparar y controlar aparatos a gas y conductos.",
        duracion: "Anual",
        requisitos: "Secundario",
        img: "../assets/images/gas.jpeg",
    },
    {
        nombre: "Impuestos",
        categoria: "administracion",
        descripcion:
            "Herramientas para comprender el comportamiento tributario.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/impuestos.jpeg",
    },
    {
        nombre: "Inglés",
        categoria: "comunicacion",
        descripcion:
            "Comprensión oral y escrita orientada al ámbito laboral.",
        duracion: "Anual",
        requisitos: "",
        img: "../assets/images/ingles.jpeg",
    },
    {
        nombre: "Mantenimiento de edificios",
        categoria: "construccion",
        descripcion:
            "Capacitación en mantenimiento general edilicio.",
        duracion: "Anual",
        requisitos: "",
        img: "../assets/images/mantenimiento.jpeg",
    },
    {
        nombre: "Operador de Informática",
        categoria: "informatica",
        descripcion:
            "Gestión de agendas, citas, reuniones y herramientas digitales.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/opinf.jpeg",
    },
    {
        nombre: "Maquillaje profesional",
        categoria: "estetica",
        descripcion:
            "Trabajo en novias, pasarela, publicidad y teoría del color.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/maquillaje.jpeg",
    },
    {
        nombre: "Diagnóstico, mantenimiento y reparación de PC",
        categoria: "electronica",
        descripcion:
            "Instalar, configurar y actualizar ordenadores y periféricos.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/reppc.jpeg",
    },
    {
        nombre: "RR HH",
        categoria: "administracion",
        descripcion:
            "Retención, búsqueda, capacitación y formación de empleados.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/rrhh.jpeg",
    },
    {
        nombre: "Cámaras de seguridad",
        categoria: "electronica",
        descripcion:
            "Instalación y comprensión de sistemas de alarmas.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/seguridad.jpeg",
    },
    {
        nombre: "Serigrafía",
        categoria: "grafico",
        descripcion:
            "Técnica gráfica para imprimir sobre distintos materiales.",
        duracion: "Cuatrimestral",
        requisitos: "",
        img: "../assets/images/serigrafia.jpeg",
    },
    {
        nombre: "Soldador",
        categoria: "metalmecanica",
        descripcion:
            "Formación teórica y práctica en soldadura profesional.",
        duracion: "",
        requisitos: "",
        img: "../assets/images/soldador.jpeg",
    },
    {
        nombre: "Testing de Aplicaciones",
        categoria: "informatica",
        descripcion:
            "Actividades productivas dentro del desarrollo de software.",
        duracion: "2 meses",
        requisitos: "",
        img: "../assets/images/testing.jpeg",
    },
    {
        nombre: "Manicuría y uñas",
        categoria: "estetica",
        descripcion:
            "Técnicas de cuidado, higiene, herramientas y reconocimiento de lesiones.",
        duracion: "Cuatrimestral",
        requisitos: "",
        img: "../assets/images/unias.jpeg",
    },
];

let categoriaActual = "todos";

const lista = document.getElementById("lista");
const buscador = document.getElementById("buscar");
const modal = document.getElementById("modal");

function render() {
    const textoBusqueda = buscador.value.toLowerCase().trim();

    lista.innerHTML = "";

    const cursosFiltrados = cursos.filter((curso) => {
        const coincideCategoria =
            categoriaActual === "todos" ||
            curso.categoria === categoriaActual;

        const coincideTexto = curso.nombre
            .toLowerCase()
            .includes(textoBusqueda);

        return coincideCategoria && coincideTexto;
    });

    cursosFiltrados.forEach((curso) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src="${curso.img}" alt="${curso.nombre}">
      <h3>${curso.nombre}</h3>
      <p>${curso.descripcion}</p>
    `;

        card.addEventListener("click", () => abrirModal(curso));

        lista.appendChild(card);
    });
}

function filtrar(categoria) {
    categoriaActual = categoria;
    render();
}

function abrirModal(curso) {
    document.getElementById("imgModal").src = curso.img;
    document.getElementById("titulo").textContent = curso.nombre;
    document.getElementById("desc").textContent = curso.descripcion;

    document.getElementById("duracion").textContent =
        "Duración: " + (curso.duracion || "Consultar");

    document.getElementById("req").textContent =
        "Requisitos: " + (curso.requisitos || "Consultar");

    modal.style.display = "block";
}

function cerrarModal() {
    modal.style.display = "none";
}

/* cerrar haciendo click afuera */
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});

/* buscador */
buscador.addEventListener("keyup", render);

/* primera carga */
render();


// Esto lo agregue para que se pueda cargar 
// la seccion especifica de cursos desde index
// ej: quiero ver curso de electricidad en index 
// le doy clic y va a cursos directamente a esa categoria
// agregado por team de inicio
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria');
    
    if (categoria) {
        filtrar(categoria); 
        // ejecuta funcion existente de filtrado
    }
});
