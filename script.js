console.log("♡ SCRIPT.JS FUNCIONANDO ♡");
/* =========================================================
   ♡ MI FORO PERSONAL — SCRIPT.JS ♡
   ========================================================= */

/* ---------------------------------------------------------
   🎵 YOUTUBE
   Pegá acá el link de la canción/video que quieras mostrar.
   --------------------------------------------------------- */

const YT_URL = "https://youtu.be/qRAJowgHqxA";


/* =========================================================
   📚 CONTENIDO
   ========================================================= */

const DATA = [


  /* ===================== ANIME ===================== */

  {
    title: "Shingeki no Kyojin",
    category: ["anime"],
    type: "Anime",
    genres: ["acción", "drama", "misterio"],
    rating: 10,
    emoji: "🧱",
    image: "",
    description:
      "Un anime que empieza con gigantes comiéndose gente y termina haciendo que una persona necesite sentarse en silencio durante veinte minutos para procesar todo lo que acaba de pasar.",
    characters: [
      ["Eren Yeager", "🪽"],
      ["Mikasa Ackerman", "⚔️"],
      ["Armin Arlert", "🌊"],
      ["Levi Ackerman", "🧹"]
    ],
    guide: [
      "Las murallas protegen a la humanidad.",
      "Los titanes son muchísimo más importantes de lo que parecen.",
      "La historia se va poniendo cada vez más complicada.",
      "Prepararse emocionalmente."
    ],
    curiosities: [
      "La serie está llena de pistas que cobran sentido muchísimo después.",
      "Los personajes tienen historias bastante profundas."
    ]
  },

  {
    title: "Assassination Classroom",
    category: ["anime"],
    type: "Anime",
    genres: ["comedia", "acción", "escolar"],
    rating: 9.5,
    emoji: "🐙",
    image: "",
    description:
      "Una clase de estudiantes tiene que asesinar a su profesor antes de que destruya la Tierra. Sí, suena absurdo. Sí, funciona increíblemente bien.",
    characters: [
      ["Koro-sensei", "🐙"],
      ["Nagisa Shiota", "🔪"],
      ["Karma Akabane", "😈"],
      ["Kaede Kayano", "🍰"]
    ],
    guide: [
      "Entrar a la clase 3-E.",
      "Aprender.",
      "Intentar matar a Koro-sensei.",
      "Terminar queriéndolo demasiado."
    ],
    curiosities: [
      "Koro-sensei tiene una velocidad de Mach 20.",
      "La serie mezcla muchísimo humor con momentos bastante emocionales."
    ]
  },

  {
    title: "JoJo's Bizarre Adventure",
    category: ["anime"],
    type: "Anime",
    genres: ["acción", "aventura", "comedia"],
    rating: 9.5,
    emoji: "⭐",
    image: "",
    description:
      "Hombres musculosos, poses imposibles, poderes rarísimos y frases que se te quedan pegadas en la cabeza. Es literalmente JoJo.",
    characters: [
      ["Jonathan Joestar", "💪"],
      ["Joseph Joestar", "🥊"],
      ["Jotaro Kujo", "⭐"],
      ["Dio Brando", "🧛"]
    ],
    guide: [
      "Cada parte tiene protagonistas diferentes.",
      "Los Stands aparecen más adelante.",
      "Las poses son obligatorias espiritualmente."
    ],
    curiosities: [
      "La serie está inspirada en muchísimas referencias musicales y culturales.",
      "Cada parte tiene una identidad visual bastante distinta."
    ]
  },

  {
    title: "Kusuriya no Hitorigoto",
    category: ["anime", "libros"],
    type: "Anime / Novela",
    genres: ["misterio", "histórico", "drama"],
    rating: 10,
    emoji: "🌿",
    image: "",
    description:
      "Maomao solo quería vivir tranquila estudiando venenos y medicamentos, pero terminó resolviendo misterios dentro del palacio imperial. Una reina del chisme científico.",
    characters: [
      ["Maomao", "🌿"],
      ["Jinshi", "💜"],
      ["Gyokuyou", "🌸"]
    ],
    guide: [
      "Seguir las pistas.",
      "No confiar en las apariencias.",
      "Observar a Maomao resolverlo todo.",
      "Disfrutar del drama del palacio."
    ],
    curiosities: [
      "Maomao tiene una obsesión bastante particular con los venenos.",
      "La historia combina medicina, misterio y política de palacio."
    ]
  },

  {
    title: "Jibaku Shounen Hanako-kun",
    category: ["anime"],
    type: "Anime",
    genres: ["sobrenatural", "comedia", "romance"],
    rating: 9.5,
    emoji: "🚽",
    image: "",
    description:
      "Una chica invoca a Hanako-san del baño y termina metida en un montón de problemas sobrenaturales. Visualmente precioso y emocionalmente sospechoso.",
    characters: [
      ["Hanako-kun", "👻"],
      ["Nene Yashiro", "🌸"],
      ["Kou Minamoto", "⚡"]
    ],
    guide: [
      "Conocer los siete misterios.",
      "No meterse donde no corresponde.",
      "Ignorar ese consejo.",
      "Descubrir los secretos de Hanako."
    ],
    curiosities: [
      "El manga tiene un estilo artístico muy reconocible.",
      "Los misterios de la escuela están conectados entre sí."
    ]
  },


  /* ===================== SERIES ===================== */

  {
    title: "The Owl House",
    category: ["series"],
    type: "Serie",
    genres: ["fantasía", "aventura", "magia"],
    rating: 10,
    emoji: "🦉",
    image: "",
    description:
      "Luz termina accidentalmente en las Islas Hirvientes y descubre un mundo lleno de magia, criaturas rarísimas y personas que terminan siendo muchísimo más importantes para ella de lo que esperaba.",
    characters: [
      ["Luz Noceda", "✨"],
      ["Amity Blight", "💜"],
      ["Eda Clawthorne", "🦉"],
      ["King", "👑"]
    ],
    guide: [
      "Seguir a Luz hasta las Islas Hirvientes.",
      "Aprender magia.",
      "Conocer a Eda.",
      "Conocer a Amity.",
      "Enamorarse del mundo entero."
    ],
    curiosities: [
      "La serie combina fantasía con temas de identidad y crecimiento personal.",
      "El sistema de magia es bastante original."
    ]
  },

  {
    title: "Gravity Falls",
    category: ["series"],
    type: "Serie",
    genres: ["misterio", "comedia", "aventura"],
    rating: 10,
    emoji: "🌲",
    image: "",
    description:
      "Dos hermanos pasan el verano en Gravity Falls, un pueblo donde absolutamente nada parece normal. Hay monstruos, misterios, códigos secretos y un triángulo que probablemente no debería ser confiable.",
    characters: [
      ["Dipper Pines", "🔍"],
      ["Mabel Pines", "🌈"],
      ["Stan Pines", "💵"],
      ["Bill Cipher", "🔺"]
    ],
    guide: [
      "Buscar los misterios.",
      "Prestar atención a los códigos.",
      "Desconfiar de los triángulos.",
      "Disfrutar de Mabel."
    ],
    curiosities: [
      "La serie tiene mensajes y códigos escondidos.",
      "Muchos detalles pequeños tienen importancia después."
    ]
  },

  {
    title: "Steven Universe",
    category: ["series"],
    type: "Serie",
    genres: ["fantasía", "aventura", "música"],
    rating: 9.5,
    emoji: "⭐",
    image: "",
    description:
      "Un chico mitad humano y mitad gema intenta entender sus poderes mientras vive con las Crystal Gems. Empieza como una serie súper colorida y termina hablando de cosas bastante profundas.",
    characters: [
      ["Steven Universe", "⭐"],
      ["Garnet", "💎"],
      ["Pearl", "🤍"],
      ["Amethyst", "💜"]
    ],
    guide: [
      "Conocer a las Crystal Gems.",
      "Aprender sobre las gemas.",
      "Escuchar las canciones.",
      "Prepararse para los sentimientos."
    ],
    curiosities: [
      "La música es una parte muy importante de la historia.",
      "Las fusiones tienen un papel importante en el mundo de la serie."
    ]
  },

  {
    title: "Hora de Aventura",
    category: ["series"],
    type: "Serie",
    genres: ["aventura", "fantasía", "comedia"],
    rating: 9.5,
    emoji: "🗡️",
    image: "",
    description:
      "Finn y Jake viven aventuras en Ooo. Parece una serie para pasar el rato hasta que de repente te destruye emocionalmente con el pasado de algún personaje.",
    characters: [
      ["Finn", "🗡️"],
      ["Jake", "🐶"],
      ["Princesa Bubblegum", "🍬"],
      ["Marceline", "🦇"]
    ],
    guide: [
      "Aventurarse por Ooo.",
      "Conocer personajes rarísimos.",
      "No confiar en que todo será feliz.",
      "Escuchar a Marceline."
    ],
    curiosities: [
      "El mundo de Ooo tiene una historia mucho más grande de lo que parece."
    ]
  },

  {
    title: "Avatar: La Leyenda de Aang",
    category: ["series"],
    type: "Serie animada",
    genres: ["aventura", "fantasía", "acción"],
    rating: 10,
    emoji: "🌪️",
    image: "",
    description:
      "Aang es el último maestro aire y también el Avatar, la persona encargada de mantener el equilibrio entre las cuatro naciones. Básicamente: despertar después de cien años y descubrir que tenés que salvar el mundo. Tranqui.",
    characters: [
      ["Aang", "🌪️"],
      ["Katara", "💧"],
      ["Sokka", "🪃"],
      ["Zuko", "🔥"],
      ["Toph", "🪨"]
    ],
    guide: [
      "Aprender los cuatro elementos.",
      "Viajar con el Equipo Avatar.",
      "Aprender de cada maestro.",
      "Entender la historia de Zuko.",
      "Prepararse para uno de los mejores finales."
    ],
    curiosities: [
      "Cada nación está inspirada en diferentes culturas y tradiciones asiáticas.",
      "El sistema de control de elementos tiene reglas propias.",
      "La evolución de varios personajes es una parte central de la historia."
    ]
  },

  {
    title: "Avatar: La Leyenda de Korra",
    category: ["series"],
    type: "Serie animada",
    genres: ["acción", "fantasía", "aventura"],
    rating: 9,
    emoji: "🌊",
    image: "",
    description:
      "Korra es la siguiente Avatar después de Aang. Su mundo es más moderno, más complicado y lleno de problemas políticos, espirituales y sociales. Ser el Avatar definitivamente no viene con vacaciones.",
    characters: [
      ["Korra", "🌊"],
      ["Asami Sato", "⚙️"],
      ["Mako", "🔥"],
      ["Bolin", "🪨"],
      ["Tenzin", "🌪️"]
    ],
    guide: [
      "Conocer Ciudad República.",
      "Aprender sobre la nueva era.",
      "Seguir el desarrollo de Korra.",
      "Conocer al Equipo Avatar."
    ],
    curiosities: [
      "La tecnología avanzó muchísimo desde la época de Aang.",
      "La serie explora una etapa diferente del mundo Avatar."
    ]
  },


  /* ===================== LIBROS ===================== */

  {
    title: "Project Hail Mary",
    category: ["libros"],
    type: "Novela",
    genres: ["ciencia ficción", "aventura"],
    rating: 9.5,
    emoji: "🚀",
    image: "",
    description:
      "Un científico despierta solo en una nave espacial sin recordar quién es ni por qué está ahí. A partir de ahí empieza una aventura científica que mezcla misterio, supervivencia y una amistad inesperada.",
    characters: [
      ["Ryland Grace", "🚀"],
      ["Rocky", "🕷️"]
    ],
    guide: [
      "Resolver el misterio de la misión.",
      "Aprender ciencia.",
      "Conocer a Rocky.",
      "Intentar no llorar."
    ],
    curiosities: [
      "La historia utiliza muchos conceptos científicos reales."
    ]
  },


  /* ===================== MÚSICA ===================== */

  {
    title: "Olivia Rodrigo",
    category: ["música"],
    type: "Artista",
    genres: ["pop", "pop rock"],
    rating: 9.5,
    emoji: "💜",
    image: "",
    description:
      "Música para cuando querés mirar por la ventana dramáticamente aunque estés literalmente yendo a comprar pan. Olivia tiene una habilidad especial para convertir sentimientos en canciones pegadizas.",
    characters: [],
    guide: [
      "Elegir una canción.",
      "Ponerse auriculares.",
      "Mirar al vacío.",
      "Sentir todo."
    ],
    curiosities: [
      "Su música combina influencias pop y rock."
    ]
  },

  {
    title: "PinkPantheress",
    category: ["música"],
    type: "Artista",
    genres: ["pop", "UK garage", "drum and bass"],
    rating: 9.5,
    emoji: "🎧",
    image: "",
    description:
      "Canciones cortitas, nostálgicas y pegadizas que parecen hechas para escuchar mientras navegás por internet a las tres de la mañana.",
    characters: [],
    guide: [
      "Ponerse auriculares.",
      "Subir un poquito el volumen.",
      "Dejar que la canción haga lo suyo."
    ],
    curiosities: [
      "Su música utiliza influencias de estilos electrónicos británicos."
    ]
  },


  /* ===================== YOUTUBE ===================== */

  {
    title: "ElRubius",
    category: ["youtube"],
    type: "YouTuber",
    genres: ["gaming", "entretenimiento"],
    rating: 9,
    emoji: "🎮",
    image: "",
    description:
      "Una figura enorme de la historia de YouTube en español. Gaming, humor, momentos absurdos y una cantidad considerable de videos que forman parte de la memoria colectiva de internet.",
    characters: [],
    guide: [
      "Buscar algún video viejo.",
      "Recordar la era dorada de YouTube.",
      "Terminar viendo diez videos más."
    ],
    curiosities: [
      "Fue una de las figuras más importantes del crecimiento del gaming en YouTube hispanohablante."
    ]
  },

  {
    title: "Karmaland",
    category: ["youtube"],
    type: "Serie de Minecraft",
    genres: ["gaming", "Minecraft", "humor"],
    rating: 10,
    emoji: "⛏️",
    image: "",
    description:
      "Un grupo de creadores jugando Minecraft juntos y tomando decisiones que probablemente no deberían tomar. El resultado: caos, construcciones, bromas y momentos inolvidables.",
    characters: [],
    guide: [
      "Entrar a Minecraft.",
      "Construir una casa.",
      "Destruir accidentalmente algo.",
      "Culpar a otro integrante."
    ],
    curiosities: [
      "La serie se convirtió en uno de los proyectos grupales más recordados del Minecraft hispano."
    ]
  },


  /* ===================== JUEGOS ===================== */

  {
    title: "Minecraft",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["sandbox", "supervivencia", "aventura"],
    rating: 10,
    emoji: "⛏️",
    image: "",
    description:
      "Un juego donde podés construir una mansión, derrotar dragones, cultivar trigo o pasar seis horas haciendo una casa que después ni usás.",
    characters: [
      ["Steve", "⛏️"],
      ["Alex", "🌿"],
      ["Creeper", "💚"]
    ],
    guide: [
      "Conseguir madera.",
      "Fabricar herramientas.",
      "Conseguir comida.",
      "Construir una casa.",
      "No mirar fijamente a un Enderman."
    ],
    curiosities: [
      "El mundo se genera de manera procedural.",
      "Existen miles de formas diferentes de jugar."
    ]
  },

  {
    title: "Terraria",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["sandbox", "aventura", "RPG"],
    rating: 9.5,
    emoji: "🌳",
    image: "",
    description:
      "Parece Minecraft en 2D hasta que descubrís que tiene una cantidad absurda de jefes, objetos, armas y cosas que quieren matarte.",
    characters: [
      ["Guía", "🧙"],
      ["Mercader", "💰"]
    ],
    guide: [
      "Explorar.",
      "Conseguir recursos.",
      "Construir una base.",
      "Derrotar jefes.",
      "Conseguir más cosas."
    ],
    curiosities: [
      "Tiene una enorme cantidad de contenido y objetos."
    ]
  },

  {
    title: "Stardew Valley",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["simulación", "granja", "RPG"],
    rating: 10,
    emoji: "🌻",
    image: "",
    description:
      "Te mudás al campo para escapar de una vida aburrida y terminás trabajando más que antes. Pero al menos ahora tenés cultivos, gallinas y personajes adorables.",
    characters: [
      ["Abigail", "💜"],
      ["Sebastian", "🖤"],
      ["Leah", "🌿"],
      ["Sam", "🎸"]
    ],
    guide: [
      "Arreglar la granja.",
      "Cultivar.",
      "Conocer a los vecinos.",
      "Explorar las minas.",
      "Disfrutar de la música."
    ],
    curiosities: [
      "Fue desarrollado principalmente por una sola persona.",
      "La comunidad tiene muchísima importancia."
    ]
  },

  {
    title: "Slime Rancher",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["aventura", "simulación", "cute"],
    rating: 9.5,
    emoji: "🩷",
    image: "",
    description:
      "Criaturitas redondas y adorables que producen recursos cuando las alimentás. Básicamente una granja, pero llena de slimes que rebotan por todos lados.",
    characters: [
      ["Beatrix LeBeau", "🌸"]
    ],
    guide: [
      "Encontrar slimes.",
      "Alimentarlos.",
      "Construir corrales.",
      "Explorar el mundo."
    ],
    curiosities: [
      "Los slimes tienen diferentes comportamientos y dietas."
    ]
  },

  {
    title: "Doki Doki Literature Club!",
    category: ["juegos"],
    type: "Novela visual",
    genres: ["novela visual", "terror psicológico"],
    rating: 9,
    emoji: "🌸",
    image: "",
    description:
      "Parece el típico juego de club de literatura súper adorable... hasta que empezás a notar que algo no está del todo bien. MUY importante: no juzgar el juego solamente por su portada.",
    characters: [
      ["Monika", "💚"],
      ["Sayori", "💙"],
      ["Yuri", "💜"],
      ["Natsuki", "🩷"]
    ],
    guide: [
      "Entrar al club.",
      "Escribir poemas.",
      "Conocer a las chicas.",
      "Prestar atención a los detalles.",
      "No asumir que todo es lo que parece."
    ],
    curiosities: [
      "El juego utiliza elementos de terror psicológico.",
      "Rompe varias convenciones típicas de las novelas visuales."
    ]
  },

  {
    title: "Mystic Messenger",
    category: ["juegos"],
    type: "Novela visual",
    genres: ["romance", "misterio", "chat"],
    rating: 9.5,
    emoji: "📱",
    image: "",
    description:
      "Un juego que básicamente convierte tu teléfono en una novela visual. Mensajes, llamadas, chats y personajes que parecen tener demasiado tiempo libre para escribirte.",
    characters: [
      ["707", "🍭"],
      ["Jumin Han", "🐱"],
      ["Zen", "🎭"],
      ["Yoosung", "🎮"],
      ["Jaehee Kang", "☕"]
    ],
    guide: [
      "Entrar a la aplicación.",
      "Conocer la RFA.",
      "Participar en los chats.",
      "Tomar decisiones.",
      "Descubrir los secretos."
    ],
    curiosities: [
      "El juego utiliza conversaciones en tiempo real como parte de su sistema."
    ]
  },

  {
    title: "Corazón de Melón",
    category: ["juegos"],
    type: "Novela visual",
    genres: ["romance", "historia", "aventura"],
    rating: 9,
    emoji: "💗",
    image: "",
    description:
      "El clásico de las decisiones, los chicos lindos y los diálogos que probablemente te hicieron gastar PA de formas cuestionables. Nostalgia pura.",
    characters: [
      ["Sucrette", "🌸"],
      ["Castiel", "🎸"],
      ["Nathaniel", "📚"],
      ["Lysandro", "🎤"],
      ["Kentin", "🍪"]
    ],
    guide: [
      "Llegar al instituto.",
      "Conocer a los personajes.",
      "Tomar decisiones.",
      "Cuidar los PA.",
      "Intentar conseguir la ruta que querés."
    ],
    curiosities: [
      "Es una novela visual centrada en decisiones y relaciones entre personajes."
    ]
  },

  {
    title: "Undertale",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["RPG", "aventura", "indie"],
    rating: 10,
    emoji: "❤️",
    image: "",
    description:
      "Un RPG donde podés pelear, hablar o hacerte amigo de casi todo. Y sí, tus decisiones importan muchísimo más de lo que parece.",
    characters: [
      ["Frisk", "❤️"],
      ["Sans", "💀"],
      ["Papyrus", "🦴"],
      ["Toriel", "🐐"]
    ],
    guide: [
      "Caer al subsuelo.",
      "Conocer a los monstruos.",
      "Elegir cómo actuar.",
      "Recordar que las decisiones tienen consecuencias."
    ],
    curiosities: [
      "Tiene varias rutas dependiendo de las acciones del jugador."
    ]
  },

  {
    title: "Subnautica",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["supervivencia", "aventura", "exploración"],
    rating: 9.5,
    emoji: "🌊",
    image: "",
    description:
      "Un juego precioso sobre explorar un planeta oceánico... hasta que bajás demasiado y escuchás un ruido que claramente significa 'volvete a tu cápsula'.",
    characters: [
      ["Ryley Robinson", "🚀"]
    ],
    guide: [
      "Conseguir recursos.",
      "Construir herramientas.",
      "Explorar.",
      "Descubrir la historia.",
      "No entrar en pánico."
    ],
    curiosities: [
      "El océano está dividido en diferentes biomas con criaturas y recursos propios."
    ]
  },

  {
    title: "Phasmophobia",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["terror", "cooperativo"],
    rating: 9,
    emoji: "👻",
    image: "",
    description:
      "Entrar a una casa embrujada con tus amigos, investigar fantasmas y fingir que no estás muerto de miedo. El verdadero enemigo es el micrófono abierto.",
    characters: [],
    guide: [
      "Entrar a la casa.",
      "Buscar evidencia.",
      "Identificar el fantasma.",
      "Salir vivo."
    ],
    curiosities: [
      "El juego utiliza reconocimiento de voz para algunas interacciones."
    ]
  },

  {
    title: "Little Nightmares",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["terror", "aventura", "puzzle"],
    rating: 9.5,
    emoji: "🟡",
    image: "",
    description:
      "Una pequeña niña en un mundo enorme, oscuro y bastante desagradable. Visualmente hermoso y con una atmósfera que te hace querer abrazar una lámpara.",
    characters: [
      ["Six", "🟡"]
    ],
    guide: [
      "Explorar.",
      "Resolver puzzles.",
      "Esconderse.",
      "Sobrevivir."
    ],
    curiosities: [
      "El juego cuenta gran parte de su historia visualmente."
    ]
  },

  {
    title: "The Sims",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["simulación", "vida"],
    rating: 9.5,
    emoji: "💚",
    image: "",
    description:
      "Crear una familia y construir una casa perfecta para después hacer exactamente lo contrario de lo que harías en la vida real.",
    characters: [],
    guide: [
      "Crear un Sim.",
      "Construir una casa.",
      "Conseguir trabajo.",
      "Hacer amigos.",
      "Caos opcional."
    ],
    curiosities: [
      "La serie permite simular diferentes aspectos de la vida cotidiana."
    ]
  },

  {
    title: "Resident Evil",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["terror", "supervivencia", "acción"],
    rating: 9,
    emoji: "🧟",
    image: "",
    description:
      "Zombis, criaturas extrañas, mansiones sospechosas y protagonistas que aparentemente tienen muchísimo trabajo pendiente.",
    characters: [
      ["Leon Kennedy", "🔫"],
      ["Jill Valentine", "🔵"],
      ["Chris Redfield", "💪"]
    ],
    guide: [
      "Explorar.",
      "Resolver puzzles.",
      "Administrar recursos.",
      "Sobrevivir."
    ],
    curiosities: [
      "La saga pasó por diferentes estilos entre sus entregas."
    ]
  },

  {
    title: "Animal Crossing",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["simulación", "social", "cute"],
    rating: 9.5,
    emoji: "🍃",
    image: "",
    description:
      "Una isla llena de animalitos adorables donde podés pescar, decorar, plantar flores y endeudarte con Tom Nook. La vida tranquila tiene intereses.",
    characters: [
      ["Canela", "🐶"],
      ["Tom Nook", "🦝"],
      ["Totakeke", "🎸"]
    ],
    guide: [
      "Llegar a la isla.",
      "Recolectar materiales.",
      "Decorar.",
      "Conocer vecinos.",
      "Pagar la hipoteca."
    ],
    curiosities: [
      "El juego funciona con ciclos de tiempo reales."
    ]
  },

  {
    title: "Portal 2",
    category: ["juegos"],
    type: "Videojuego",
    genres: ["puzzles", "ciencia ficción", "comedia"],
    rating: 10,
    emoji: "🔵",
    image: "",
    description:
      "Resolver puzzles usando portales mientras una inteligencia artificial sarcástica te explica por qué probablemente todo es culpa tuya.",
    characters: [
      ["Chell", "🔵"],
      ["GLaDOS", "🤖"],
      ["Wheatley", "⚪"]
    ],
    guide: [
      "Crear portales.",
      "Pensar.",
      "Caer.",
      "Intentarlo de nuevo.",
      "Confiar en absolutamente nadie."
    ],
    curiosities: [
      "El diseño de puzzles es uno de los elementos más destacados del juego."
    ]
  },


  /* ===================== CREEPYPASTAS ===================== */

  {
    title: "Jeff the Killer",
    category: ["creepypastas"],
    type: "Creepypasta",
    genres: ["terror", "internet"],
    rating: 8,
    emoji: "👁️",
    image: "",
    description:
      "Uno de los personajes más reconocibles de la cultura creepypasta de internet. Parte del imaginario clásico de historias de terror que circularon durante años.",
    characters: [
      ["Jeff", "👁️"]
    ],
    guide: [
      "Conocer el origen de la historia.",
      "Explorar cómo se volvió popular.",
      "Recordar que es ficción."
    ],
    curiosities: [
      "El personaje se convirtió en un meme y símbolo de la cultura creepypasta."
    ]
  },

  {
    title: "Nina the Killer",
    category: ["creepypastas"],
    type: "Creepypasta",
    genres: ["terror", "internet"],
    rating: 7.5,
    emoji: "🖤",
    image: "",
    description:
      "Personaje creado dentro de la comunidad creepypasta y relacionado con Jeff the Killer. Otro pedacito de la enorme mitología creada por internet.",
    characters: [
      ["Nina", "🖤"]
    ],
    guide: [
      "Conocer la historia.",
      "Explorar su relación con otros personajes.",
      "Recordar que forma parte de ficción creada por fans."
    ],
    curiosities: [
      "El personaje surgió dentro de la cultura fan de las creepypastas."
    ]
  },

  {
    title: "Jane the Killer",
    category: ["creepypastas"],
    type: "Creepypasta",
    genres: ["terror", "internet"],
    rating: 8,
    emoji: "🌙",
    image: "",
    description:
      "Otro personaje muy conocido dentro del universo de creepypastas relacionadas con Jeff. Internet básicamente decidió construir todo un multiverso de historias.",
    characters: [
      ["Jane", "🌙"]
    ],
    guide: [
      "Conocer las diferentes versiones de su historia.",
      "Explorar el fandom.",
      "Recordar que existen múltiples interpretaciones."
    ],
    curiosities: [
      "No existe una única continuidad oficial para muchos personajes creepypasta."
    ]
  },


  /* ===================== INTERNET VIEJO ===================== */

  {
    title: "MSN Messenger",
    category: ["internet"],
    type: "Internet viejo",
    genres: ["chat", "nostalgia"],
    rating: 10,
    emoji: "💬",
    image: "",
    description:
      "Antes de que todo fuera una app que hace absolutamente todo, existía MSN. Estados personalizados, zumbidos y conversaciones que podían durar horas.",
    characters: [],
    guide: [
      "Elegir un nick ridículamente largo.",
      "Poner una canción en el estado.",
      "Mandar un zumbido.",
      "Esperar que respondan."
    ],
    curiosities: [
      "Fue uno de los servicios de mensajería más populares de su época."
    ]
  },

  {
    title: "Fotolog",
    category: ["internet"],
    type: "Internet viejo",
    genres: ["red social", "fotografía"],
    rating: 8.5,
    emoji: "📸",
    image: "",
    description:
      "Una época en la que subir una foto y conseguir comentarios era básicamente tener una red social completa.",
    characters: [],
    guide: [
      "Subir una foto.",
      "Escribir una descripción.",
      "Esperar comentarios."
    ],
    curiosities: [
      "Fue muy popular en varios países de Latinoamérica."
    ]
  },

  {
    title: "Tumblr",
    category: ["internet"],
    type: "Red social",
    genres: ["blogs", "fandom", "arte"],
    rating: 9.5,
    emoji: "💙",
    image: "",
    description:
      "El lugar donde podías encontrar fanarts, memes, teorías, edits y una cantidad impresionante de posts que probablemente nadie entendería fuera de Tumblr.",
    characters: [],
    guide: [
      "Crear un blog.",
      "Rebloguear cosas.",
      "Encontrar un fandom.",
      "No volver a salir."
    ],
    curiosities: [
      "Tuvo una influencia enorme en las comunidades de fandom online."
    ]
  },

  {
    title: "Club Penguin",
    category: ["internet", "juegos"],
    type: "Juego online",
    genres: ["social", "multijugador", "nostalgia"],
    rating: 10,
    emoji: "🐧",
    image: "",
    description:
      "Pingüinos, fiestas, minijuegos y una cantidad absurda de tiempo gastado decorando iglús. Una reliquia preciosa de internet.",
    characters: [
      ["Penguin", "🐧"]
    ],
    guide: [
      "Crear un pingüino.",
      "Conseguir monedas.",
      "Decorar el iglú.",
      "Jugar minijuegos."
    ],
    curiosities: [
      "Fue uno de los mundos virtuales infantiles más populares de internet."
    ]
  },

  {
    title: "Creepypastas",
    category: ["internet", "creepypastas"],
    type: "Cultura de internet",
    genres: ["terror", "historias"],
    rating: 9,
    emoji: "👻",
    image: "",
    description:
      "Historias de terror creadas y compartidas por usuarios de internet. Algunas eran buenísimas, otras eran... bueno, claramente escritas a las tres de la mañana.",
    characters: [],
    guide: [
      "Leer historias.",
      "Descubrir personajes.",
      "Explorar el fandom.",
      "No leerlas antes de dormir."
    ],
    curiosities: [
      "La palabra viene de 'copypasta', contenido copiado y pegado por internet."
    ]
  },

  {
    title: "YouTube 2012",
    category: ["internet", "youtube"],
    type: "Internet viejo",
    genres: ["YouTube", "nostalgia"],
    rating: 10,
    emoji: "▶️",
    image: "",
    description:
      "Miniaturas saturadísimas, intros larguísimas, Minecraft, gameplays, creepypastas y videos que hoy parecen pertenecer a otra dimensión.",
    characters: [],
    guide: [
      "Buscar un video antiguo.",
      "Escuchar una intro de 30 segundos.",
      "Aceptar la nostalgia."
    ],
    curiosities: [
      "La estética y cultura de YouTube cambiaron muchísimo durante los primeros años de la plataforma."
    ]
  },

  {
    title: "AMVs",
    category: ["internet", "youtube"],
    type: "Video de fans",
    genres: ["anime", "edits", "música"],
    rating: 9.5,
    emoji: "🎬",
    image: "",
    description:
      "Anime + canción dramática + transiciones imposibles + Windows Movie Maker. Una fórmula que marcó toda una generación de internet.",
    characters: [],
    guide: [
      "Elegir anime.",
      "Elegir canción.",
      "Editar.",
      "Agregar demasiadas transiciones."
    ],
    curiosities: [
      "Los AMV ayudaron a popularizar muchos animes dentro de comunidades online."
    ]
  },

  {
    title: "Memes viejos",
    category: ["internet"],
    type: "Cultura de internet",
    genres: ["memes", "nostalgia"],
    rating: 10,
    emoji: "😂",
    image: "",
    description:
      "Rage comics, memes con Impact, Trollface, Forever Alone y otras criaturas de una época más simple y mucho más pixelada.",
    characters: [],
    guide: [
      "Recordar los memes.",
      "Sentir vergüenza.",
      "Reírse igual."
    ],
    curiosities: [
      "Muchos memes actuales heredaron formatos de aquella época."
    ]
  },

  {
    title: "Game soundtracks",
    category: ["internet", "música", "juegos"],
    type: "Música",
    genres: ["videojuegos", "nostalgia"],
    rating: 10,
    emoji: "🎵",
    image: "",
    description:
      "Esas canciones de videojuegos que escuchás una vez y misteriosamente aparecen en tu cabeza cinco años después.",
    characters: [],
    guide: [
      "Elegir un juego.",
      "Buscar su soundtrack.",
      "Escuchar la música.",
      "Volver a jugar mentalmente."
    ],
    curiosities: [
      "La música puede ser una parte fundamental de la identidad de un videojuego."
    ]
  }

];
/* =========================================================
   🖼️ IMÁGENES (se asignan por título)
   ========================================================= */

const IMG_FOLDER = "img/";
const IMG_EXT = ".jpg";   // cambialo a ".png" o ".webp" si usás otro formato

const IMAGES = {
  "Dibujar": "dibujar",

  "Shingeki no Kyojin": "shingeki-no-kyojin",
  "Assassination Classroom": "assassination-classroom",
  "JoJo's Bizarre Adventure": "jojo",
  "Kusuriya no Hitorigoto": "kusuriya-no-hitorigoto",
  "Jibaku Shounen Hanako-kun": "hanako-kun",

  "The Owl House": "the-owl-house",
  "Gravity Falls": "gravity-falls",
  "Steven Universe": "steven-universe",
  "Hora de Aventura": "hora-de-aventura",
  "Avatar: La Leyenda de Aang": "avatar-aang",
  "Avatar: La Leyenda de Korra": "avatar-korra",

  "Project Hail Mary": "project-hail-mary",
  "Verity": "verity",

  "Olivia Rodrigo": "olivia-rodrigo",
  "PinkPantheress": "pinkpantheress",

  "ElRubius": "elrubius",
  "Karmaland": "karmaland",

  "Minecraft": "minecraft",
  "Terraria": "terraria",
  "Stardew Valley": "stardew-valley",
  "Slime Rancher": "slime-rancher",
  "Doki Doki Literature Club!": "doki-doki",
  "Mystic Messenger": "mystic-messenger",
  "Corazón de Melón": "corazon-de-melon",
  "Undertale": "undertale",
  "Subnautica": "subnautica",
  "Phasmophobia": "phasmophobia",
  "Little Nightmares": "little-nightmares",
  "The Sims": "the-sims",
  "Resident Evil": "resident-evil",
  "Animal Crossing": "animal-crossing",
  "Portal 2": "portal-2",

  "Jeff the Killer": "jeff-the-killer",
  "Nina the Killer": "nina-the-killer",
  "Jane the Killer": "jane-the-killer",

  "MSN Messenger": "msn-messenger",
  "Fotolog": "fotolog",
  "Tumblr": "tumblr",
  "DeviantArt": "deviantart",
  "Flash Games": "flash-games",
  "Club Penguin": "club-penguin",
  "Stardoll": "stardoll",
  "Creepypastas": "creepypastas",
  "YouTube 2012": "youtube-2012",
  "AMVs": "amvs",
  "Memes viejos": "memes-viejos",
  "MySpace layouts": "myspace-layouts",
  "Game soundtracks": "game-soundtracks"
};

DATA.forEach(item => {
  if (!item.image && IMAGES[item.title]) {
    item.image = IMG_FOLDER + IMAGES[item.title] + IMG_EXT;
  }
});

/* =========================================================
   ♡ WISHLIST
   ========================================================= */

const WISHLIST = [
  "Death Note",
  "Dandadan",
  "Cowboy Bebop",
  "Coraline",
  "My Chemical Romance",
  "Avril Lavigne",
  "MARINA",
  "Frieren",
  "Honkai: Star Rail",
  "Omori"
];


/* =========================================================
   ♡ CATEGORÍAS
   ========================================================= */

const TABS = [
  ["todo", "★ TODO"],
  ["dibujo", "🎨 DIBUJO"],
  ["anime", "🌸 ANIME"],
  ["series", "📺 SERIES"],
  ["libros", "📚 LIBROS"],
  ["música", "🎧 MÚSICA"],
  ["youtube", "▶️ YOUTUBE"],
  ["juegos", "🎮 JUEGOS"],
  ["creepypastas", "👁️ CREEPYPASTAS"],
  ["internet", "💿 INTERNET VIEJO"]
];


/* =========================================================
   ♡ KAOMOJIS
   ========================================================= */

const KAOS = [
  "(◕‿◕✿)",
  "(｡•̀ᴗ-)✧",
  "(≧▽≦)",
  "(´｡• ᵕ •｡`)",
  "(づ｡◕‿‿◕｡)づ",
  "(๑˃ᴗ˂)ﻭ",
  "(っ˘ω˘ς )",
  "(｡•ㅅ•｡)♡",
  "(✿◠‿◠)",
  "( ˶ˆᗜˆ˵ )"
];

let kaoIndex = 0;


/* =========================================================
   ♡ REFERENCIAS AL HTML
   ========================================================= */

const posts = document.getElementById("posts");
const tabs = document.getElementById("tabs");
const count = document.getElementById("count");

const wikiModal = document.getElementById("wikiModal");
const wikiContent = document.getElementById("wikiContent");
const wikiClose = document.getElementById("wikiClose");
const wikiBackdrop = document.getElementById("wikiBackdrop");

const arch = document.getElementById("arch");
const wish = document.getElementById("wish");


/* =========================================================
   ♡ ESTRELLAS
   ========================================================= */

function stars(rating) {

  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  let result = "";

  for (let i = 0; i < full; i++) {
    result += "★";
  }

  if (half) {
    result += "½";
  }

  return result;
}


/* =========================================================
   ♡ RENDER DE ARTÍCULOS
   ========================================================= */

function render(category = "todo") {

  const filtered =
    category === "todo"
      ? DATA
      : DATA.filter(item => item.category.includes(category));

  posts.innerHTML = "";

  filtered.forEach((item) => {

    const article = document.createElement("article");

    article.className = "post";

    /* IMPORTANTE:
       ahora TODO el artículo es clickeable */
    article.tabIndex = 0;
    article.setAttribute(
      "aria-label",
      `Abrir información sobre ${item.title}`
    );

    const imageHTML = item.image
      ? `
        <div class="pic">
          <img
            src="${item.image}"
            alt="${item.title}"
            onerror="this.style.display='none'"
          >
        </div>
      `
      : `
        <div class="pic">
          <span class="pic-placeholder">
            ${item.emoji}
          </span>
        </div>
      `;

    const primaryCategory = item.category[0];

    article.innerHTML = `
      ${imageHTML}

      <div class="tag">
        ${item.emoji} ${primaryCategory}
      </div>

      <div class="body">

        <h3>${item.title}</h3>

        <div class="stars">
          ${stars(item.rating)}
          <span class="rating-number">
            ${item.rating}/10
          </span>
        </div>

        <p class="description">
          ${item.description}
        </p>

        <span class="lbl">
          ${item.type}
        </span>

      </div>
    `;

    /* =====================================================
       ♡ CLICK EN TODO EL ARTÍCULO
       ===================================================== */

    article.addEventListener("click", () => {
      openWiki(item);
    });

    /* También funciona con Enter o espacio */
    article.addEventListener("keydown", (event) => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openWiki(item);
      }

    });

    posts.appendChild(article);
  });


  /* Contador */

  const cantidad = filtered.length;

  count.textContent =
    `${cantidad} interés${cantidad === 1 ? "" : "es"} encontrado${cantidad === 1 ? "" : "s"} ♡`;
}


/* =========================================================
   ♡ CATEGORÍAS
   ========================================================= */

function renderTabs() {

  tabs.innerHTML = "";

  TABS.forEach(([id, label], index) => {

    const button = document.createElement("button");

    button.type = "button";
    button.dataset.category = id;
    button.textContent = label;

    button.setAttribute(
      "aria-pressed",
      index === 0 ? "true" : "false"
    );

    button.addEventListener("click", () => {

      document
        .querySelectorAll("#tabs button")
        .forEach(btn => {
          btn.setAttribute("aria-pressed", "false");
        });

      button.setAttribute("aria-pressed", "true");

      render(id);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

    tabs.appendChild(button);

  });

}


/* =========================================================
   ♡ INTERNET ARCHAEOLOGY
   ========================================================= */

function renderArchaeology() {

  const internetItems =
    DATA.filter(item =>
      item.category.includes("internet")
    );

  arch.innerHTML = "";

  internetItems.forEach(item => {

    const card = document.createElement("div");

    card.className = "arch-card";

    card.innerHTML = `
      <div class="arch-icon">
        ${item.emoji}
      </div>

      <strong>
        ${item.title}
      </strong>
    `;

    card.addEventListener("click", () => {
      openWiki(item);
    });

    arch.appendChild(card);

  });

}


/* =========================================================
   ♡ WISHLIST
   ========================================================= */

function renderWishlist() {

  wish.innerHTML = "";

  WISHLIST.forEach(item => {

    const chip = document.createElement("span");

    chip.className = "chip";

    chip.textContent = `♡ ${item}`;

    wish.appendChild(chip);

  });

}


/* =========================================================
   ♡ MINI WIKI
   ========================================================= */
function slug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function openWiki(item) {

  const genresHTML =
    item.genres
      .map(genre => `
        <span class="wiki-genre">
          ${genre}
        </span>
      `)
      .join("");


  /* -------------------------------------------------------
     PERSONAJES
     ------------------------------------------------------- */

  let charactersHTML = "";

  if (
    item.characters &&
    item.characters.length
  ) {

    const characters = item.characters
      .map(([name, icon]) => {

        const file = "img/personajes/" + slug(name) + ".jpg";

        return `
          <div class="character">
            <div class="character-icon">
              ${icon}
              <img src="${file}" alt="${name}" onerror="this.remove()">
            </div>
            <span>${name}</span>
          </div>
        `;

      })
      .join("");

    charactersHTML = `
      <section class="wiki-section">

        <h4>
          ♡ personajes principales
        </h4>

        <div class="character-grid">
          ${characters}
        </div>

      </section>
    `;
  }
  /* -------------------------------------------------------
     GUÍA
     ------------------------------------------------------- */

  let guideHTML = "";

  if (
    item.guide &&
    item.guide.length
  ) {

    const list = item.guide
      .map(step => `<li>${step}</li>`)
      .join("");

    guideHTML = `
      <section class="wiki-section">

        <h4>
          ✧ mini guía personal
        </h4>

        <ol class="wiki-list">
          ${list}
        </ol>

      </section>
    `;
  }


  /* -------------------------------------------------------
     CURIOSIDADES
     ------------------------------------------------------- */

  let curiositiesHTML = "";

  if (
    item.curiosities &&
    item.curiosities.length
  ) {

    const list = item.curiosities
      .map(item => `<li>${item}</li>`)
      .join("");

    curiositiesHTML = `
      <section class="wiki-section">

        <h4>
          ★ curiosidades
        </h4>

        <ul class="wiki-list">
          ${list}
        </ul>

      </section>
    `;
  }


  /* -------------------------------------------------------
     IMAGEN / PLACEHOLDER
     ------------------------------------------------------- */

  const imageHTML = item.image
    ? `
      <img
        class="wiki-cover"
        src="${item.image}"
        alt="${item.title}"
      >
    `
    : `
      <div class="wiki-placeholder">
        ${item.emoji}
      </div>
    `;


  /* -------------------------------------------------------
     CONTENIDO DE LA WIKI
     ------------------------------------------------------- */

  wikiContent.innerHTML = `

    <header class="wiki-header">

      ${imageHTML}

      <div>

        <p class="wiki-type">
          ${item.type}
        </p>

        <h2
          id="wikiTitle"
          class="wiki-title"
        >
          ${item.title}
        </h2>

        <div class="wiki-rating">
          ${stars(item.rating)}
          <span>
            ${item.rating}/10
          </span>
        </div>

        <div class="wiki-genres">
          ${genresHTML}
        </div>

      </div>

    </header>


    <section class="wiki-section">

      <h4>
        ♡ sobre esto
      </h4>

      <p>
        ${item.description}
      </p>

    </section>


    ${charactersHTML}


    ${guideHTML}


    ${curiositiesHTML}


    <section class="wiki-section personal-section">

      <h4>
        🩷 rincón personal de Pia
      </h4>

      <p>
        Este contenido forma parte de mi pequeño rincón
        personal de internet. Acá guardo cosas que me gustan,
        descubrimientos, personajes, juegos, series y recuerdos
        que me dan ganas de volver una y otra vez.
      </p>

      <p>
        ✧ si llegaste hasta acá, gracias por chusmear mi foro ♡
      </p>

    </section>

  `;


  /* -------------------------------------------------------
     ABRIR MODAL
     ------------------------------------------------------- */

  wikiModal.classList.add("open");

  wikiModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";

  wikiClose.focus();

}


/* =========================================================
   ♡ CERRAR WIKI
   ========================================================= */

function closeWiki() {

  wikiModal.classList.remove("open");

  wikiModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}


/* Click botón cerrar */

wikiClose.addEventListener(
  "click",
  closeWiki
);


/* Click fondo */

wikiBackdrop.addEventListener(
  "click",
  closeWiki
);


/* Escape */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      wikiModal.classList.contains("open")
    ) {
      closeWiki();
    }

  }
);


/* =========================================================
   ♡ CAMBIAR KAOMOJI
   ========================================================= */

const kaoBtn =
  document.getElementById("kaoBtn");

const kao =
  document.getElementById("kao");

kaoBtn.addEventListener(
  "click",
  () => {

    kaoIndex++;

    if (
      kaoIndex >= KAOS.length
    ) {
      kaoIndex = 0;
    }

    kao.textContent =
      `${KAOS[kaoIndex]} bienvenid@ a mi rinconcito de internet`;

  }
);


/* =========================================================
   ♡ MODO OSCURO
   ========================================================= */

const themeBtn =
  document.getElementById("themeBtn");

const savedTheme =
  localStorage.getItem("tema");


if (savedTheme === "dark") {

  document.body.dataset.theme = "dark";

  themeBtn.setAttribute(
    "aria-pressed",
    "true"
  );

  themeBtn.textContent =
    "☀ modo claro";

}


themeBtn.addEventListener(
  "click",
  () => {

    const dark =
      document.body.dataset.theme === "dark";

    if (dark) {

      document.body.removeAttribute(
        "data-theme"
      );

      localStorage.setItem(
        "tema",
        "light"
      );

      themeBtn.textContent =
        "☾ modo oscuro";

      themeBtn.setAttribute(
        "aria-pressed",
        "false"
      );

    } else {

      document.body.dataset.theme =
        "dark";

      localStorage.setItem(
        "tema",
        "dark"
      );

      themeBtn.textContent =
        "☀ modo claro";

      themeBtn.setAttribute(
        "aria-pressed",
        "true"
      );

    }

  }
);
/* =========================================================
   ♡ INICIALIZACIÓN
   ========================================================= */

renderTabs();
render("todo");
renderArchaeology();
renderWishlist();