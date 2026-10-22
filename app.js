const GROUPS = [
  ['ninos','Niños','👧'],
  ['jovenes','Jóvenes','🧑'],
  ['mujeres','Mujeres','👩'],
  ['hombres','Hombres','👨'],
  ['familias','Familias','👨‍👩‍👧‍👦']
];

const CATEGORIES = [
  ['orar','Orar y reconocer oportunidades','🙏'],
  ['amar','Amar y servir','❤️'],
  ['compartir','Compartir el Evangelio','💬'],
  ['invitar','Invitar','📩'],
  ['iglesia','Ayudar a alguien a asistir a las reuniones dominicales','⛪'],
  ['misioneros','Apoyar a los misioneros de tiempo completo','👔'],
  ['referencias','Compartir referencias','🤝'],
  ['ensenando','Personas a quienes los misioneros están enseñando','🌱'],
  ['nuevos','Miembros nuevos','🫂'],
  ['regresar','Miembros que regresan a la actividad','🏠'],
  ['templo','Obra del templo y de historia familiar','🛕'],
  ['sacerdocio','Apoyo de sacerdocio','📖']
];

const TASKS = [
  {
    "id": "t1",
    "title": "Orar diariamente por oportunidades para compartir el Evangelio.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 1,
    "minutes": 2
  },
  {
    "id": "t2",
    "title": "Orar por una persona específica por nombre.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 1,
    "minutes": 2
  },
  {
    "id": "t3",
    "title": "Preguntar en oración: “Padre Celestial, ¿a quién puedo ayudar hoy?”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 1,
    "minutes": 2
  },
  {
    "id": "t4",
    "title": "Participar en la oración familiar de las 7:33 p. m. por la obra misional.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t5",
    "title": "Mantener una lista de personas por quienes orar.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t6",
    "title": "Orar por los misioneros de tiempo completo.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 1,
    "minutes": 2
  },
  {
    "id": "t7",
    "title": "Preguntar a los misioneros quién podría beneficiarse de oración, amistad o apoyo.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "orar",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t8",
    "title": "Pensar cada domingo en alguien que normalmente asiste y a quien no vimos.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t9",
    "title": "Revisar regularmente las metas del plan misional del barrio.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "orar",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t10",
    "title": "Sonreír y saludar a alguien nuevo.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 2
  },
  {
    "id": "t11",
    "title": "Aprender el nombre de un visitante.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 3
  },
  {
    "id": "t12",
    "title": "Sentarse junto a alguien que esté solo.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t13",
    "title": "Incluir a alguien nuevo en un juego o grupo de amigos.",
    "groups": [
      "ninos",
      "jovenes"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t14",
    "title": "Mandar un mensaje: “Pensé en ti. ¿Cómo estás?”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 3
  },
  {
    "id": "t15",
    "title": "Preguntar a un vecino: “¿Hay algo en lo que te pueda ayudar?”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t16",
    "title": "Ayudar a un visitante a encontrar su clase.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t17",
    "title": "Hacer una tarjeta o dibujo para alguien que esté enfermo o necesite ánimo.",
    "groups": [
      "ninos",
      "jovenes"
    ],
    "category": "amar",
    "difficulty": 1,
    "minutes": 10
  },
  {
    "id": "t18",
    "title": "Llevar alimentos a alguien que esté enfermo o pasando una dificultad.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 30
  },
  {
    "id": "t19",
    "title": "Ofrecer transporte a la Iglesia o a una actividad.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t20",
    "title": "Dar la bienvenida a una familia recién llegada al vecindario.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t21",
    "title": "Visitar a una persona como parte de la ministración.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 30
  },
  {
    "id": "t22",
    "title": "Visitar a alguien que no esté participando regularmente.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 30
  },
  {
    "id": "t23",
    "title": "Invitar a alguien a comer o convivir para fortalecer la amistad.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 60
  },
  {
    "id": "t24",
    "title": "Ayudar a un vecino con jardín, reparación, mudanza u otra necesidad práctica.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 45
  },
  {
    "id": "t25",
    "title": "Escuchar a alguien con interés y sin juzgar.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "amar",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t26",
    "title": "Mantener amistad sincera aunque la persona no tenga interés en la Iglesia.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "amar",
    "difficulty": 3,
    "minutes": 30
  },
  {
    "id": "t27",
    "title": "Compartir algo bueno que aprendimos durante las reuniones dominicales.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t28",
    "title": "Compartir un pasaje de las Escrituras que nos ayudó durante la semana.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t29",
    "title": "Compartir algo aprendido en Ven, sígueme o en Seminario.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t30",
    "title": "Compartir una experiencia de oración.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t31",
    "title": "Compartir una experiencia de servicio.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t32",
    "title": "Contar a un amigo algo relacionado con nuestro llamamiento o servicio en la Iglesia.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t33",
    "title": "Compartir algo edificante en las redes sociales después de la Iglesia.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t34",
    "title": "Compartir una foto o experiencia de una actividad de servicio.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t35",
    "title": "Tener listo un discurso favorito de la conferencia general para compartir.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t36",
    "title": "Tener lista una cita favorita de un profeta.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t37",
    "title": "Compartir una experiencia relacionada con el templo y por qué es importante.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t38",
    "title": "Preparar un testimonio sencillo de un minuto.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t39",
    "title": "Preparar una respuesta sencilla a “¿Por qué eres miembro de La Iglesia de Jesucristo de los Santos de los Últimos Días?”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t40",
    "title": "Preparar una respuesta sencilla a “¿Qué significa Jesucristo para ti?”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t41",
    "title": "Si eres miembro converso, preparar brevemente tu historia de conversión.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t42",
    "title": "Si prestaste servicio como misionero o misionera, tener una o dos experiencias listas para compartir.",
    "groups": [
      "mujeres",
      "hombres"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t43",
    "title": "Practicar en familia cómo explicar nuestras creencias con palabras sencillas.",
    "groups": [
      "familias"
    ],
    "category": "compartir",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t44",
    "title": "Invitar a un amigo a una actividad del barrio.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t45",
    "title": "Invitar a un amigo a la Presentación de los niños en la reunión sacramental.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t46",
    "title": "Invitar a alguien a un servicio bautismal.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t47",
    "title": "Invitar a alguien a una actividad deportiva.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t48",
    "title": "Invitar a alguien a un proyecto de servicio.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t49",
    "title": "Invitar a alguien a una actividad especial de Navidad o Pascua de Resurrección.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t50",
    "title": "Invitar a un amigo a ver la conferencia general.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t51",
    "title": "Invitar a alguien a una noche de hogar.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t52",
    "title": "Invitar a una familia a comer en nuestra casa.",
    "groups": [
      "familias",
      "mujeres",
      "hombres"
    ],
    "category": "invitar",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t53",
    "title": "Invitar a una persona que no participa regularmente a una actividad social.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t54",
    "title": "Invitar a alguien a visitar los jardines del templo.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t55",
    "title": "Invitar a alguien a una actividad de historia familiar.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "invitar",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t56",
    "title": "Invitar a un amigo a Seminario, PFJ o a una actividad para los jóvenes.",
    "groups": [
      "jovenes"
    ],
    "category": "invitar",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t57",
    "title": "Invitar personalmente a alguien a asistir a la reunión sacramental.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t58",
    "title": "Mandarle la hora y la dirección del centro de reuniones y ofrecer transporte.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t59",
    "title": "Esperarlo en la entrada y sentarse con él o ella.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t60",
    "title": "Explicarle brevemente qué sucederá durante la reunión sacramental.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t61",
    "title": "Presentarlo al obispo y a otros miembros.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t62",
    "title": "Presentar a sus hijos a líderes de la Primaria o de los jóvenes.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t63",
    "title": "Acompañarlo a las reuniones de la segunda hora.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 60
  },
  {
    "id": "t64",
    "title": "Invitarlo a convivir después de la Iglesia.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t65",
    "title": "Mandar un mensaje después: “Nos dio mucho gusto que vinieras”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 1,
    "minutes": 3
  },
  {
    "id": "t66",
    "title": "Volver a invitarlo con respeto y sin presión.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "iglesia",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t67",
    "title": "Preguntar a los misioneros: “¿Cómo puedo ayudar esta semana?”.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "misioneros",
    "difficulty": 1,
    "minutes": 3
  },
  {
    "id": "t68",
    "title": "Acompañar a los misioneros de tiempo completo en una lección.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t69",
    "title": "Facilitar una cita de enseñanza con la participación de un miembro.",
    "groups": [
      "mujeres",
      "hombres"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 30
  },
  {
    "id": "t70",
    "title": "Ofrecer el hogar como lugar donde los misioneros puedan enseñar una lección.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t71",
    "title": "Invitar a un amigo a comer con los misioneros cuando las normas de la misión lo permitan.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t72",
    "title": "Compartir nuestro testimonio durante una lección.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 10
  },
  {
    "id": "t73",
    "title": "Ayudar a una persona con transporte para asistir a la Iglesia o a lecciones.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "misioneros",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t74",
    "title": "Ayudar a organizar o participar en una charla fogonera misional.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t75",
    "title": "Participar en una noche de preguntas y respuestas con los misioneros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "misioneros",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t76",
    "title": "Pensar en una persona específica que podría estar preparada para escuchar el Evangelio.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "referencias",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t77",
    "title": "Orar por esa persona durante varios días.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "referencias",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t78",
    "title": "Buscar una oportunidad natural para conversar e invitarla.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "referencias",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t79",
    "title": "Preguntar si le gustaría conocer a los misioneros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "referencias",
    "difficulty": 3,
    "minutes": 5
  },
  {
    "id": "t80",
    "title": "Presentarla personalmente a los misioneros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "referencias",
    "difficulty": 3,
    "minutes": 20
  },
  {
    "id": "t81",
    "title": "Con permiso, compartir su información de contacto con los misioneros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "referencias",
    "difficulty": 3,
    "minutes": 5
  },
  {
    "id": "t82",
    "title": "Acompañarla a su primera lección.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "referencias",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t83",
    "title": "Dar seguimiento y seguir involucrado después de compartir una referencia.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "referencias",
    "difficulty": 3,
    "minutes": 15
  },
  {
    "id": "t84",
    "title": "Si vive fuera del barrio, ayudar a conectarla con los misioneros correspondientes.",
    "groups": [
      "mujeres",
      "hombres"
    ],
    "category": "referencias",
    "difficulty": 3,
    "minutes": 15
  },
  {
    "id": "t85",
    "title": "Orar por una persona a quien los misioneros estén enseñando.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 1,
    "minutes": 2
  },
  {
    "id": "t86",
    "title": "Sentarse con una persona a quien los misioneros estén enseñando durante la reunión sacramental.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 2,
    "minutes": 60
  },
  {
    "id": "t87",
    "title": "Invitarla regularmente a actividades.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t88",
    "title": "Presentarla a diferentes familias del barrio.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t89",
    "title": "Ayudarle a desarrollar amistades que no dependan solamente de los misioneros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 3,
    "minutes": 30
  },
  {
    "id": "t90",
    "title": "Asistir con ella a varias lecciones.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "ensenando",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t91",
    "title": "Acompañarla durante su progreso hacia el bautismo y la confirmación.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t92",
    "title": "Asistir a su servicio bautismal y felicitarla personalmente.",
    "groups": [
      "ninos",
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 2,
    "minutes": 60
  },
  {
    "id": "t93",
    "title": "Continuar siendo su amigo o amiga cuando los misioneros sean trasladados.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "ensenando",
    "difficulty": 3,
    "minutes": 30
  },
  {
    "id": "t94",
    "title": "Sentarse con un miembro nuevo durante sus primeras semanas.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "nuevos",
    "difficulty": 1,
    "minutes": 60
  },
  {
    "id": "t95",
    "title": "Invitar a un miembro nuevo al hogar.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "nuevos",
    "difficulty": 2,
    "minutes": 60
  },
  {
    "id": "t96",
    "title": "Presentarlo a varias familias del barrio.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "nuevos",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t97",
    "title": "Explicarle términos o costumbres de la Iglesia que todavía no comprenda.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "nuevos",
    "difficulty": 2,
    "minutes": 15
  },
  {
    "id": "t98",
    "title": "Ayudarle a usar la Biblioteca del Evangelio y Herramientas para miembros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "nuevos",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t99",
    "title": "Participar con él o ella en las lecciones que los misioneros vuelven a enseñar después del bautismo.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "nuevos",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t100",
    "title": "Invitarlo a participar con nosotros en la ministración cuando sea apropiado.",
    "groups": [
      "mujeres",
      "hombres"
    ],
    "category": "nuevos",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t101",
    "title": "Ayudarle a comprender su llamamiento o asignación de servicio.",
    "groups": [
      "mujeres",
      "hombres"
    ],
    "category": "nuevos",
    "difficulty": 3,
    "minutes": 20
  },
  {
    "id": "t102",
    "title": "Ayudar a que tenga hermanos o hermanas ministrantes y amistades reales.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "nuevos",
    "difficulty": 3,
    "minutes": 20
  },
  {
    "id": "t103",
    "title": "Continuar apoyándolo después de tres, seis y doce meses.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "nuevos",
    "difficulty": 3,
    "minutes": 20
  },
  {
    "id": "t104",
    "title": "Pensar en alguien que no hemos visto recientemente.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "regresar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t105",
    "title": "Mandarle un mensaje o llamarlo.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "regresar",
    "difficulty": 1,
    "minutes": 5
  },
  {
    "id": "t106",
    "title": "Invitarlo primero a una actividad social.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "regresar",
    "difficulty": 2,
    "minutes": 5
  },
  {
    "id": "t107",
    "title": "Visitarlo y ofrecer ayuda práctica.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "regresar",
    "difficulty": 2,
    "minutes": 30
  },
  {
    "id": "t108",
    "title": "Invitar a sus hijos a la Primaria o a actividades para los jóvenes.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "regresar",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t109",
    "title": "Escuchar por qué se alejó, sin juzgar ni discutir.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres"
    ],
    "category": "regresar",
    "difficulty": 3,
    "minutes": 30
  },
  {
    "id": "t110",
    "title": "Preguntar: “¿Qué podemos hacer para que te sea más fácil regresar?”.",
    "groups": [
      "mujeres",
      "hombres"
    ],
    "category": "regresar",
    "difficulty": 3,
    "minutes": 10
  },
  {
    "id": "t111",
    "title": "Ofrecer transporte y sentarse con él o ella cuando regrese.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "regresar",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t112",
    "title": "Continuar la amistad aunque todavía no esté listo para volver.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "regresar",
    "difficulty": 3,
    "minutes": 20
  },
  {
    "id": "t113",
    "title": "Compartir por qué el templo es importante para nosotros.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 1,
    "minutes": 10
  },
  {
    "id": "t114",
    "title": "Visitar los jardines del templo con un miembro nuevo.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 2,
    "minutes": 60
  },
  {
    "id": "t115",
    "title": "Ayudar a crear una cuenta de FamilySearch.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t116",
    "title": "Ayudar a comenzar el árbol familiar.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 2,
    "minutes": 30
  },
  {
    "id": "t117",
    "title": "Ayudar a encontrar nombres de antepasados.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t118",
    "title": "Conectarlo con consultores de templo e historia familiar.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 2,
    "minutes": 10
  },
  {
    "id": "t119",
    "title": "Acompañarlo al templo para efectuar bautismos y confirmaciones por representante.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 3,
    "minutes": 120
  },
  {
    "id": "t120",
    "title": "Ayudarle a llevar nombres de su propia familia al templo.",
    "groups": [
      "jovenes",
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t121",
    "title": "Apoyarlo mientras se prepara para recibir la investidura.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 3,
    "minutes": 60
  },
  {
    "id": "t122",
    "title": "Acompañarlo nuevamente al templo para efectuar ordenanzas en favor de sus antepasados cuando corresponda.",
    "groups": [
      "mujeres",
      "hombres",
      "familias"
    ],
    "category": "templo",
    "difficulty": 3,
    "minutes": 120
  },
  {
    "id": "t123",
    "title": "Sentarse con un hermano que sea miembro nuevo en el Cuórum de Élderes.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 1,
    "minutes": 60
  },
  {
    "id": "t124",
    "title": "Ayudarle a comprender la ministración y salir a ministrar juntos.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 2,
    "minutes": 45
  },
  {
    "id": "t125",
    "title": "Explicarle las responsabilidades del Sacerdocio Aarónico cuando corresponda.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 2,
    "minutes": 20
  },
  {
    "id": "t126",
    "title": "Ayudarle a aprender a preparar, bendecir o repartir la Santa Cena, según su oficio del sacerdocio y sus asignaciones.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 3,
    "minutes": 30
  },
  {
    "id": "t127",
    "title": "Acompañarlo en sus primeras experiencias de servicio en el sacerdocio.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t128",
    "title": "Ayudarle a prepararse para recibir el Sacerdocio de Melquisedec cuando corresponda.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 3,
    "minutes": 45
  },
  {
    "id": "t129",
    "title": "Acompañarlo en su preparación para el templo y la investidura.",
    "groups": [
      "hombres"
    ],
    "category": "sacerdocio",
    "difficulty": 3,
    "minutes": 60
  }
];

const $ = id => document.getElementById(id);
const chooser = $('chooser');
const results = $('results');
const filterBar = $('filterBar');
const groupFilter = $('groupFilter');
const searchInput = $('searchInput');
const exploreTitle = $('exploreTitle');
const weekCount = $('weekCount');

const savedSelection = localStorage.getItem('menuEvangelioSelected') || localStorage.getItem('menuSelected') || '[]';

const state = {
  view: 'home',
  mode: 'groups',
  group: null,
  category: null,
  secondaryGroup: 'all',
  difficulty: 'all',
  search: '',
  selected: new Set(JSON.parse(savedSelection)),
  currentIdea: null
};

const labelGroup = id => (GROUPS.find(x => x[0] === id) || [])[1] || id;
const labelCat = id => (CATEGORIES.find(x => x[0] === id) || [])[1] || id;
const labelDiff = d => d === 1 ? 'Fácil' : d === 2 ? 'Intermedio' : 'Más participación';
const labelMinutes = m => m <= 5 ? '5 min o menos' : m < 60 ? m + ' min' : Math.round(m/60) + ' h';

function saveSelected() {
  localStorage.setItem('menuEvangelioSelected', JSON.stringify([...state.selected]));
  weekCount.textContent = state.selected.size;
  weekCount.classList.toggle('show', state.selected.size > 0);
}

function setView(view) {
  state.view = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $(view + 'View').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  if (view === 'week') renderWeek();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function showChooser(mode) {
  setView('explore');
  state.mode = mode;
  state.group = null;
  state.category = null;
  state.secondaryGroup = 'all';
  state.difficulty = 'all';
  state.search = '';
  searchInput.value = '';
  filterBar.classList.add('hidden');
  groupFilter.classList.toggle('hidden', mode !== 'categories');
  results.innerHTML = '';
  exploreTitle.textContent = mode === 'groups' ? 'Buscar por edades' : 'Buscar por actividad';
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x.dataset.difficulty === 'all'));
  document.querySelectorAll('.group-chip').forEach(x => x.classList.toggle('active', x.dataset.groupFilter === 'all'));

  const items = mode === 'groups' ? GROUPS : CATEGORIES;
  chooser.innerHTML = '<div class="choice-grid">' + items.map(item => `
    <button class="choice-card" data-kind="${mode}" data-id="${item[0]}">
      <span>${item[2]}</span>
      <strong>${item[1]}</strong>
      <small>${mode === 'groups' ? 'Ver ideas apropiadas para este grupo' : 'Ver ideas relacionadas con este tipo de acción'}</small>
    </button>`).join('') + '</div>';

  chooser.querySelectorAll('.choice-card').forEach(btn => {
    btn.addEventListener('click', () => choose(mode, btn.dataset.id));
  });
}

function choose(mode, id) {
  state.mode = mode;
  if (mode === 'groups') {
    state.group = id;
    const item = GROUPS.find(x => x[0] === id);
    exploreTitle.textContent = item[1];
  } else {
    state.category = id;
    const item = CATEGORIES.find(x => x[0] === id);
    exploreTitle.textContent = item[1];
  }
  chooser.innerHTML = '';
  filterBar.classList.remove('hidden');
  groupFilter.classList.toggle('hidden', mode !== 'categories');
  renderResults();
}

function filteredTasks() {
  return TASKS.filter(t =>
    (!state.group || state.mode !== 'groups' || t.groups.includes(state.group)) &&
    (!state.category || state.mode !== 'categories' || t.category === state.category) &&
    (state.mode !== 'categories' || state.secondaryGroup === 'all' || t.groups.includes(state.secondaryGroup)) &&
    (state.difficulty === 'all' || t.difficulty === Number(state.difficulty)) &&
    (!state.search || t.title.toLowerCase().includes(state.search.toLowerCase()))
  ).sort((a,b) => a.difficulty - b.difficulty || a.minutes - b.minutes || a.title.localeCompare(b.title));
}

function taskCard(task) {
  const selected = state.selected.has(task.id);
  const metaOther = state.mode === 'groups'
    ? labelCat(task.category)
    : task.groups.map(labelGroup).join(' · ');
  return `
    <article class="task-card ${selected ? 'selected' : ''}">
      <div>
        <div class="task-title">${task.title}</div>
        <div class="task-meta">
          <span class="badge diff${task.difficulty}">${labelDiff(task.difficulty)}</span>
          <span class="badge">${labelMinutes(task.minutes)}</span>
          <span class="badge">${metaOther}</span>
        </div>
      </div>
      <button class="task-action" data-add="${task.id}">${selected ? '✓ Elegido' : 'Elegir'}</button>
    </article>`;
}

function renderResults() {
  const tasks = filteredTasks();
  if (!tasks.length) {
    results.innerHTML = '<div class="empty">No encontré actividades con esos filtros.</div>';
    return;
  }
  results.innerHTML = [1,2,3].map(level => {
    const items = tasks.filter(t => t.difficulty === level);
    if (!items.length) return '';
    return `
      <section>
        <div class="results-heading">
          <h3>${labelDiff(level)}</h3>
          <span>${items.length} ideas</span>
        </div>
        <div class="task-list">${items.map(taskCard).join('')}</div>
      </section>`;
  }).join('');
  bindTaskButtons(results);
}

function bindTaskButtons(root) {
  root.querySelectorAll('[data-add]').forEach(btn => {
    btn.onclick = () => toggleSelected(btn.dataset.add);
  });
}

function toggleSelected(id) {
  if (state.selected.has(id)) state.selected.delete(id);
  else state.selected.add(id);
  saveSelected();
  if (state.view === 'week') renderWeek();
  else renderResults();
}

function renderWeek() {
  const tasks = TASKS.filter(t => state.selected.has(t.id)).sort((a,b) => a.difficulty - b.difficulty || a.title.localeCompare(b.title));
  $('weekSummary').innerHTML = `
    <div><strong>${tasks.length}</strong><br><span>actividades elegidas</span></div>
    <div>Uno por uno.<br>Todos podemos hacer algo.</div>`;
  $('weekTasks').innerHTML = tasks.length
    ? '<div class="task-list">' + tasks.map(taskCard).join('') + '</div>'
    : '<div class="empty"><strong>Aún no has elegido ninguna actividad.</strong><br><br>Explora el menú y pulsa “Elegir”.</div>';
  bindTaskButtons($('weekTasks'));
}

function randomIdea(quickOnly = false) {
  const pool = TASKS.filter(t => t.difficulty <= 2 && (!quickOnly || t.minutes <= 5));
  const idea = pool[Math.floor(Math.random() * pool.length)];
  state.currentIdea = idea;
  $('ideaTitle').textContent = idea.title;
  $('ideaMeta').textContent = `${labelDiff(idea.difficulty)} · ${labelMinutes(idea.minutes)} · ${labelCat(idea.category)}`;
  $('ideaAdd').textContent = state.selected.has(idea.id) ? '✓ Ya está en mi semana' : 'Lo haré esta semana';
  $('ideaDialog').showModal();
}

function shareWeek() {
  const tasks = TASKS.filter(t => state.selected.has(t.id));
  if (!tasks.length) return;
  const text = `Mi menú para compartir el Evangelio esta semana:\n${tasks.map((t, i) => `${i+1}. ${t.title}`).join('\n')}\n\nAmar · Compartir · Invitar`;
  if (navigator.share) {
    navigator.share({ title: 'Mi menú para compartir el Evangelio', text }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert('La lista se copió al portapapeles.'));
  }
}

document.querySelectorAll('[data-home-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.homeAction;
    if (action === 'groups') showChooser('groups');
    else if (action === 'categories') showChooser('categories');
    else if (action === 'today') randomIdea(false);
    else if (action === 'five') randomIdea(true);
  });
});

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.view === 'explore') showChooser('groups');
    else setView(btn.dataset.view);
  });
});

$('backButton').onclick = () => {
  if (state.group || state.category) showChooser(state.mode);
  else setView('home');
};

searchInput.oninput = e => {
  state.search = e.target.value.trim();
  renderResults();
};

document.querySelectorAll('.group-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    state.secondaryGroup = btn.dataset.groupFilter;
    document.querySelectorAll('.group-chip').forEach(x => x.classList.toggle('active', x === btn));
    renderResults();
  });
});

document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    state.difficulty = btn.dataset.difficulty;
    document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === btn));
    renderResults();
  });
});

$('dialogClose').onclick = () => $('ideaDialog').close();
$('ideaAnother').onclick = () => { $('ideaDialog').close(); randomIdea(false); };
$('ideaAdd').onclick = () => {
  if (!state.currentIdea) return;
  state.selected.add(state.currentIdea.id);
  saveSelected();
  $('ideaAdd').textContent = '✓ Ya está en mi semana';
};
$('shareWeek').onclick = shareWeek;
$('shareSite').onclick = () => {
  const shareData = {
    title: 'Menú para Compartir el Evangelio - Barrio Leon Creek',
    text: 'Ideas sencillas para amar, compartir e invitar.',
    url: location.href.split('#')[0]
  };
  if (navigator.share) navigator.share(shareData).catch(() => {});
  else if (navigator.clipboard) navigator.clipboard.writeText(shareData.url).then(() => alert('Enlace copiado.'));
};
$('clearWeek').onclick = () => {
  if (state.selected.size && confirm('¿Quieres borrar todas las actividades elegidas?')) {
    state.selected.clear();
    saveSelected();
    renderWeek();
  }
};

saveSelected();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
