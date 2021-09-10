export default {
  global: {
    componenteFormativo: '<i>Check-out</i> y atención de PQRS',
    descripcionCurso:
      'De la misma forma que el cliente ingresa al hotel, debe salir de él al final de su estancia. En este componente, revisaremos los conceptos para poder llevar a cabo con eficiencia un <i>check-out</i>. Recuerde que este es el último paso de la estancia del huésped y se tiene la responsabilidad de cerrar la estadía en forma impecable. Cualquier error en este momento puede dar al traste con toda la experiencia del usuario en el hotel. Dentro de las habilidades claves del recepcionista está conocer el proceso de auditoría nocturna, en el cual se concilian los movimientos diarios del hotel.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<i>Check-out</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<i>Late check-out</i>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Confirmación de Salidas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Salidas anticipadas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimiento técnico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Auditoría nocturna',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El auditor nocturno',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El proceso técnico',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Reportes',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Atención al cliente y manejo de PQRS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El cliente',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de solicitudes',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Sistema de PQRS',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Manual de PQRS',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Manejo de situaciones difíciles',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bardi, J. (2011). <i>Hotel Front Office Management </i>(5a ed.). John Wiley & Sons.',
    },
    {
      referencia:
        'Corral, F. (2012). <i>Manual de recepción hotelera: principios y técnicas</i> (7ª ed.). Septem Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/42028?page=117',
    },
    {
      referencia: 'CredibanCo. (2021). <i>Guía rápida de uso del datáfono.</i>',
      link:
        'https://www.credibanco.com/wp-content/uploads/2021/01/guia-rapida-del-datafono.pdf',
    },
    {
      referencia:
        'Marrero, F. (2016). <i>Glosario de términos hoteleros, turísticos y relacionados.</i>',
      link: 'https://www.hosteltur.com/files/web/templates/term/wikitur.pdf',
    },
    {
      referencia:
        'Migración Colombia. (2013). <i>Cartilla de Usuario Externo SIRE</i>. Ministerio de Relaciones Exteriores. ',
      link:
        'http://educa.barranquilla.edu.co/attachments/article/1034/Manual%20de%20Usuario%20SIRE.pdf',
    },
    {
      referencia:
        'Scheel, A. (1992). <i>Control de alojamiento. Contabilidad de huéspedes.</i> Universidad Externado de Colombia.',
    },
    {
      referencia:
        'Simón, M. (2006). <i>Recepción Front Office.</i> Ediciones Turísticas.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/78933?page=83&page=84',
    },
  ],
  glosario: [
    {
      termino: 'ADR',
      significado:
        'Es la sigla de <i>“Average Daily Rate”</i> o, en español, Tarifa Promedio Diaria. Esta se calcula totalizando la venta de las habitaciones ocupadas y dividiendo el valor por el número de habitaciones ocupadas.',
    },
    {
      termino: 'Bitácora',
      significado:
        'La bitácora, en hotelería, es el libro donde se anotan las novedades del turno. Con el correcto uso de este libro, se garantiza que las novedades de entrega de un turno a otro quedan registradas y son leídas, es decir, se debe firmar al frente de cada novedad como enterado.',
    },
    {
      termino: 'Complementary',
      terminoHtml: '<em>Complementary</em>',
      significado:
        'Esta es una habitación que también tiene una tarifa de habitación con cargo cero por habitación y que se ofrece a huéspedes especiales, líderes de la industria, funcionarios del gobierno, <i>tour</i> conductor, entre otros.',
    },
    {
      termino: 'House use',
      terminoHtml: '<em>House use</em>',
      significado:
        'Son las habitaciones que, en la operación, se destinan a uso interno. Su principal característica es que tienen tarifa de habitación con cargo cero por habitación. Por ejemplo, la habitación del gerente de turno.',
    },
    {
      termino: 'RevPAR',
      terminoHtml: '<em>RevPAR</em>',
      significado:
        'El <i>RevPAR</i> es la métrica más eficiente para medir la rentabilidad de una propiedad hotelera. Es la abreviatura de <i>“Revenue Per Available Room”</i> o “ingreso por habitación disponible”. Se calcula dividiendo los ingresos totales de la habitación por el total de habitaciones disponibles.',
    },
  ],
  complementario: [
    {
      texto:
        'Guía uso del Datáfono: CredibanCo. (2021). <i>Guía rápida de uso del datáfono.</i>',
      tipo: 'Guía en pdf',
      link:
        'https://www.credibanco.com/wp-content/uploads/2021/01/guia-rapida-del-datafono.pdf',
    },
    {
      texto:
        'Cartilla Uso del SIRE: Migración Colombia. (2013). <i>Cartilla de Usuario Externo SIRE</i>. Ministerio de Relaciones Exteriores.',
      tipo: 'Cartilla en pdf',
      descarga: '/downloads/manual_de_Usuario_SIRE.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Harbey Castelblanco Muñoz',
        cargo: 'Experto Técnico',
        centro: 'Centro Nacional Colombo Alemán - Regional Atlántico',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro Diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro Diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
