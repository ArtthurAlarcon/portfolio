import agendaImg from "../../src/assets/projects/saas.webp";

// Los campos de texto usan { es, en } y se resuelven con localize()
export const projects = [
  {
    id: "appointly",
    image: agendaImg,
    title: {
      es: "Appointly · SaaS de Agendamiento de Citas",
      en: "Appointly · Appointment Scheduling SaaS",
    },
    description: {
      es: "SaaS propio de agendamiento y gestión de citas que estoy desarrollando de forma independiente.",
      en: "My own appointment scheduling and management SaaS, which I'm building independently.",
    },
    tags: ["Astro", "Next.js", "NestJS", { es: "IA", en: "AI" }],
    type: "Fullstack",
    isOwn: true,
    status: "inProgress",
    isPrivate: false,
  },
  {
    id: "wedding-spa",
    image: agendaImg,
    title: {
      es: "Invitación Digital de Boda (SPA)",
      en: "Digital Wedding Invitation (SPA)",
    },
    description: {
      es: "SPA de invitación digital de boda desarrollada en Vue (Vite), con secciones informativas y diseño responsive. Optimicé el rendimiento enfocándome en Core Web Vitals: imagen hero en AVIF con fallback, preload/fetchpriority para mejorar LCP, y reducción de CLS mediante dimensiones definidas y layout estable.",
      en: "Digital wedding invitation SPA built with Vue (Vite), with informational sections and responsive design. I optimized performance focusing on Core Web Vitals: AVIF hero image with fallback, preload/fetchpriority to improve LCP, and reduced CLS through defined dimensions and a stable layout.",
    },
    tags: ["Vue", "Vite", "Core Web Vitals"],
    type: "Frontend",
    linkText: {
      es: "Acceso restringido (requiere credenciales)",
      en: "Restricted access (credentials required)",
    },
    linkUrl: "https://maderasconecta.gphsis.com/",
    isPrivate: true,
  },
  {
    id: "agenda-saas",
    image: agendaImg,
    title: {
      es: "Plataforma de Agendamiento y Gestión de Citas (SaaS)",
      en: "Appointment Scheduling & Management Platform (SaaS)",
    },
    description: {
      es: "SaaS de agendamiento para profesionales (nutriólogas, psicólogas, cosmetólogas, etc.), donde usuarios reservan citas según disponibilidad y se mantiene historial por cliente/paciente. Incluye estadísticas por semana y mes.",
      en: "Scheduling SaaS for professionals (nutritionists, psychologists, cosmetologists, etc.), where users book appointments based on availability and a history is kept per client/patient. Includes weekly and monthly statistics.",
    },
    tags: ["React", "Vite", "Material UI", "SQL"],
    type: "Fullstack",
    linkText: {
      es: "Acceso restringido (requiere credenciales)",
      en: "Restricted access (credentials required)",
    },
    linkUrl: "https://maderasconecta.gphsis.com/",
    isPrivate: true,
  },
  {
    id: "crm-gestion-comercial",
    image: agendaImg,
    title: {
      es: "CRM Web para Gestión Comercial y Seguimiento de Clientes",
      en: "Web CRM for Sales Management and Customer Follow-up",
    },
    description: {
      es: "Plataforma CRM enfocada en seguimiento de clientes, control de ventas, reportes analíticos y automatización de tareas administrativas para optimizar procesos comerciales.",
      en: "CRM platform focused on customer follow-up, sales control, analytical reporting and administrative task automation to optimize sales processes.",
    },
    highlights: {
      es: [
        "Seguimiento de clientes y ventas",
        "Reportes y métricas de gestión",
        "Automatización de tareas administrativas",
        "Optimización de flujos internos",
      ],
      en: [
        "Customer and sales tracking",
        "Management reports and metrics",
        "Administrative task automation",
        "Internal workflow optimization",
      ],
    },
    tags: ["PHP", "Bootstrap", "SQL"],
    type: "Fullstack",
    linkText: {
      es: "Acceso restringido (requiere credenciales)",
      en: "Restricted access (credentials required)",
    },
    linkUrl: "https://maderascrm.gphsis.com/",
    isPrivate: true,
  },
  {
    id: "pymes-landing-pages",
    image: agendaImg,
    title: {
      es: "Landing Pages para PyMEs",
      en: "Landing Pages for SMBs",
    },
    description: {
      es: "Desarrollo de landing pages para pequeños y medianos negocios en donde se visualizan secciones típicas como sus servicios, galería, testimonios, precios, paquetes, preguntas frecuentes y formulario de contacto.",
      en: "Landing pages for small and medium-sized businesses featuring typical sections such as services, gallery, testimonials, pricing, packages, FAQ and a contact form.",
    },
    tags: ["Vue", "Vite", "UI/UX", "Performance"],
    type: "Frontend",
    linkText: "Demo",
    // linkUrl: "https://TU-DEMO-AQUI.com/",
    isPrivate: false,
  },
  {
    id: "pwa-control-operativo-seguridad",
    image: agendaImg,
    title: {
      es: "PWA de Control y Monitoreo Operativo (Tiempo Real)",
      en: "Operations Control & Monitoring PWA (Real Time)",
    },
    description: {
      es: "Aplicación tipo PWA orientada al monitoreo en tiempo real: videovigilancia, geolocalización de unidades, visualización de incidencias y seguimiento de recorridos.",
      en: "PWA focused on real-time monitoring: video surveillance, unit geolocation, incident visualization and route tracking.",
    },
    highlights: {
      es: [
        "Monitoreo en tiempo real",
        "Geolocalización de unidades",
        "Visualización de incidencias",
        "Seguimiento de recorridos operativos",
      ],
      en: [
        "Real-time monitoring",
        "Unit geolocation",
        "Incident visualization",
        "Operational route tracking",
      ],
    },
    tags: ["Node.js", "Express", "PWA", "SQL"],
    type: "Fullstack",
    linkText: {
      es: "Abrir plataforma (acceso restringido)",
      en: "Open platform (restricted access)",
    },
    linkUrl: "https://viget.sspmqro.gob.mx/",
    isPrivate: true,
  },
  {
    id: "videollamadas-emergencias",
    image: agendaImg,
    title: {
      es: "Sistema de Videollamadas para Atención de Emergencias",
      en: "Video Call System for Emergency Response",
    },
    description: {
      es: "Plataforma para atención de emergencias mediante videollamada, con visualización de información en tiempo real para dar seguimiento a la situación sin depender de llamadas tradicionales.",
      en: "Emergency response platform via video call, displaying real-time information to follow up on the situation without relying on traditional phone calls.",
    },
    highlights: {
      es: [
        "Videollamadas integradas",
        "Información en tiempo real",
        "Flujo optimizado de atención",
        "Despliegue en contenedores",
      ],
      en: [
        "Integrated video calls",
        "Real-time information",
        "Optimized response flow",
        "Containerized deployment",
      ],
    },
    tags: ["Laravel", "Vue", "Docker", "Jitsi Meet", "SQL", "Node.js"],
    type: "Fullstack",
    linkText: {
      es: "Abrir plataforma (acceso restringido)",
      en: "Open platform (restricted access)",
    },
    linkUrl: "https://911.sspmqro.gob.mx/",
    isPrivate: true,
  },
  {
    id: "landing-pagos-mantenimiento-condominio",
    image: agendaImg,
    title: {
      es: "Landing + Portal Informativo para Pagos y Amenidades (Condominio)",
      en: "Landing + Information Portal for Payments and Amenities (Condominium)",
    },
    description: {
      es: "Rediseño completo de una landing page para usuarios con terreno, enfocada en pagos de mantenimiento, multas y apartados de amenidades. Incluye presentación de beneficios del condominio (alberca, gimnasio, jardinería, alumbrado), anuncios, reseñas, contenido multimedia y comunicación informativa.",
      en: "Full redesign of a landing page for lot owners, focused on maintenance fees, fines and amenity reservations. Showcases the condominium's benefits (pool, gym, landscaping, lighting), announcements, reviews, multimedia content and informational communication.",
    },
    tags: ["React", "Vite", "Material UI", "Frontend UI"],
    type: "Frontend",
    linkText: {
      es: "Ver sitio (No desplegada por el momento)",
      en: "View site (not deployed at the moment)",
    },
    // linkUrl: 'https://gph.mx/',
    linkUrl: "",
    isPrivate: true,
  },
  {
    id: "landing-producto-memorial",
    image: agendaImg,
    title: {
      es: "Landing Page para Producto Memorial (Nicho, Cripta, Urna y Árbol)",
      en: "Landing Page for a Memorial Product (Niche, Crypt, Urn and Tree)",
    },
    description: {
      es: "Landing page informativa para un proyecto memorial: venta de espacios como nichos, criptas, urnas y terrenos con árboles conmemorativos. Sección de variantes del producto, tipos de árboles, casos de uso (familiares y mascotas) y presentación visual del concepto tipo bosque/jardín memorial.",
      en: "Informational landing page for a memorial project: sale of spaces such as niches, crypts, urns and plots with memorial trees. Includes product variants, tree types, use cases (family members and pets) and a visual presentation of the memorial forest/garden concept.",
    },
    tags: ["HTML", "CSS", "JavaScript", "Landing Page"],
    type: "Frontend",
    linkText: { es: "Ver sitio", en: "View site" },
    linkUrl: "https://www.memorialmaderas.com.mx/",
    isPrivate: true,
  },

  {
    id: "digitalizacion-documentos-rh",
    image: agendaImg,
    title: {
      es: "Sistema de Digitalización y Gestión de Documentos (RH)",
      en: "Document Digitization & Management System (HR)",
    },
    description: {
      es: "Sistema para digitalización y administración de documentación, enfocado en trámites internos y gestión de expedientes, con almacenamiento en nube.",
      en: "System for digitizing and managing documentation, focused on internal procedures and personnel records, with cloud storage.",
    },
    highlights: {
      es: [
        "Gestión de expedientes y trámites",
        "Carga y control de documentos",
        "Estructura por perfiles/roles",
        "Integración con almacenamiento en nube",
      ],
      en: [
        "Records and procedures management",
        "Document upload and control",
        "Profile/role-based structure",
        "Cloud storage integration",
      ],
    },
    tags: ["Laravel", "Vue", "Docker", "Google Cloud Platform"],
    type: "Fullstack",
    linkText: {
      es: "Proyecto interno (sin acceso público)",
      en: "Internal project (no public access)",
    },
    linkUrl: null,
    isPrivate: true,
  },
  {
    id: "ia-reconocimiento-voz",
    image: agendaImg,
    title: {
      es: "Reconocimiento y Almacenamiento de Voz con IA",
      en: "AI Speech Recognition and Storage",
    },
    description: {
      es: "Solución con IA para interpretar y procesar audio, aplicada al análisis de lenguaje no estandarizado y almacenamiento de resultados para consulta posterior.",
      en: "AI solution to interpret and process audio, applied to the analysis of non-standard language and storing results for later lookup.",
    },
    highlights: {
      es: [
        "Procesamiento y transcripción de audio",
        "Automatización por tareas programadas",
        "Pipeline de análisis y almacenamiento",
        "Integración con scripts y cronjobs",
      ],
      en: [
        "Audio processing and transcription",
        "Automation through scheduled tasks",
        "Analysis and storage pipeline",
        "Integration with scripts and cron jobs",
      ],
    },
    tags: ["Python", "OpenAI Whisper", "Bash", "Cronjob"],
    type: "Backend",
    linkText: {
      es: "Proyecto interno (sin acceso público)",
      en: "Internal project (no public access)",
    },
    linkUrl: null,
    isPrivate: true,
  },
  {
    id: "lector-biometrico",
    image: agendaImg,
    title: {
      es: "Lector biométrico para resguardo de equipo policial",
      en: "Biometric Reader for Police Equipment Custody",
    },
    description: {
      es: "Desarrollo de un sistema para el resguardo de equipamiento y/o armamento policial (bodycams, armamento, etc) mediante lector biométrico de la huella dactilar.",
      en: "System for the custody of police equipment and/or weapons (bodycams, firearms, etc.) using a fingerprint biometric reader.",
    },
    highlights: {
      es: ["Sistema de resguardo", "Implementación de lector biometrico"],
      en: ["Custody system", "Biometric reader implementation"],
    },
    tags: [
      "Laravel",
      "Java",
      { es: "Lector biométrico", en: "Biometric reader" },
      "SQL",
    ],
    type: "Fullstack",
    linkText: {
      es: "Proyecto interno (sin acceso público)",
      en: "Internal project (no public access)",
    },
    linkUrl: null,
    isPrivate: true,
  },
  {
    id: "erp-inventarios-tiempo-real",
    image: agendaImg,
    title: {
      es: "ERP Híbrido (Web/Móvil) para Inventarios en Tiempo Real",
      en: "Hybrid ERP (Web/Mobile) for Real-Time Inventory",
    },
    description: {
      es: "ERP desarrollado como app híbrida para control de inventarios en tiempo real, optimizando procesos operativos y mejorando la gestión de equipos para su calibración.",
      en: "ERP built as a hybrid app for real-time inventory control, optimizing operational processes and improving the management of equipment for calibration.",
    },
    highlights: {
      es: [
        "Calibración de equipos",
        "Inventarios en tiempo real",
        "Reducción de costos y tiempos operativos",
        "ERP",
      ],
      en: [
        "Equipment calibration",
        "Real-time inventory",
        "Reduced operational costs and times",
        "ERP",
      ],
    },
    tags: ["React Native", "REST API", "MySQL"],
    type: "Fullstack",
    linkText: {
      es: "Proyecto interno (sin acceso público)",
      en: "Internal project (no public access)",
    },
    linkUrl: null,
    isPrivate: true,
  },
  {
    id: "app-cronometraje-nadadores",
    image: agendaImg,
    title: {
      es: "App de Cronometraje y Seguimiento de Rendimiento Deportivo",
      en: "Timing and Sports Performance Tracking App",
    },
    description: {
      es: "Aplicación móvil para cronometraje preciso y registro de atletas, con historial de rendimiento, análisis de progreso individual y gestión de eventos.",
      en: "Mobile app for precise timing and athlete registration, with performance history, individual progress analytics and event management.",
    },
    highlights: {
      es: [
        "Cronometraje preciso",
        "Historial de desempeño",
        "Análisis de progreso individual",
        "Gestión de eventos deportivos",
      ],
      en: [
        "Precise timing",
        "Performance history",
        "Individual progress analytics",
        "Sports event management",
      ],
    },
    tags: ["React Native", "PHP", "MySQL"],
    type: "Fullstack",
    linkText: {
      es: "Proyecto interno (sin acceso público)",
      en: "Internal project (no public access)",
    },
    linkUrl: null,
    isPrivate: true,
  },
  {
    id: "cuelgapp-bloqueo-llamadas",
    image: agendaImg,
    title: {
      es: "Sistema de Bloqueo Automático de Llamadas (Blacklist + Estadísticas)",
      en: "Automatic Call Blocking System (Blacklist + Statistics)",
    },
    description: {
      es: "Plataforma enfocada en seguridad telefónica: administra una blacklist de números reportados por mal uso (extorsión, bromas, fraude, etc.) para bloquear automáticamente llamadas entrantes y prevenir que el usuario sea contactado.",
      en: "Phone security platform: manages a blacklist of numbers reported for misuse (extortion, prank calls, fraud, etc.) to automatically block incoming calls and prevent the user from being contacted.",
    },
    highlights: {
      es: [
        "Registro y administración de blacklist (motivos: extorsión, fraude, bromas, etc.)",
        "Consulta y validación de números en tiempo real (bloqueo automático)",
        "Panel de visualización y muestreo de reportes",
        "Métricas y estadísticas de bloqueos por periodo",
      ],
      en: [
        "Blacklist registration and management (reasons: extortion, fraud, pranks, etc.)",
        "Real-time number lookup and validation (automatic blocking)",
        "Report visualization dashboard",
        "Blocking metrics and statistics by period",
      ],
    },
    tags: [
      "Backend",
      "REST API",
      "SQL",
      { es: "Estadísticas", en: "Statistics" },
    ],
    type: "Backend",
    linkText: { es: "Ver sitio", en: "View site" },
    linkUrl: "https://sspmqueretaro.com/programas/cuelgapp/",
    isPrivate: true,
  },
];
