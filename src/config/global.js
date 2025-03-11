export default {
  global: {
    Name: 'Medición de impactos de productos turísticos',
    Description:
      'Esta medición, es fundamental para evaluar su efectividad y sostenibilidad en el tiempo. Permite analizar aspectos económicos, sociales y ambientales, generados por el turismo en una región. Promueve la responsabilidad en la gestión de recursos, fomentando un desarrollo turístico que respete la cultura local y el entorno natural. Así, se asegura un equilibrio entre el crecimiento económico y la preservación de los destinos turísticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Impacto del turismo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Implementación de estrategias',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Indicadores turísticos en Santa Rosa de Cabal',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Impactos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de impacto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métodos de medición del impacto',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas para medir el impacto',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Ejemplos de estrategias y su impacto',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Problemas identificados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Oportunidades detectadas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_10_122154_DU.pdf',
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
  complementario: [
    {
      tema: '2. Plan de acción',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Plan sectorial del turismo 2022-2026.',
      tipo: 'Documento',
      link:
        'https://www.mincit.gov.co/participa/consulta-ciudadana/20-12-2022-plan-sectorial-de-turismo-vfpp.aspx ',
    },
    {
      tema: '3. Indicadores',
      referencia:
        'Coneval. (2014). Manual para el diseño y la construcción de indicadores.',
      tipo: 'Documento',
      link:
        'https://www.coneval.org.mx/Informes/Coordinacion/Publicaciones%20oficiales/MANUAL_PARA_EL_DISENO_Y_CONTRUCCION_DE_INDICADORES.pdf',
    },
    {
      tema: '3. Indicadores',
      referencia:
        'DNP Colombia. (2024). Herramientas para la gestión integral del turismo en las entidades territoriales [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TwfSQU_nXOY',
    },
    {
      tema: '4.2. Métodos de medición del impacto',
      referencia:
        'CAF -Banco de Desarrollo de Latam y el Caribe-. (2015). ¿Qué es la medición de impacto? [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wDDUKp0o6Ms',
    },
  ],
  glosario: [
    {
      termino: 'Ambiental',
      significado:
        'es el entorno que rodea un cuerpo; por ejemplo, el aire, la temperatura, la humedad y otras condiciones.',
    },
    {
      termino: 'Desigualdad',
      significado:
        'puede referirse a la falta de equidad, equilibro o igualdad entre dos o más personas, cosas, hechos o realidades.',
    },
    {
      termino: 'Económico',
      significado:
        'es todo aquello que se relaciona con la economía; es decir, con el modo de producción, distribución e intercambio de los bienes y servicios a nivel estatal, grupal o individual.',
    },
    {
      termino: 'Enfoque',
      significado:
        'es el punto de vista que se toma a la hora de realizar un análisis, una investigación o una teorización.',
    },
    {
      termino: 'Erosión',
      significado:
        'desgaste de la superficie terrestre por agentes externos, como el agua o el viento.',
    },
    {
      termino: 'Estrategia',
      significado: 'es el camino por seguir para alcanzar ciertas metas.',
    },
    {
      termino: 'Impacto',
      significado:
        'el impacto se extiende a una amplia gama de ámbitos, desde la ciencia y la tecnología, hasta la sociedad, el medio ambiente y la economía.',
    },
    {
      termino: 'Indicador',
      significado:
        'es una medida cuantitativa o cualitativa que proporciona información sobre un fenómeno específico.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'es un evento, situación o momento propicio que brinda la posibilidad de lograr algo deseado o de avanzar hacia un objetivo.',
    },
    {
      termino: 'Sobreexplotación',
      significado:
        'se refiere a la extracción y consumo de recursos naturales hasta el punto en que no es posible que se recuperen.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de comercio Santa Rosa de Cabal. (2018). Estudio socio económica Santa Rosa de cabal.',
    },
    {
      referencia:
        'Cámara de comercio Santa Rosa de Cabal. (2021). Estudio socio económico Santa Rosa de Cabal.',
    },
    {
      referencia:
        'Cámara de comercio Santa Rosa de Cabal. (2023). Estudio socio económico Santa Rosa de Cabal.',
    },
    {
      referencia:
        'Centro de Información Turística CITUR. (2023). Informe mensual del turismo.',
    },
    {
      referencia:
        'Centro de Pensamiento Turístico de Colombia. (2018). Índice de Competitividad Turística Regional de Colombia. ',
      link:
        'https://www.cotelco.org:8443/JSih/DownloadEngine?path=cpublications/1d0da84c-b319-4690-83d9-f3a5dff37137.pdf&type=generalDocument ',
    },
    {
      referencia:
        'Centro de Pensamiento Turístico de Colombia (s.f.). Resultado general ICTRC por criterios de evaluación para Santa Rosa de Cabal 2019 – 2020.',
    },
    {
      referencia:
        'Instituto Distrital de Turismo (IDT). (s.f.). Indicadores de sostenibilidad.',
      link: 'https://www.idt.gov.co/es/indicadores-de-sostenibilidad-turistica',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2020). Informe global sobre COVID-19 y turismo. OMT.',
    },
    {
      referencia:
        'Orozco Ostos, B. (2024). Colombia rompió récord de ingresos por turismo, con US$9.000 millones, para 2023. La República.',
      link:
        'https://www.larepublica.co/economia/colombia-registra-record-en-ingresos-en-divisas-por-turismo-3819530',
    },
    {
      referencia:
        'Ospina Henao, D. (2024). Colombia registró 5,86 millones de turistas en 2023, solo en diciembre fueron 620.000. La República.',
      link:
        'https://www.larepublica.co/economia/numero-de-turistas-en-colombia-2023-3798978',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dora Inés Sánchez Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
