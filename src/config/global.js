export default {
  global: {
    Name:
      'Monitoreo y verificación de la implementación de BPG en ganadería bovina de la producción de leche',
    Description:
      'El componente aborda la evaluación y monitoreo de Buenas Prácticas Ganaderas (BPG) en la producción de leche bovina, con énfasis en inocuidad, sanidad, bienestar animal, sostenibilidad y trazabilidad. Proporciona herramientas para identificar riesgos, aplicar protocolos, gestionar contingencias y asegurar el cumplimiento normativo, fortaleciendo la competitividad del sector lechero mediante acciones correctivas, indicadores de gestión y metodologías de seguimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Buenas prácticas ganaderas bovinas en la producción de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Alcance de las Buenas Prácticas Ganaderas en la producción de leche',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Estrategias prácticas que contribuyen a una mayor eficiencia en la producción láctea',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Estrategia de implementación de las BPG en la producción de leche bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'El Plan de Implementación de BPG como herramienta técnica y operativa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Importancia del Plan de Implementación de BPG en la producción de leche',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Marco legal en la implementación de BPG en la producción de leche',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Riesgos sanitarios y ambientales en la producción de leche bajo BPG',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Clasificación de los riesgos en predios lecheros certificados en BPG',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Enfermedades de control oficial en bovinos de leche',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Normativa relacionada con el control sanitario y la bioseguridad en predios lecheros',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Planes de contingencia sanitaria y ambiental en predios certificados en BPG',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Protocolos de emergencia en las Buenas Prácticas Ganaderas de leche',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contingencia en el monitoreo de BPG en la producción de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Función principal',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de contingencia más comunes en predios lecheros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Protocolos comunes dentro de un plan de contingencia en predios lecheros',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Elementos clave que debe contener todo plan de contingencia en BPG',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Conceptos fundamentales en la gestión de contingencias',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Acciones y estrategias en la gestión de contingencias en BPG Leche',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Indicadores de gestión en la evaluación de las BPG en producción de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Tipos de gestión evaluables mediante indicadores en predios lecheros certificados en BPG',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Características que deben cumplir los indicadores de gestión en BPG leche',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Utilidad práctica de los indicadores en el cumplimiento de las BPG en leche',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Procedimientos e instrumentos para la evaluación de las BPG en producción de leche',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Monitoreo en las Buenas Prácticas Ganaderas en la producción de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Definición y función técnica del monitoreo en predios certificados en BPG leche',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Requisitos para un monitoreo eficaz en sistemas BPG leche',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Clases de monitoreo en las Buenas Prácticas Ganaderas para la producción de leche',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Procedimientos de monitoreo en predios lecheros',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo:
              'Metodologías de monitoreo en las BPG para producción de leche',
            hash: 't_6_5',
          },
        ],
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
        download: 'downloads/dist.pdf',
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
      tema: 'Buenas prácticas ganaderas bovinas en la producción de leche',
      referencia:
        'Ortegón, E., Pacheco, J. y Prieto, A. (2015). Metodología del marco lógico para la planificación, el seguimiento y la evaluación de proyectos y programas. CEPAL.',
      tipo: 'Manual',
      link:
        'https://www.cepal.org/es/publicaciones/5607-metodologia-marco-logico-la-planificacion-seguimiento-la-evaluacion-proyectos',
    },
    {
      tema:
        'Estrategia de implementación de las BPG en la producción de leche bovina',
      referencia:
        'Mideplan Costa Rica. (2015). Seguimiento y Evaluación. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=d4l7c8saBgo',
    },
    {
      tema:
        'El Plan de Implementación de BPG como herramienta técnica y operativa ',
      referencia:
        'TV Agro. (2015). Certificación de Buenas Prácticas Ganaderas para la Producción de Leche - por Juan Gonzalo Angel.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Du8EuciueAo',
    },
    {
      tema: 'Enfermedades de control oficial en bovinos de leche ',
      referencia:
        'TVAgro. (2022). Cómo detectar mastitis en vacas | Capítulo 1: Salud de la Ubre es Calidad de Leche – Diagnóstico. Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rj4LH5JpCo8',
    },
    {
      tema: 'Enfermedades de control oficial en bovinos de leche',
      referencia:
        'AGROSAVIA  TV. (2021). Recuento Células somáticas mediante la prueba CMT. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=toMe8BOrcpo',
    },
    {
      tema: 'Marco legal en la implementación de BPG en la producción de leche',
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2022). Resolución 67449 de 2022. Por la cual se establecen los requisitos sanitarios para la producción primaria de leche cruda destinada al consumo humano.',
      tipo: 'Normativa',
      link:
        'https://www.ica.gov.co/getattachment/6b7f82ab-bccd-4bf5-a5c6-5bfff35b772b/2020R67449.aspx ',
    },
    {
      tema: 'Marco legal en la implementación de BPG en la producción de leche',
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 1382 de 2013. Por la cual se establecen los límites máximos para residuos de medicamentos veterinarios en alimentos de origen animal destinados al consumo humano.',
      tipo: 'Normativa',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%201382%20de%202013.pdf ',
    },
    {
      tema: 'Marco legal en la implementación de BPG en la producción de leche',
      referencia:
        'Ministerio de Salud y Protección Social. (2007). Decreto 1500 de 2007. (Modificado por el Decreto 2270 de 2012).',
      tipo: 'Decreto',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2007decreto1500.pdf ',
    },
    {
      tema: 'Marco legal en la implementación de BPG en la producción de leche',
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (s.f.). Manual de Buenas Prácticas Ganaderas para producción lechera.',
      tipo: 'Documento técnico',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Buenas-Practicas-Ganaderas-BPG/Manual-Buenas-Practicas-Ganaderas-Produccion-Leche.pdf',
    },
    {
      tema: 'Marco legal en la implementación de BPG en la producción de leche',
      referencia:
        'Congreso de Colombia. (2016). Ley 1774 de 2016. Por la cual se modifica el Código Civil y el Código Penal, y se establecen normas sobre la protección y el bienestar animal.',
      tipo: 'Ley nacional',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135 ',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado:
        'es el grado en el que un conjunto de características inherentes cumple con unos requisitos.',
    },
    {
      termino: 'Capacitación',
      significado:
        'es toda actividad realizada en una organización, respondiendo a sus necesidades, que busca mejorar la actitud, conocimiento, habilidades o conductas de su personal.',
    },
    {
      termino: 'Consumidor final',
      significado:
        'es el último consumidor de un producto alimenticio que no empleará dicho alimento como parte de ninguna operación o actividad mercantil.',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis, lo más sistemático y objetivo posible, de un proyecto en curso o ya terminado, de su formulación, ejecución y resultados. El propósito es determinar el cumplimiento de los objetivos y las prestaciones del proyecto (pertinencia, eficiencia, eficacia, impacto y sostenibilidad).',
    },
    {
      termino: 'Impacto',
      significado:
        'efecto de un proyecto sobre los beneficiarios directos, así como sobre su entorno más amplio, al interior de un sector o en un área geográfica, en términos de factores técnicos, económicos, socioculturales e institucionales. evidencia la relación entre objetivos generales y objetivos específicos.',
    },
    {
      termino: 'Indicadores',
      significado:
        'son señales concretas que se pueden medir. Son el reflejo de que algo ha ocurrido. Por ejemplo, un aumento del número de estudiantes aprobados es un indicador de la mejora de la cultura de enseñanza y aprendizaje. El medio de verificación (la prueba) es la lista oficial de aprobados.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina.',
    },
    {
      termino: 'Métodos cualitativos',
      significado:
        'pertenecen a la tradición de las ciencias sociales y se basan en la observación de las personas en su mismo territorio, en la interacción con ellas en su propio idioma, posiblemente en sus propios términos. Enfatizan la comprensión de la manera como las personas estudiadas construyen la realidad. La mayoría de estudios cualitativos cuentan con análisis descriptivos más que estadísticos.',
    },
    {
      termino: 'Métodos cuantitativos',
      significado:
        'se apoyan en instrumentos estructurados para recolectar información estandarizada de una muestra cuidadosamente seleccionada de individuos, unidades o eventos. La información es analizada a través de una comparación estadística entre grupos o de un análisis multivariado.',
    },
    {
      termino: 'Monitoreo o seguimiento',
      significado:
        'actividad sistemática y permanente de recolección y análisis de datos para proveer, al equipo de gestión y a las principales partes interesadas, indicaciones sobre el avance y el logro de los objetivos, así como sobre la utilización de los fondos disponibles. Es muy importante para retroalimentar la gestión y la toma de decisiones.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'es el conjunto de procedimientos preestablecidos y autosuficientes que permiten conocer el histórico, la ubicación y la trayectoria de un producto o lote de productos a lo largo de la cadena de suministros en un momento dado, a través de unas herramientas determinadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alianza Mundial para la Participación Ciudadana (CIVICUS). (2001). Seguimiento y evaluación. ',
      link:
        'https://www.civicus.org/view/media/Seguimiento%20y%20evaluacion.pdf',
    },
    {
      referencia:
        'Castulina, N., & Martínez, C. (2013). Guía para el seguimiento y evaluación de proyectos sociales. Project Concern International.',
      link: '',
    },
    {
      referencia:
        'Zendesk. (2023). ¿Qué son los indicadores de gestión y cómo impactan en la atención al cliente? Blog ',
      link:
        'https://www.zendesk.com.mx/blog/indicadores-gestion/#:~:text=Los%20indicadores%20de%20gesti%C3%B3n%20son,o%20preventivas%20seg%C3%BAn%20el%20caso',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP), Dirección de Inversiones y Finanzas Públicas (DIFP), Grupo Asesor de la Gestión de Programas y Proyectos de Inversión Pública (GAPI), Programa de las Naciones Unidas para el Desarrollo (PNUD), & Proyecto de Modernización de la Administración Financiera del Sector Público (MASFP). (2004). Metodología de seguimiento de programas y proyectos de inversión: Versión oficial. Grupo Asesor de la Gestión de Programas y Proyectos de Inversión Pública. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/Metodolo_Seguimiento_progr_proys_inv.pdf',
    },
    {
      referencia:
        'Estrategia Internacional para la Reducción de Desastres de las Naciones Unidas (UNISDR). (2009). Terminología sobre reducción del riesgo de desastres. Naciones Unidas. ',
      link: 'https://www.unisdr.org/files/7817_UNISDRTerminologySpanish.pdf',
    },
    {
      referencia:
        'Keyence. (s. f.). ¿Qué es la trazabilidad? Principios de trazabilidad. ',
      link:
        'https://www.keyence.com.mx/ss/products/marking/traceability/basic_about.jsp',
    },
    {
      referencia:
        'Kurmen, R. (s. f.). Formulación y evaluación de proyectos. Universidad Manuela Beltrán.',
      link: '',
    },
    {
      referencia:
        'López, M. (2014). Elaboración del sistema de trazabilidad en la planta de producción de la empresa El Horno de Mikaela [Trabajo de grado, Corporación Universitaria Lasallista]. ',
      link:
        'https://repository.unilasallista.edu.co/server/api/core/bitstreams/41853dcf-cade-4843-a9db-bca794e23111/content ',
    },
    {
      referencia:
        'Toro Galvis, C. A., Bedoya Henao, G., Rodríguez Espinosa, H., Palacio Baena, L. G., y Silva Pérez, M. L. (2012). Manual para la certificación en buenas prácticas ganaderas en producción de leche. Universidad de Antioquia, Facultad de Ciencias Agrarias. ',
      link:
        'https://revistas.udea.edu.co/index.php/biogenesis/article/view/326139/20783422',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
