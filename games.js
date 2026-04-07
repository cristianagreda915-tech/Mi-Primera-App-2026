export const CATEGORIAS = [
  { id: "futbol",       label: "⚽ Fútbol",       color: "#16a34a" },
  { id: "accion",       label: "💥 Acción",       color: "#dc2626" },
  { id: "multijugador", label: "👥 Multi-Player", color: "#7c3aed" },
  { id: "carreras",     label: "🏎️ Carreras",     color: "#ea580c" },
  { id: "aventura",     label: "🗺️ Aventura",     color: "#0284c7" },
];

export const MARCAS = [
  { id: "nintendo",    label: "Nintendo",    color: "#e4000f" },
  { id: "playstation", label: "PlayStation", color: "#0070d1" },
  { id: "xbox",        label: "Xbox",        color: "#52b043" },
];

export const JUEGOS = {
  futbol: [
    {
      id: "eafc25", titulo: "EA Sports FC 25", marca: "playstation",
      plataforma: "PS5 / PS4 / Xbox / Switch", precio: 69.99, emoji: "⚽",
      descripcion: "El fútbol más realista con FC IQ, modo Rush 5v5 y todas las ligas oficiales.",
      imagenes: [
      require("./assets/images/games/eafc25-1.jpg"), 
      require("./assets/images/games/eafc25-2.jpg"), 
      require("./assets/images/games/eafc25-3.jpg")
    ],

      video: require("./assets/videos/games/eafc25-trailer.mp4"),
      reseñas: [
        { nombre: "Carlos M.",  estrellas: 5, texto: "El modo Rush es adictivo, lo mejor que le han agregado en años." },
        { nombre: "Sofía R.",   estrellas: 4, texto: "Gráficos increíbles en PS5. La IA defensiva mejoró mucho." },
        { nombre: "Diego P.",   estrellas: 4, texto: "Ultimate Team sigue siendo muy entretenido. Vale la pena." },
      ],
    },
    {
      id: "efootball2024", titulo: "eFootball 2024", marca: "xbox",
      plataforma: "Xbox Series X/S / PS5 / PC", precio: 0, emoji: "⚽",
      descripcion: "El simulador de fútbol gratuito de Konami con licencias oficiales de clubes top europeos.",
      imagenes: [
        require("./assets/images/games/efootball2024-1.jpg"), 
        require("./assets/images/games/efootball2024-2.jpg"), 
        require("./assets/images/games/efootball2024-3.jpg")],

        video: require("./assets/videos/games/efootball2024-trailer.mp4"),
        reseñas: [
        { nombre: "Andrés F.", estrellas: 4, texto: "Gratis y con muy buen gameplay. El pase manual es brillante." },
        { nombre: "María L.",  estrellas: 3, texto: "Buen juego base pero faltan muchas licencias de ligas." },
        { nombre: "Juan T.",   estrellas: 4, texto: "La física del balón es la más realista del mercado." },
      ],
    },
    {
      id: "mario-strikers", titulo: "Mario Strikers: Battle League", marca: "nintendo",
      plataforma: "Nintendo Switch — Exclusivo", precio: 59.99, emoji: "⚽",
      descripcion: "Fútbol arcade caótico con personajes de Mario, hipergolpes y torneos online de 8 jugadores.",
        imagenes: [
        require("./assets/images/games/mario-strikers-1.jpg"), 
        require("./assets/images/games/mario-strikers-2.jpg"), 
        require("./assets/images/games/mario-strikers-3.jpg")],

        video: require("./assets/videos/games/mario-strikers-trailer.mp4"),
      reseñas: [
        { nombre: "Paula G.", estrellas: 5, texto: "Perfecto para partidas locales con amigos. Muy divertido." },
        { nombre: "Luis M.",  estrellas: 4, texto: "Los hipergolpes son espectaculares. La curva de aprendizaje existe." },
        { nombre: "Ana G.",   estrellas: 4, texto: "Caótico y divertidísimo. Ideal para jugar en familia." },
      ],
    },
  ],
  accion: [
    {
      id: "god-of-war-ragnarok", titulo: "God of War: Ragnarök", marca: "playstation",
      plataforma: "PS5 / PS4 — Exclusivo", precio: 69.99, emoji: "💥",
      descripcion: "Kratos y Atreus recorren los nueve reinos nórdicos antes del Ragnarök.",
        imagenes: [
        require("./assets/images/games/gow-ragnarok-1.jpg"), 
        require("./assets/images/games/gow-ragnarok-2.jpg"), 
        require("./assets/images/games/gow-ragnarok-3.jpg")],

        video: require("./assets/videos/games/gow-ragnarok-trailer.mp4"),
      reseñas: [
        { nombre: "Roberto V.",  estrellas: 5, texto: "Obra maestra. La historia de Atreus es profunda y emotiva." },
        { nombre: "Isabella C.", estrellas: 5, texto: "Gráficos fotorrealistas en PS5. Bosses épicos." },
        { nombre: "Miguel A.",   estrellas: 4, texto: "Largo en algunos tramos pero cada momento vale la pena." },
      ],
    },
    {
      id: "halo-infinite", titulo: "Halo Infinite", marca: "xbox",
      plataforma: "Xbox Series X/S / PC — Game Pass", precio: 39.99, emoji: "💥",
      descripcion: "Master Chief regresa al anillo Zeta con gancho, mundo semiabierto y multijugador gratuito.",
      imagenes: [
      require("./assets/images/games/halo-infinite-1.jpg"), 
      require("./assets/images/games/halo-infinite-2.jpg"), 
      require("./assets/images/games/halo-infinite-3.jpg")],

      video: require("./assets/videos/games/halo-infinite-trailer.mp4"),
      reseñas: [
        { nombre: "Kevin B.",   estrellas: 4, texto: "El multijugador gratuito es adictivo. El gancho cambia todo." },
        { nombre: "Laura P.",   estrellas: 3, texto: "Gráficos inconsistentes pero gameplay clásico de Halo." },
        { nombre: "Ricardo T.", estrellas: 4, texto: "Campaña sólida con mundo semiabierto. Mejor de lo esperado." },
      ],
    },
    {
      id: "bayonetta3", titulo: "Bayonetta 3", marca: "nintendo",
      plataforma: "Nintendo Switch — Exclusivo", precio: 59.99, emoji: "💥",
      descripcion: "La bruja más estilosa regresa con demonios invocables, combos espectaculares y multiverso.",
      imagenes: [
      require("./assets/images/games/bayonetta3-1.jpg"), 
      require("./assets/images/games/bayonetta3-2.jpg"), 
      require("./assets/images/games/bayonetta3-3.jpg")],

      video: require("./assets/videos/games/bayonetta3-trailer.mp4"),
      reseñas: [
        { nombre: "Elena S.",  estrellas: 5, texto: "El sistema de demonios añade una capa táctica increíble." },
        { nombre: "Felipe N.", estrellas: 4, texto: "Visualmente impactante para Switch. La historia es una locura." },
        { nombre: "Camila T.",estrellas: 4, texto: "El mejor hack-and-slash en Switch sin duda." },
      ],
    },
  ],
  multijugador: [
    {
      id: "minecraft", titulo: "Minecraft", marca: "xbox",
      plataforma: "Xbox / Switch / PS5 / PC / Móvil", precio: 29.99, emoji: "👥",
      descripcion: "El juego de construcción y supervivencia más popular del mundo. Cross-play en todas las plataformas.",
        imagenes: [
        require("./assets/images/games/minecraft-1.jpg"), 
        require("./assets/images/games/minecraft-2.jpg"), 
        require("./assets/images/games/minecraft-3.jpg")],

        video: require("./assets/videos/games/minecraft-trailer.mp4"),
      reseñas: [
        { nombre: "Natalia C.",  estrellas: 5, texto: "Infinito en posibilidades. Con amigos es una experiencia única." },
        { nombre: "David R.",    estrellas: 5, texto: "Mis hijos llevan 3 años jugando y no se aburren." },
        { nombre: "Patricia M.", estrellas: 4, texto: "Las actualizaciones siguen siendo muy buenas." },
      ],
    },
    {
      id: "splatoon3", titulo: "Splatoon 3", marca: "nintendo",
      plataforma: "Nintendo Switch — Exclusivo", precio: 59.99, emoji: "👥",
      descripcion: "Batallas de tinta online hasta 8 jugadores, modo cooperativo Salmon Run y X Battle competitivo.",
        imagenes: [
        require("./assets/images/games/splatoon3-1.jpg"), 
        require("./assets/images/games/splatoon3-2.jpg"), 
        require("./assets/images/games/splatoon3-3.jpg")],

        video: require("./assets/videos/games/splatoon3-trailer.mp4"),
      reseñas: [
        { nombre: "Sergio A.", estrellas: 5, texto: "Único en su género. Competitivo pero accesible para todos." },
        { nombre: "Monica F.", estrellas: 4, texto: "El modo Salmon Run cooperativo es muy divertido." },
        { nombre: "Jorge H.",  estrellas: 5, texto: "Las temporadas con nuevo contenido lo mantienen siempre fresco." },
      ],
    },
    {
      id: "cod-mw3", titulo: "Call of Duty: Modern Warfare III", marca: "playstation",
      plataforma: "PS5 / PS4 / Xbox / PC", precio: 69.99, emoji: "👥",
      descripcion: "El shooter multijugador más jugado del mundo con 16 mapas clásicos remasterizados y modo Zombies.",
        imagenes: [
        require("./assets/images/games/cod-mw3-1.jpg"), 
        require("./assets/images/games/cod-mw3-2.jpg"), 
        require("./assets/images/games/cod-mw3-3.jpg")],

        video: require("./assets/videos/games/cod-mw3-trailer.mp4"),
      reseñas: [
        { nombre: "Ramón T.",  estrellas: 4, texto: "Los mapas clásicos remasterizados son un regalazo para los fans." },
        { nombre: "Alicia M.", estrellas: 3, texto: "Buen multijugador pero campaña muy corta para el precio." },
        { nombre: "Ernesto B.",estrellas: 4, texto: "Warzone integrado y modo Zombies muy completos." },
      ],
    },
  ],
  carreras: [
    {
      id: "forza-horizon5", titulo: "Forza Horizon 5", marca: "xbox",
      plataforma: "Xbox Series X/S / PC — Game Pass", precio: 49.99, emoji: "🏎️",
      descripcion: "Mundo abierto en México con 500+ autos, clima dinámico, volcán activo y multijugador perfecto.",
        imagenes: [
        require("./assets/images/games/forza-h5-1.jpg"), 
        require("./assets/images/games/forza-h5-2.jpg"), 
        require("./assets/images/games/forza-h5-3.jpg")],

        video: require("./assets/videos/games/forza-h5-trailer.mp4"),
      reseñas: [
        { nombre: "Teresa L.",  estrellas: 5, texto: "El mejor juego de carreras de mundo abierto. México precioso." },
        { nombre: "Alfredo C.", estrellas: 5, texto: "500+ autos y clima dinámico. Horas infinitas de diversión." },
        { nombre: "Sandra P.",  estrellas: 4, texto: "Perfecto en Game Pass. La variedad de eventos es enorme." },
      ],
    },
    {
      id: "gran-turismo7", titulo: "Gran Turismo 7", marca: "playstation",
      plataforma: "PS5 / PS4 — Exclusivo", precio: 69.99, emoji: "🏎️",
      descripcion: "El simulador de conducción definitivo con 400+ autos, circuitos reales y modo campaña completo.",
        imagenes: [
        require("./assets/images/games/gt7-1.jpg"), 
        require("./assets/images/games/gt7-2.jpg"), 
        require("./assets/images/games/gt7-3.jpg")],

        video: require("./assets/videos/games/gt7-trailer.mp4"),
      reseñas: [
        { nombre: "Marcela F.", estrellas: 5, texto: "El simulador más completo. Los sonidos de motor son perfectos." },
        { nombre: "Javier O.",  estrellas: 4, texto: "Modo campaña muy bien construido. La tienda de autos es cara." },
        { nombre: "Diana H.",   estrellas: 5, texto: "Con volante y PS5 es una experiencia de otro nivel." },
      ],
    },
    {
      id: "mariokart8", titulo: "Mario Kart 8 Deluxe", marca: "nintendo",
      plataforma: "Nintendo Switch — 96 pistas con DLC", precio: 59.99, emoji: "🏎️",
      descripcion: "El juego de carreras más vendido de Switch con 96 pistas, modo batalla y 12 jugadores online.",
        imagenes: [
        require("./assets/images/games/mariokart8-1.jpg"), 
        require("./assets/images/games/mariokart8-2.jpg"), 
        require("./assets/images/games/mariokart8-3.jpg")],

        video: require("./assets/videos/games/mariokart8-trailer.mp4"),
      reseñas: [
        { nombre: "Pilar S.",   estrellas: 5, texto: "El juego de carreras más divertido que existe. Para todas las edades." },
        { nombre: "Julián R.",  estrellas: 5, texto: "96 pistas con el DLC es una barbaridad de contenido." },
        { nombre: "Beatriz N.", estrellas: 4, texto: "Imprescindible en Switch. Local con 4 jugadores es épico." },
      ],
    },
  ],
  aventura: [
    {
      id: "zelda-totk", titulo: "Zelda: Tears of the Kingdom", marca: "nintendo",
      plataforma: "Nintendo Switch — Exclusivo", precio: 59.99, emoji: "🗺️",
      descripcion: "Explora Hyrule y los cielos con poderes de fusión, ultrahand y construcción. Más de 200 horas.",
        imagenes: [
        require("./assets/images/games/zelda-totk-1.jpg"), 
        require("./assets/images/games/zelda-totk-2.jpg"), 
        require("./assets/images/games/zelda-totk-3.jpg")],

        video: require("./assets/videos/games/zelda-totk-trailer.mp4"),
      reseñas: [
        { nombre: "Fernando A.", estrellas: 5, texto: "Obra maestra absoluta. 200+ horas y sigo descubriendo cosas." },
        { nombre: "Claudia G.",  estrellas: 5, texto: "Supera al BotW en todo. La libertad de exploración es infinita." },
        { nombre: "Nicolás V.",  estrellas: 5, texto: "Los poderes de construcción son una revolución en videojuegos." },
      ],
    },
    {
      id: "spiderman2", titulo: "Marvel's Spider-Man 2", marca: "playstation",
      plataforma: "PS5 — Exclusivo", precio: 69.99, emoji: "🗺️",
      descripcion: "Peter Parker y Miles Morales contra Venom en Nueva York expandido con vuelo libre espectacular.",
        imagenes: [
        require("./assets/images/games/spiderman2-1.jpg"), 
        require("./assets/images/games/spiderman2-2.jpg"), 
        require("./assets/images/games/spiderman2-3.jpg")],

        video: require("./assets/videos/games/spiderman2-trailer.mp4"),
      reseñas: [
        { nombre: "Gustavo P.", estrellas: 5, texto: "Volar por Nueva York con las alas es una sensación increíble." },
        { nombre: "Rocío M.",   estrellas: 5, texto: "Venom como nunca antes. La historia supera al primero." },
        { nombre: "Héctor V.",  estrellas: 4, texto: "Corto pero intenso. Cada momento del juego es memorable." },
      ],
    },
    {
      id: "starfield", titulo: "Starfield", marca: "xbox",
      plataforma: "Xbox Series X/S / PC — Game Pass", precio: 69.99, emoji: "🗺️",
      descripcion: "Explora más de 1000 planetas en la primera nueva IP de Bethesda en 25 años. RPG espacial masivo.",
        imagenes: [
        require("./assets/images/games/starfield-1.jpg"), 
        require("./assets/images/games/starfield-2.jpg"), 
        require("./assets/images/games/starfield-3.jpg")],

        video: require("./assets/videos/games/starfield-trailer.mp4"),
      reseñas: [
        { nombre: "Ramón T.",   estrellas: 4, texto: "Bethesda en el espacio. Exploración y crafteo muy adictivos." },
        { nombre: "Alicia M.",  estrellas: 3, texto: "Ambicioso pero las pantallas de carga rompen la inmersión." },
        { nombre: "Ernesto B.", estrellas: 4, texto: "La creación de personaje y las facciones son lo mejor." },
      ],
    },
  ],
};

export const CONSOLAS = {
  nintendo: [
    {
      id: "switch-oled", titulo: "Nintendo Switch OLED", modelo: "HEG-001 · 2023", marca: "nintendo",
      precio: 349.99, emoji: "🎮",
      descripcion: "Pantalla OLED 7\", soporte ajustable, 64 GB internos, dock con puerto LAN y altavoces mejorados.",
      especificaciones: ["Pantalla OLED 7\"", "64 GB internos", "Batería 4.5–9 hrs", "Peso: 420 g"],
        imagenes: [
        require("./assets/images/console/switch-oled-1.jpg"), 
        require("./assets/images/console/switch-oled-2.jpg"), 
        require("./assets/images/console/switch-oled-3.jpg")],

        video: require("./assets/videos/console/switch-oled-trailer.mp4"),
      reseñas: [
        { nombre: "Paula G.",   estrellas: 5, texto: "La pantalla OLED es espectacular. Vale el precio extra." },
        { nombre: "Luis M.",    estrellas: 4, texto: "Muy buena construcción. El altavoz mejorado es notable." },
        { nombre: "Daniela R.", estrellas: 5, texto: "Perfecta para viajes. Joy-Cons muy cómodos." },
      ],
    },
    {
      id: "switch-lite", titulo: "Nintendo Switch Lite", modelo: "HDH-001 · Turquesa", marca: "nintendo",
      precio: 199.99, emoji: "🎮",
      descripcion: "Consola 100% portátil con controles integrados, pantalla LCD de 5.5\" y precio muy accesible.",
      especificaciones: ["Pantalla LCD 5.5\"", "32 GB internos", "Batería 3–7 hrs", "Peso: 277 g"],
        imagenes: [
        require("./assets/images/console/switch-lite-1.jpg"), 
        require("./assets/images/console/switch-lite-2.jpg"), 
        require("./assets/images/console/switch-lite-3.jpg")],

        video: require("./assets/videos/console/switch-lite-trailer.mp4"),
      reseñas: [
        { nombre: "Tomás B.",  estrellas: 4, texto: "Precio accesible para entrar al ecosistema Nintendo." },
        { nombre: "Elena V.",  estrellas: 3, texto: "Sin modo TV es limitante pero el precio lo justifica." },
        { nombre: "Carlos S.", estrellas: 5, texto: "Perfecta de regalo. Liviana y batería dura bien." },
      ],
    },
    {
      id: "switch2", titulo: "Nintendo Switch 2", modelo: "2025 · Nueva generación", marca: "nintendo",
      precio: 449.99, emoji: "🎮",
      descripcion: "Nueva generación Nintendo con Joy-Con magnéticos, pantalla LCD de 8\" y mayor potencia gráfica.",
      especificaciones: ["Pantalla LCD 8\"", "256 GB internos", "Batería 2–6.5 hrs", "Joy-Con magnéticos"],
        imagenes: [
        require("./assets/images/console/switch2-1.jpg"), 
        require("./assets/images/console/switch2-2.jpg"), 
        require("./assets/images/console/switch2-3.jpg")],

        video: require("./assets/videos/console/switch2-trailer.mp4"),
      reseñas: [
        { nombre: "Andres C.",  estrellas: 5, texto: "El salto generacional esperado. Gráficos impresionantes." },
        { nombre: "Melissa T.", estrellas: 5, texto: "Los Joy-Con magnéticos son innovación pura." },
        { nombre: "Raúl F.",    estrellas: 4, texto: "Catálogo de lanzamiento mejorable, pero hardware top." },
      ],
    },
  ],
  playstation: [
    {
      id: "ps5-pro", titulo: "PlayStation 5 Pro", modelo: "CFI-7000 · Sin lector · 2TB", marca: "playstation",
      precio: 699.99, emoji: "🕹️",
      descripcion: "La PS5 más potente: GPU mejorada 45%, ray tracing avanzado, PSSR upscaling y 2 TB SSD.",
      especificaciones: ["GPU: 67 TFLOPS", "SSD: 2 TB", "Ray Tracing avanzado", "Resolución: 8K"],
        imagenes: [
        require("./assets/images/console/ps5-pro-1.jpg"), 
        require("./assets/images/console/ps5-pro-2.jpg"), 
        require("./assets/images/console/ps5-pro-3.jpg")],

        video: require("./assets/videos/console/ps5-pro-trailer.mp4"),
      reseñas: [
        { nombre: "Gustavo P.", estrellas: 5, texto: "El hardware más potente de la generación. 60fps garantizados." },
        { nombre: "Rocío M.",   estrellas: 4, texto: "Caro pero justificado. Los juegos Pro se ven increíbles." },
        { nombre: "Héctor V.",  estrellas: 5, texto: "DualSense con hápticos de siguiente nivel." },
      ],
    },
    {
      id: "ps5-slim", titulo: "PlayStation 5 Slim", modelo: "CFI-2000 · 1TB · Disc Edition", marca: "playstation",
      precio: 449.99, emoji: "🕹️",
      descripcion: "PS5 más compacta y silenciosa con 1 TB SSD, diseño renovado y lector de disco incluido.",
      especificaciones: ["CPU: Zen 2 3.5GHz", "SSD: 1 TB", "Resolución: 4K/8K", "Peso: 3.2 kg"],
        imagenes: [
        require("./assets/images/console/ps5-slim-1.jpg"), 
        require("./assets/images/console/ps5-slim-2.jpg"), 
        require("./assets/images/console/ps5-slim-3.jpg")],

        video: require("./assets/videos/console/ps5-slim-trailer.mp4"),
      reseñas: [
        { nombre: "Pilar S.",   estrellas: 5, texto: "Más silenciosa que el original. Tiempos de carga cero." },
        { nombre: "Julián R.",  estrellas: 4, texto: "Excelente entrada a la generación. DualSense es único." },
        { nombre: "Beatriz N.", estrellas: 5, texto: "El mejor momento para comprar PS5. Catálogo enorme." },
      ],
    },
    {
      id: "psvr2", titulo: "PlayStation VR2", modelo: "CFI-ZVR1 · Realidad Virtual", marca: "playstation",
      precio: 549.99, emoji: "🕹️",
      descripcion: "El mejor VR para consola: 4K HDR por ojo, eye tracking, hápticos en mandos y 110° de FOV.",
      especificaciones: ["4K HDR por ojo", "Eye Tracking: Sí", "Refresco: 90/120Hz", "FOV: 110°"],
        imagenes: [
        require("./assets/images/console/psvr2-1.jpg"), 
        require("./assets/images/console/psvr2-2.jpg"), 
        require("./assets/images/console/psvr2-3.jpg")],

        video: require("./assets/videos/console/psvr2-trailer.mp4"),
      reseñas: [
        { nombre: "Fernando A.", estrellas: 4, texto: "El mejor VR para consolas. Horizon VR es increíble." },
        { nombre: "Claudia G.",  estrellas: 3, texto: "Requiere PS5 y es caro, pero la experiencia es única." },
        { nombre: "Nicolás V.",  estrellas: 5, texto: "El eye tracking cambia todo. Sin mareos gracias al foveal rendering." },
      ],
    },
  ],
  xbox: [
    {
      id: "xbox-series-x", titulo: "Xbox Series X", modelo: "RRT-00001 · 1TB · Negro", marca: "xbox",
      precio: 499.99, emoji: "🕹️",
      descripcion: "La Xbox más potente: 12 TFLOPS, 4K/120fps, Quick Resume, SSD de alta velocidad y Game Pass.",
      especificaciones: ["GPU: 12 TFLOPS", "SSD: 1 TB NVMe", "4K 120fps", "Quick Resume"],
        imagenes: [
        require("./assets/images/console/xbox-series-x-1.jpg"), 
        require("./assets/images/console/xbox-series-x-2.jpg"), 
        require("./assets/images/console/xbox-series-x-3.jpg")],

        video: require("./assets/videos/console/xbox-series-x-trailer.mp4"),
      reseñas: [
        { nombre: "Ramón T.",   estrellas: 5, texto: "El Game Pass lo hace la mejor inversión del mercado." },
        { nombre: "Alicia M.",  estrellas: 4, texto: "Muy silenciosa y poderosa. El control sigue siendo el mejor." },
        { nombre: "Ernesto B.", estrellas: 5, texto: "Quick Resume es mágico. Paso entre 5 juegos sin esperar." },
      ],
    },
    {
      id: "xbox-series-s", titulo: "Xbox Series S", modelo: "RRS-00001 · 512GB · Blanco", marca: "xbox",
      precio: 299.99, emoji: "🕹️",
      descripcion: "La Xbox más accesible: 4 TFLOPS, 1440p/120fps, 100% digital y perfecta para Game Pass.",
      especificaciones: ["GPU: 4 TFLOPS", "SSD: 512 GB", "1440p 120fps", "Solo digital"],
        imagenes: [
        require("./assets/images/console/xbox-series-s-1.jpg"), 
        require("./assets/images/console/xbox-series-s-2.jpg"), 
        require("./assets/images/console/xbox-series-s-3.jpg")],

        video: require("./assets/videos/console/xbox-series-s-trailer.mp4"),
      reseñas: [
        { nombre: "Teresa L.",  estrellas: 4, texto: "Para Game Pass digital es perfecta. Precio imbatible." },
        { nombre: "Alfredo C.", estrellas: 4, texto: "Sin disco es limitante pero el rendimiento es sólido." },
        { nombre: "Sandra P.",  estrellas: 5, texto: "Mi primera Xbox. El ecosistema con PC es genial." },
      ],
    },
    {
  id: "xbox-360", titulo: "Xbox 360", modelo: "Xbox 360 · Edición Clásica", marca: "xbox",
  precio: 149.99, emoji: "🕹️",
  descripcion: "La consola clásica de Microsoft que definió una generación. Librería enorme de juegos y el nacimiento de Xbox Live.",
  especificaciones: ["CPU: 3.2 GHz Triple-Core", "GPU: 500 MHz ATI", "HDD: 250 GB", "Xbox Live integrado"],
    imagenes: [
      require("./assets/images/console/xbox-360-1.jpg"),
      require("./assets/images/console/xbox-360-2.jpg"),
      require("./assets/images/console/xbox-360-3.jpg"),
    ],

    video: require("./assets/videos/console/xbox-360-trailer.mp4"),
  reseñas: [
    { nombre: "Marcela F.", estrellas: 5, texto: "Una consola icónica. Los juegos de esa generación son legendarios." },
    { nombre: "Javier O.",  estrellas: 4, texto: "Clásico absoluto. Xbox Live cambió el multijugador para siempre." },
    { nombre: "Diana H.",   estrellas: 5, texto: "La conseguí para revivir los viejos tiempos y no me arrepiento." },
  ],
},,
  ],
};
