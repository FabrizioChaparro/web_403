// 1. BASE DE DATOS.
// Contiene toda la información de los cursos: nombre, descripción, imagen, categoría y detalles de horarios.
const cursos = [
    // --- TECNOLOGÍA Y PROGRAMACIÓN ---
    {
        id: "habilidades-digitales",
        nombre: "Habilidades Digitales",
        categoria: "Tecnologia y Programacion",
        descripcion: "Curso introductorio para dominar las herramientas esenciales del mundo digital: navegación segura, gestión de archivos en la nube, correo electrónico y uso básico de herramientas colaborativas.",
        img: "../assets/images/Competencias-digitales.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Martes, Jueves Y Viernes", horarios: "08:00 a 12:00 hs", turno: "Mañana" },
            { lugar: "Sede", dias: "Miercoles y Viernes", horarios: "13:00 a 17:00 hs", turno: "Tarde" },
            { lugar: "Sub Sede Moron", dias: "Martes y Jueves", horarios: "13:00 a 17:00 hs", turno: "Tarde" },
            { lugar: "Sub Sede Centenario", dias: "Lunes y Viernes", horarios: "17:40 a 21:00 hs", turno: "Tarde" },
            { lugar: "Sub Sede San Miguel", dias: "Lunes Y Miercoles", horarios: "13:30 a 16:50 hs", turno: "Tarde" }
        ]
    },
    {
        id: "programador-base",
        nombre: "Programador/a",
        categoria: "Tecnologia y Programacion",
        descripcion: "Introducción a la lógica de programación, estructuras de datos y algoritmos fundamentales para desarrollar software.",
        img: "../assets/images/Programador.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes Y Miercoles", horarios: "17:00 a 21:00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Miercoles Y Viernes", horarios: "13:00 a 17:00 hs", turno: "Tarde" }
        ]
    },
    {
        id: "python-basico",
        nombre: "Programación en Python",
        categoria: "Tecnologia y Programacion",
        descripcion: "Aprende uno de los lenguajes más versátiles del mundo. Desde conceptos básicos hasta el manejo de librerías para automatizar tareas.",
        img: "../assets/images/Programación-en-Python.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes, Miercoles Y Viernes", horarios: "13:00 a 17: 00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Viernes", horarios: "14:00 a 16: 00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Lunes", horarios: "09:00 a 11: 00 hs", turno: "Mañana" },
            { lugar: "Sede", dias: "Martes Y Jueves", horarios: "08:00 a 12: 00 hs", turno: "Mañana" },
            { lugar: "Sede", dias: "Martes Y Viernes", horarios: "17:40 a 21: 00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Miercoles Y Viernes", horarios: "13:00 a 17: 00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Martes Y Jueves", horarios: "08:00 a 12: 00 hs", turno: "Mañana" },
            { lugar: "Sede", dias: "Miercoles Y Viernes", horarios: "17:40 a 21: 00 hs", turno: "Tarde" }
        ]
    },
    {
        id: "programacion-web",
        nombre: "Programación Web",
        categoria: "Tecnologia y Programacion",
        descripcion: "Domina las tecnologías necesarias para crear sitios web dinámicos y funcionales, incluyendo HTML5, CSS3 y fundamentos de JavaScript.",
        img: "../assets/images/Programación-Web.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes, Miercoles Y Viernes", horarios: "08:00 a 12:00 hs", turno: "Mañana" },
            { lugar: "Sub Sede Moron", dias: "Martes Y Jueves", horarios: "08:00 a 12:20 hs", turno: "Mañana" }
        ]
    },
    {
        id: "pensamiento-computacional",
        nombre: "Pensamiento Computacional - Programación",
        categoria: "Tecnologia y Programacion",
        descripcion: "Desarrolla la capacidad de resolver problemas complejos desglosándolos en pasos lógicos, una base fundamental para cualquier tipo de programación.",
        img: "../assets/images/Pensamiento-Computacional-Programación.jpg",
        comisiones: [{ lugar: "Sede", dias: "Miercoles Y Viernes", horarios: "13:00 a 17:00 hs", turno: "Tarde" }]
    },
    {
        id: "ia-basico",
        nombre: "Programación Básica en Inteligencia Artificial",
        categoria: "Tecnologia y Programacion",
        descripcion: "Introducción a los conceptos de IA y cómo implementar modelos básicos utilizando lenguajes de programación actuales.",
        img: "../assets/images/Programacion-Basica-en-Inteligencia-Artificial.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes Y miercoles", horarios: "13:00 a 17:00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Viernes", horarios: "14:00 a 16:00 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Lunes", horarios: "09:00 a 11:00 hs", turno: "Mañana" },
            { lugar: "Sede", dias: "Martes Y Jueves", horarios: "08:00 a 12:00 hs", turno: "Mañana" }
        ]
    },
    {
        id: "python-data-science",
        nombre: "Programación en Python avanzado para ciencia de datos",
        categoria: "Tecnologia y Programacion",
        descripcion: "Especialízate en el análisis de grandes volúmenes de datos, visualización y aprendizaje automático utilizando librerías avanzadas.",
        img: "../assets/images/Programación-en-Python-avanzado-para-ciencia-de-datos.jpg",
        comisiones: [{ lugar: "Sede", dias: "Martes Y Viernes", horarios: "17:40 a 21:00 hs", turno: "Tarde" }]
    },
    {
        id: "testing-apps",
        nombre: "Testing de aplicaciones",
        categoria: "Tecnologia y Programacion",
        descripcion: "Aprende a detectar errores, asegurar la calidad del software y realizar pruebas de usuario.",
        img: "../assets/images/Testing-de-aplicaciones.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes, Miercoles Y Viernes", horarios: "08:00 a 12:00 hs", turno: "Mañana" },
            { lugar: "Sub Sede Moron", dias: "Martes Y Jueves", horarios: "08:40 a 12:00 hs", turno: "Mañana" }
        ]
    },
    {
        id: "sistemas-embebidos",
        nombre: "Implementadora/or de Sistemas Embebidos",
        categoria: "Tecnologia y Programacion",
        descripcion: "Aprende a integrar software con hardware para crear dispositivos inteligentes (IoT).",
        img: "../assets/images/Implementadora-de-Sistemas-Embebidos.jpg",
        comisiones: [{ lugar: "Sede", dias: "Miercoles Y Viernes", horarios: "13:00 a 17:00 hs", turno: "Tarde" }]
    },
    {
        id: "diseno-web",
        nombre: "Diseño de Página Web",
        categoria: "Diseño, Marketing y Comunicación Digital",
        descripcion: "Aprende los principios de experiencia de usuario (UX) e interfaz (UI) para diseñar sitios web atractivos.",
        img: "../assets/images/Diseño-de-Página-Web.jpg",
        comisiones: [{ lugar: "Sede", dias: "Lunes, Miercoles Y Viernes", horarios: "08:00 a 12:00 hs", turno: "Mañana" }]
    },
    {
        id: "piezas-graficas-rrss",
        nombre: "Realizadora/or de Piezas Gráficas/Audiovisuales para Redes Sociales",
        categoria: "Diseño, Marketing y Comunicación Digital",
        descripcion: "Crea contenido visual impactante y personalizado (posts, stories) para captar la atención en redes sociales.",
        img: "../assets/images/Realizadora-de-Piezas-Gráficas-para-Redes-Sociales.jpg",
        comisiones: [{ lugar: "Sub Sede Moron", dias: "Martes Y Jueves", horarios: "17:00 a 20:20 hs", turno: "Tarde" }]
    },
    {
        id: "gestion-rrss",
        nombre: "Gestión de Redes Sociales",
        categoria: "Diseño, Marketing y Comunicación Digital",
        descripcion: "Aprende a planificar estrategias de contenido, gestionar comunidades online y analizar métricas.",
        img: "../assets/images/Gestión-de-Redes-Sociales.jpg",
        comisiones: [{ lugar: "Sede", dias: "Lunes Y Miercoles Y Viernes", horarios: "08:00 a 12:00 hs", Turno: "Mañana" }]
    },
    {
        id: "marketing-ventas-digitales",
        nombre: "Operador/a de Herramientas de Marketing y Venta Digital",
        categoria: "Diseño, Marketing y Comunicación Digital",
        descripcion: "Domina las herramientas de publicidad online (Ads), SEO, email marketing y plataformas de venta.",
        img: "../assets/images/Operador-de-Herramientas-de-Marketing-y-Venta-Digital.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes, Miercoles Y Viernes", horarios: "08:00 a 12: 00 hs", turno: "Mañana" },
            { lugar: "Sub Sede San Miguel", dias: "Lunes, Miercoles Y Viernes", horarios: "18:00 a 21: 00 hs", turno: "Tarde" }
        ]
    },
    {
        id: "grafico-nivel1",
        nombre: "Técnicas de Diseño Gráfico en Sistemas Informáticos Nivel I",
        categoria: "Diseño, Marketing y Comunicación Digital",
        descripcion: "Fundamentos del diseño gráfico digital: teoría del color, tipografía y uso básico de software.",
        img: "../assets/images/Técnicas-de-Diseño-Gráfico-en-Sistemas-Informáticos-Nivel-I.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes Y Miercoles", horarios: "12:20 a 16:40 hs", turno: "Tarde" },
            { lugar: "Sub Sede Moron", dias: "Miercoles Y Jueves", horarios: "13:00 a 17:00 hs", turno: "Tarde" },
            { lugar: "Sub Sede Centenario", dias: "Lunes Y Miercols", horarios: "13:30 a 16:50 hs", turno: "Tarde" },
            { lugar: "Sede", dias: "Lunes Y Miercoles", horarios: "16:40 a 21:40 hs", turno: "Tarde" }
        ]
    },
    {
        id: "grafico-nivel2",
        nombre: "Técnicas de Diseño Gráfico en Sistemas Informáticos Nivel II",
        categoria: "Diseño, Marketing y Comunicación Digital",
        descripcion: "Técnicas avanzadas de composición gráfica y creación de identidades visuales.",
        img: "../assets/images/Técnicas-de-Diseño-Gráfico-en-Sistemas-Informáticos-Nivel-II.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes Y Miercoles", horarios: "12:20 a 16:40 hs", turno: "Tarde" },
            { lugar: "Sub Sede Centenario", dias: "Lunes Y Miercoles", horarios: "13:30 a 16:50 hs", turno: "Tarde" },
            { lugar: "Sub Sede Moron", dias: "Martes Y Jueves", horarios: "13:00 a 17:00 hs", turno: "Tarde" }
        ]
    },
    {
        id: "administrativo",
        nombre: "Administrativo/a",
        categoria: "Administración, Contabilidad y RRHH",
        descripcion: "Formación integral en gestión de tareas de oficina, organización de documentos y atención al cliente.",
        img: "../assets/images/Administrativo.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "planillas-calculo",
        nombre: "Asistente administrativo/a de planillas de cálculo",
        categoria: "Administración, Contabilidad y RRHH",
        descripcion: "Especialización en el uso avanzado de Excel o Google Sheets para la organización de datos.",
        img: "../assets/images/Asistente-administrativo-de-planillas-de-cálculo.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "auxiliar-contable",
        nombre: "Auxiliar Contable",
        categoria: "Administración, Contabilidad y RRHH",
        descripcion: "Aprende los principios básicos de contabilidad, registro de facturas y gestión de libros.",
        img: "../assets/images/Auxiliar-Contable.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "rrhh-gestion",
        nombre: "Administración y Conducción de RRHH",
        categoria: "Administración, Contabilidad y RRHH",
        descripcion: "Gestión del talento humano: reclutamiento, selección, capacitación y normativas laborales.",
        img: "../assets/images/Administración-y-Conducción-de-RRHH.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "liquidador-sueldos",
        nombre: "Liquidador/a de Sueldos",
        categoria: "Administración, Contabilidad y RRHH",
        descripcion: "Especialízate en el cálculo de haberes, retenciones y cumplimiento de normativas legales.",
        img: "../assets/images/Liquidador-de-Sueldos.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "gestion-pymes",
        nombre: "Administración de Pymes",
        categoria: "Administración, Contabilidad y RRHH",
        descripcion: "Herramientas prácticas para la gestión eficiente de pequeñas y medianas empresas.",
        img: "../assets/images/Administración-de-Pymes.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "electricista-inmuebles",
        nombre: "Electricista en inmuebles",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Formación técnica para realizar instalaciones eléctricas seguras en hogares, incluyendo cableado y tableros.",
        img: "../assets/images/electricista-en-inmuebles.jpg",
        comisiones: [
            { lugar: "Sede", dias: "Lunes, Martes, Miércoles y Jueves", horarios: "08:40 a 12:00 hs", turno: "Mañana" },
            { lugar: "Sub Sede San Martín", dias: "Lunes, Miércoles, Jueves y Viernes", horarios: "16:40 a 21:30 hs", turno: "Tarde" },
            { lugar: "Sub Sede San Justo", dias: "Lunes, Miércoles y Viernes", horarios: "17:00 a 21:00 hs", turno: "Tarde" }
        ]
    },
    {
        id: "montador-electricista",
        nombre: "Montador/a Electricista Domiciliario",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Especialización en el montaje de luminarias, interruptores y canalizaciones eléctricas.",
        img: "../assets/images/Montador-Electricista-Domiciliario.jpg",
        comisiones: [
            { lugar: "Sede (V4)", dias: "Lunes, Miércoles y Jueves", horarios: "17:40 a 21:00 hs" },
            { lugar: "Sede (V5)", dias: "Lunes, Jueves y Viernes", horarios: "13:00 a 17:00 hs" },
            { lugar: "Sub Sede San Martín", dias: "Lunes, Martes y Jueves", horarios: "Consultar" }
        ]
    },
    {
        id: "electricista-industrial",
        nombre: "Electricista Industrial",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Capacitación para trabajar con sistemas eléctricos de alta potencia y maquinaria industrial.",
        img: "../assets/images/Electricista-Industrial.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "energia-renovable",
        nombre: "Instalador/a de Sistemas Eléctricos de Energía Renovables",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Aprende a instalar y mantener sistemas basados en energía solar, eólica u otras fuentes.",
        img: "../assets/images/Instalador-de-Sistemas-Eléctricos-de-Energía-Renovables.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "climatizacion",
        nombre: "Instalador/a y reparador/a de equipos de climatización",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Formación técnica para la instalación, mantenimiento y reparación de aires acondicionados.",
        img: "../assets/images/Instalador-y-reparador-de-equipos-de-climatización.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "gasista-domiciliario",
        nombre: "Gasista domiciliario",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Instalación y mantenimiento seguro de redes de gas para uso doméstico.",
        img: "../assets/images/gasista-domiciliario.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "sanitarista",
        nombre: "Instalador/a Sanitarista",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Curso práctico sobre la instalación de tuberías, grifería y sistemas de desagüe.",
        img: "../assets/images/Instalador-Sanitarista.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "mantenimiento-edificios",
        nombre: "Mantenimiento de Edificios",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Gestión y ejecución de tareas de mantenimiento preventivo y correctivo en infraestructuras.",
        img: "../assets/images/Mantenimiento-de-Edificios.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "solar-termico",
        nombre: "Instalador/a de Sistemas Solares Térmicos para Agua Caliente Sanitaria",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Instalación de sistemas que utilizan la energía del sol para calentar agua.",
        img: "../assets/images/Instalador-de-Sistemas-Solares-Térmicos-para-Agua-Caliente-Sanitaria.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "reparador-electrodomesticos",
        nombre: "Reparador/a de Electrodomésticos",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Diagnóstico y reparación de pequeños y grandes electrodomésticos.",
        img: "../assets/images/Reparador-de-Electrodomésticos.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "reparador-frigorificos",
        nombre: "Reparador/a de Refrigeradores Domésticos",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Curso especializado en la reparación de motores y sistemas de refrigeración.",
        img: "../assets/images/Reparador-de-Refrigeradores-Domésticos.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "baja-tension",
        nombre: "Instalador/a de Sistemas de Muy Baja Tensión",
        categoria: "Oficios Técnicos e Instalaciones",
        descripcion: "Instalación de alarmas, intercomonía y sistemas que operan con baja tensión.",
        img: "../assets/images/Instalador-de-Sistemas-de-Muy-Baja-Tensión.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "serigrafia",
        nombre: "Serigrafía y Estampado Múltiple",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Técnicas de impresión sobre textiles y diversos materiales.",
        img: "../assets/images/Serigrafía-y-estampado-múltiple.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "fab_digital",
        nombre: "Diseño y Fabricación Digital",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Introducción a la producción mediante tecnologías como corte láser y grabado.",
        img: "../assets/images/Diseño-y-Fabricación-Digital.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "robotica",
        nombre: "Robótica y Automatización",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Diseño de sistemas automáticos y programación de PLCs.",
        img: "../assets/images/Robótica-y-Automatización.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "soldador_basico",
        nombre: "Soldador/a Básico",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Fundamentos de soldadura manual y eléctrica.",
        img: "../assets/images/Soldador-Basico.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "soldador_pro",
        nombre: "Soldador/a",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Nivel avanzado de soldadura industrial y técnicas por materiales.",
        img: "../assets/images/Soldador.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "cad_diseño",
        nombre: "Diseño Proyectual Asistido por Computadora (CAD)",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Uso de software profesional para crear planos técnicos 2D y modelos 3D.",
        img: "../assets/images/Diseño-Proyectual-Asistido-por-Computadora.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "mantenimiento_pc",
        nombre: "Práctico en Diagnóstico, Reparación y Mantenimiento de Computadoras Personales",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Diagnóstico de fallas de hardware, cambio de componentes y optimización.",
        img: "../assets/images/Práctico-en-Diagnóstico-Reparación-y-Mantenimiento-de-Computadoras-Personales.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "impresion_3d",
        nombre: "Modelado e Impresión 3D",
        categoria: "Manufactura, Robótica y Diseño Industrial",
        descripcion: "Diseño de piezas en software 3D y preparación para fabricación por impresión.",
        img: "../assets/images/Modelado-e-Impresión-3D.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "maquillador",
        nombre: "Maquillador/a Profesional",
        categoria: "Estética, Belleza y Moda",
        descripcion: "Técnicas de maquillaje artístico, social y profesional.",
        img: "../assets/images/Maquillador-Profesional.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "cosmetologia",
        nombre: "Cosmetología",
        categoria: "Estética, Belleza y Moda",
        descripcion: "Tratamientos estéticos faciales y corporales.",
        img: "../assets/images/Cosmetología.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "manicuria",
        nombre: "Manicuría",
        categoria: "Estética, Belleza y Moda",
        descripcion: "Curso completo sobre manicura básica y técnica.",
        img: "../assets/images/Manicuría.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "unas_artificiales",
        nombre: "Especialista en Uñas Artificiales",
        categoria: "Estética, Belleza y Moda",
        descripcion: "Aplicación de sistemas de extensión de uñas (gel, acrílico).",
        img: "../assets/images/Especialista-en-Uñas-Artificiales.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "depilacion",
        nombre: "Depilación",
        categoria: "Estética, Belleza y Moda",
        descripcion: "Técnicas profesionales de depilación corporal y facial.",
        img: "../assets/images/Depilación.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "bolsos_mochilas",
        nombre: "Confección de Bolsos y Mochilas",
        categoria: "Estética, Belleza y Moda",
        descripcion: "Diseño y fabricación manual y en serie de accesorios textiles.",
        img: "../assets/images/Confección-de-Bolsos-y-Mochilas.jpg",
        comisiones: [{ lugar: "Sub Sede Centenario", dias: "Lunes y Jueves", horarios: "08:00 a 12:40 hs" }]
    },
    {
        id: "ingles_tecnico_1",
        nombre: "Inglés para Ámbitos Técnicos e Industriales Nivel I",
        categoria: "Idiomas y Otros",
        descripcion: "Desarrollo del vocabulario técnico y habilidades comunicativas básicas en el sector industrial.",
        img: "../assets/images/Inglés-para-Ámbitos-Técnicos-e-Industriales-Nivel-I.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    },
    {
        id: "ingles_tecnico_2",
        nombre: "Inglés para Ámbitos Técnicos e Industriales Nivel II",
        categoria: "Idiomas y Otros",
        descripcion: "Consolidación de habilidades avanzadas, resolución de problemas complejos y gestión en entornos industriales multiculturales.",
        img: "../assets/images/Inglés-para-Ámbitos-Técnicos-e-Industriales-Nivel-I.jpg",
        comisiones: [{ lugar: "Sede Principal", dias: "A convenir", horarios: "Consultar" }]
    }
];

// Selección de los elementos en la página con los que el sistema interactuará.
let categoriaActual = "todos";
const listaCursos = document.getElementById("lista");
const inputBusqueda = document.getElementById("buscar");
const botonesFiltro = document.querySelectorAll('.filtros button');

// Filtra la lista de cursos basándose en lo que el usuario escribe y selecciona como categoría.
function obtenerCursosFiltrados() {
    const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
    return cursos.filter(curso => {
        const coincideCategoria = (categoriaActual === "todos" || curso.categoria === categoriaActual);
        const coincideTexto = curso.nombre.toLowerCase().includes(textoBusqueda);
        return coincideCategoria && coincideTexto;
    });
}

// Crea y dibuja las tarjetas de los cursos en la pantalla según el filtro activo.
function render() {
    const cursosFiltrados = obtenerCursosFiltrados();
    listaCursos.innerHTML = "";

    cursosFiltrados.forEach(curso => {
        const card = document.createElement("div");
        card.classList.add("box");

        let contenidoTabla = "";

        // Si el curso tiene varias opciones de horarios o sedes (comisiones), genera una tabla detallada.
        if (curso.comisiones && Array.isArray(curso.comisiones) && curso.comisiones.length > 0) {
            curso.comisiones.forEach((c, index) => {
                contenidoTabla += `
                    <tr class="row-commission">
                        <td class="cell-info-header" colspan="2">
                            ${index === 0 ? 'Informacion Principal' : 'Informacion ' + (index + 1)}
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Lugar:</strong></td>
                        <td>${c.lugar || 'Consultar'}</td>
                    </tr>
                    <tr>
                        <td><strong>Turno:</strong></td>
                        <td>${c.turno || 'Consultar'}</td>
                    </tr>
                    <tr>
                        <td><strong>Días:</strong></td>
                        <td>${c.dias || 'A consultar'}</td>
                    </tr>
                    <tr>
                        <td><strong>Horarios:</strong></td>
                        <td>${c.horarios || 'A consultar'}</td>
                    </tr>
                `;
            });
        } else {
            // Si el curso tiene información básica única, muestra una tabla simplificada.
            contenidoTabla = `
                <tr><td><strong>Turno:</strong></td><td>${curso.turno || 'Consultar'}</td></tr>
                <tr><td><strong>Duración:</strong></td><td>${curso.duracion || 'Consultar'}</td></tr>
                <tr><td><strong>Requisitos:</strong></td><td>${curso.requisitos || 'Consultar'}</td></tr>
                <tr><td><strong>Lugar:</strong></td><td>${curso.lugar || 'Sede Central'}</td></tr>
                <tr><td><strong>Días:</strong></td><td>${curso.dias || 'A consultar'}</td></tr>
                <tr><td><strong>Horarios:</strong></td><td>${curso.horarios || 'A consultar'}</td></tr>
            `;
        }

        card.innerHTML = `
            <img src="${curso.img}" alt="${curso.nombre}" class="box-bg">
            <div class="box-overlay">
                <div class="box-content">
                    <span class="category-badge">${curso.categoria}</span>
                    <h3 class="box-title">${curso.nombre}</h3>
                    
                    <div class="extra-info">
                        <p class="box-description">${curso.descripcion}</p>
                        <table class="info-table">
                            ${contenidoTabla}
                        </table>
                    </div>

                    <button class="btn-more">Ver más información</button>
                </div>
            </div>
        `;
        listaCursos.appendChild(card);
    });
}

// Cambia la categoría activa y vuelve a dibujar las tarjetas en pantalla.
function filtrar(categoria) {
    categoriaActual = categoria;
    render();
}

// Configura los botones de filtro para que funcionen al hacer clic.
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const categoriaSeleccionada = boton.getAttribute('data-categoria');
        filtrar(categoriaSeleccionada);
    });
});

// Actualiza la lista automáticamente mientras el usuario escribe en el buscador.
inputBusqueda.addEventListener("keyup", render);

// Detecta clics para mostrar u ocultar la información extra (efecto acordeón).
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('btn-more')) {
        const btn = e.target;
        const extraInfo = btn.previousElementSibling;
        extraInfo.classList.toggle('show');

        if (extraInfo.classList.contains('show')) {
            btn.textContent = "Ocultar información";
        } else {
            btn.textContent = "Ver más información";
        }
    }
});

// Inicia la carga de cursos al abrir la página por primera vez.
render();
