export const PROJECTS = [
  {
    id: "p1",
    title: "Cocina central de hotel boutique",
    location: "CDMX, Polanco",
    type: "Hotel",
    client: "Hotel boutique 5 estrellas",
    year: 2024,
    image: "hotel",
    gallery: ["hotel", "manufacturing", "workshop"],
    metrics: ["120 m²", "200 cubiertos/día", "Entrega 8 semanas"],
    intro:
      "Un hotel boutique de 48 habitaciones en Polanco abría una nueva cocina central para desayunos, room service 24/7 y banquetes de fin de semana. El reto: una sola cocina, tres operaciones simultáneas, cero margen para fallar en el servicio al huésped.",
    challenge:
      "El espacio asignado tenía 120 m² en sótano con altura libre limitada y un solo acceso de servicio. La cocina debía atender desayuno buffet de 7:00 a 11:00, room service 24 horas y banquetes hasta de 180 personas los fines de semana — sin interferencias entre flujos.",
    solution:
      "Zonificamos en tres áreas independientes con flujos en U: línea caliente para banquetes y room service, zona fría para desayuno buffet pre-armado y estación dedicada de pastelería. Ductería sanitaria propia para cada zona. Toda la fabricación en acero 304 con soldadura continua y juntas selladas grado farmacéutico.",
    highlights: [
      "Tres zonas operativas independientes en 120 m²",
      "Línea caliente con 6 estaciones modulares",
      "Cámara de refrigeración walk-in integrada al flujo",
      "Soldadura sanitaria continua certificada NSF",
    ],
    result:
      "Inauguración a tiempo en 8 semanas. Pico de servicio de 200 cubiertos/día en mes 2 sin incidentes. El gerente F&B reportó reducción del 18% en tiempos de pase respecto a la operación anterior.",
    testimonial: "[PENDIENTE — testimonio del director F&B del hotel]",
  },
  {
    id: "p2",
    title: "Restaurante de alta cocina",
    location: "Monterrey",
    type: "Restaurante",
    client: "Restaurante de autor en San Pedro Garza García",
    year: 2024,
    image: "restaurant1",
    gallery: ["restaurant1", "advisory", "steelDetail"],
    metrics: ["80 m²", "Cocina abierta al comedor", "Entrega 6 semanas"],
    intro:
      "Un chef con estrella regional quería abrir su primer restaurante propio en San Pedro: 40 cubiertos, menú degustación de 8 tiempos y cocina abierta visible desde el comedor. La cocina debía ser tan cuidada como el menú.",
    challenge:
      "80 m² para producción completa de menú degustación. La cocina sería el centro visual del restaurante: cualquier desorden, fuga de vapor o calor extra hacia el comedor era inaceptable. Y el chef pedía entrega antes de seis semanas para no atrasar la apertura.",
    solution:
      "Layout en isla central con tres estaciones cerradas (frío, caliente, pase) en acabado espejo, frente al comedor. Ductos extracción integrados al techo falso con campanas perimetrales discretas. Detrás, una zona ciega para lavado, prep y bodega. Acero 304 con soldadura sanitaria oculta — sin juntas visibles desde el comedor.",
    highlights: [
      "Isla central con tres estaciones independientes",
      "Acabado espejo en todas las superficies visibles",
      "Sistema de ductos oculto en techo falso",
      "Zona de prep + lavado segregada al fondo",
      "Iluminación cenital empotrada sobre el pase",
    ],
    result:
      "Entrega en 6 semanas exactas. El restaurante abrió con cobertura de prensa gastronómica regional. La cocina se convirtió en parte del concepto: el comensal ve el pase de cada plato sin perder un detalle del show.",
    testimonial: "[PENDIENTE — testimonio del chef-dueño]",
  },
  {
    id: "p3",
    title: "Comedor industrial 1,500 comensales",
    location: "Estado de México",
    type: "Comedor industrial",
    client: "Planta automotriz, parque industrial Toluca",
    year: 2023,
    image: "industrial",
    gallery: ["industrial", "manufacturing", "workshop"],
    metrics: ["350 m²", "1,500 comensales por turno", "Entrega 14 semanas"],
    intro:
      "Una planta automotriz inauguraba turno completo y necesitaba alimentar a 1,500 personas en tres bloques de 30 minutos sin formar fila de más de 8 minutos. Un comedor industrial real, con normativa STPS y operación continua.",
    challenge:
      "Servir 1,500 cubiertos en 90 minutos efectivos, con menú variado, cumplimiento STPS pleno y mantenimiento sostenido a 5 años. El espacio era una nave industrial vacía: nosotros diseñábamos todo, desde flujo de comensales hasta extracción.",
    solution:
      "Dos líneas paralelas de servicio tipo cafetería con 6 estaciones cada una (sopa, plato fuerte, guarniciones, vegetariano, bebidas, postres). Cocina de producción al fondo separada por mamparas térmicas. Lavaloza automático industrial con flujo en U. Toda la fabricación cumple NOM-251 y STPS-018.",
    highlights: [
      "Dos líneas de servicio paralelas para 1,500 comensales",
      "6 estaciones de menú por línea",
      "Cocina de producción separada por mampara térmica",
      "Lavaloza industrial con flujo unidireccional",
      "Cumplimiento NOM-251 + STPS-018 documentado",
    ],
    result:
      "Operación arrancó con los tres turnos completos. Tiempo promedio de fila: 5 minutos 40 segundos en el bloque pico. Cero observaciones STPS en las primeras dos auditorías anuales.",
    testimonial: "[PENDIENTE — testimonio del gerente de servicios de la planta]",
  },
  {
    id: "p4",
    title: "Cadena de cafeterías regionales",
    location: "Guadalajara",
    type: "Cafetería",
    client: "Cadena local con 6 sucursales en ZMG",
    year: 2024,
    image: "cafeteria",
    gallery: ["cafeteria", "restaurant2", "steelDetail"],
    metrics: ["6 sucursales", "Equipamiento estándar", "Entrega escalonada (3 meses)"],
    intro:
      "Una cadena local de cafeterías abrió 6 sucursales nuevas en Guadalajara con identidad consistente. La cocina y la barra debían replicarse de forma idéntica en cada local para que la operación, el menú y la experiencia fueran reproducibles.",
    challenge:
      "Diseñar un mobiliario en acero modular que pudiera fabricarse en lote y armarse rápido en cada local. Cada sucursal tenía un layout ligeramente distinto, pero los módulos debían encajar en todas. Cero variaciones en la calidad o el acabado.",
    solution:
      "Catálogo de 4 módulos base (barra de servicio, isla de preparación, mueble lavado, estación bakery) en dos largos estándar. Producimos 24 módulos en taller en paralelo, instalación en cada sucursal en 2 días. Acabado uniforme en acero satinado con tope de melamina antimanchas.",
    highlights: [
      "4 módulos base reproducibles en 6 locales",
      "Producción en lote de 24 unidades en taller",
      "Instalación por sucursal en 2 días hábiles",
      "Acabado satinado consistente con identidad de marca",
    ],
    result:
      "Las 6 sucursales abrieron en 3 meses con apertura escalonada de cada 15 días. Equipo de operaciones reportó tiempos de entrenamiento de personal nuevo 40% menores gracias al layout idéntico.",
    testimonial: "[PENDIENTE — testimonio del COO de la cadena]",
  },
  {
    id: "p5",
    title: "Cocina central de catering",
    location: "Querétaro",
    type: "Catering",
    client: "Empresa de catering corporativo y eventos",
    year: 2023,
    image: "workshop",
    gallery: ["workshop", "manufacturing", "industrial"],
    metrics: ["220 m²", "Operación 24/7", "Entrega 10 semanas"],
    intro:
      "Una empresa de catering corporativo abría su cocina central de producción para servir eventos de hasta 2,000 personas y comedores empresariales semanales. Operación 24/7 con producción, refrigeración y logística de salida en el mismo edificio.",
    challenge:
      "Diseñar una cocina con tres flujos simultáneos: producción caliente para eventos, producción fría para box lunch corporativo y zona de empaque/etiquetado para distribución. Todo bajo HACCP y con trazabilidad de lote para auditoría de clientes corporativos.",
    solution:
      "Tres líneas de producción independientes con bunker frío central de 30 m². Mesas de empaque con sistema de etiquetado integrado. Bodega de insumos con control de temperatura y humedad. Flujo de salida segregado del flujo de insumos para evitar contaminación cruzada.",
    highlights: [
      "Tres líneas de producción simultáneas",
      "Bunker frío central de 30 m²",
      "Estación de empaque con etiquetado integrado",
      "Flujos de entrada/salida segregados (HACCP)",
      "Trazabilidad de lote desde insumo a entrega",
    ],
    result:
      "Cocina operando 24/7 desde la semana 11. Capacidad probada de 2,000 box lunches en un solo día durante evento corporativo Q4 2023. Certificación HACCP obtenida 4 meses después de la apertura.",
    testimonial: "[PENDIENTE — testimonio del director de operaciones del catering]",
  },
  {
    id: "p6",
    title: "Restaurante de mariscos costa a costa",
    location: "Cancún",
    type: "Restaurante",
    client: "Restaurante de mariscos en zona hotelera",
    year: 2024,
    image: "restaurant2",
    gallery: ["restaurant2", "restaurant1", "steelDetail"],
    metrics: ["95 m²", "Cocina caliente + barra sushi", "Entrega 7 semanas"],
    intro:
      "Un restaurante de mariscos en la zona hotelera de Cancún integraba cocina caliente tradicional con barra de sushi en vivo. Dos disciplinas con requisitos distintos (temperaturas, materiales, tiempos) en el mismo espacio.",
    challenge:
      "95 m² para alojar cocina caliente, prep de pescado fresco, fría de mariscos, barra sushi visible y lavado. El ambiente de Cancún (humedad, salinidad) exige acero 304 puro sin compromisos. El cliente quería operar todo el año sin paros por mantenimiento.",
    solution:
      "Cocina caliente al fondo con extracción reforzada. Barra sushi frontal con cama de hielo automatizada y tarja dedicada para limpieza de pescado. Cámara fría de mariscos separada con piso epóxico antideslizante. Todas las uniones soldadas (sin tornillos visibles) para resistir el ambiente costero.",
    highlights: [
      "Barra sushi frontal con cama de hielo automatizada",
      "Cámara fría dedicada para mariscos",
      "Acero 304 grado marino en 100% del mobiliario",
      "Uniones soldadas continuas (sin tornillería expuesta)",
      "Piso epóxico antideslizante en zonas húmedas",
    ],
    result:
      "Entrega en 7 semanas. Sin paros operativos por corrosión o mantenimiento en los primeros 12 meses de operación, a pesar del ambiente costero.",
    testimonial: "[PENDIENTE — testimonio del chef ejecutivo]",
  },
];

export const CLIENT_LOGOS = [
  { name: "Cliente 1", short: "Hotel C1" },
  { name: "Cliente 2", short: "Rest. C2" },
  { name: "Cliente 3", short: "Grupo C3" },
  { name: "Cliente 4", short: "Cadena C4" },
  { name: "Cliente 5", short: "Hotel C5" },
  { name: "Cliente 6", short: "Restaurant C6" },
];
