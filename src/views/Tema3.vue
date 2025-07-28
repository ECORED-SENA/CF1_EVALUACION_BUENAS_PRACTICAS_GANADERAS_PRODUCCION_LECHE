<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Riesgos sanitarios y ambientales en la producción de leche bajo BPG
    
    .fondo___color_1
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 En la producción de leche bajo el enfoque de <strong>Buenas Prácticas Ganaderas (BPG)</strong>, es esencial identificar y controlar los riesgos que puedan comprometer la inocuidad del producto, la salud animal, el equilibrio ambiental y la sostenibilidad del predio. Estos riesgos, clasificados como sanitarios y ambientales, deben ser gestionados de manera preventiva y sistemática.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img41.png', alt="" style="max-width: 295px").m-auto
        
        .row.align-items-center.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img42.png', alt="" style="max-width: 295px").m-auto
          .col-xl
            p La <strong>Resolución ICA 67449 de 2022</strong> exige a los predios lecheros contar con <strong>planes de emergencia sanitaria y ambiental</strong>, los cuales deben estar debidamente documentados, actualizados y operativos. Estos planes permiten preservar la continuidad operativa del sistema, asegurar la calidad sanitaria de la leche cruda y proteger tanto el entorno natural como la salud pública.
            p.mb-0 En el contexto de las BPG, los riesgos sanitarios y ambientales son eventos críticos que afectan directa o indirectamente la cadena productiva de la leche. Su adecuada identificación y control permite prevenir daños a la salud humana, garantizar la inocuidad del producto, reducir impactos negativos sobre el ambiente y fortalecer la competitividad del predio.
          
        <!-- BLOQUE 1 -->
        Separador
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Clasificación de los riesgos en predios lecheros certificados en BPG

    p.mb-5 Los riesgos asociados a la producción lechera bajo BPG pueden agruparse en dos grandes categorías: <strong>riesgos sanitarios</strong>, que afectan la salud del hato y la calidad de la leche; y <strong>riesgos ambientales</strong>, que inciden sobre los recursos naturales y la sostenibilidad del sistema. 

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 A. Riesgos sanitarios

    p.mb-5.style___box_5(data-aos="zoom-in") Los riesgos sanitarios en la producción ganadera afectan directamente la inocuidad de los productos, la salud humana y animal, así como el acceso a mercados. El cumplimiento de las Buenas Prácticas Ganaderas (BPG) permite prevenir, detectar y controlar estos riesgos, garantizando una producción sostenible y segura.

    AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
      .row(titulo="Enfermedades transmisibles y zoonosis").ajuste-cajaAcordion
        p.mb-4  Incluyen aquellas patologías que pueden ser transmitidas de los animales a los humanos o afectar gravemente la salud del hato. Su control es esencial para proteger la salud pública y la calidad del producto.
        <ul class="fa-ul estilo___ul_1 mb-0">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip color_i_1"></i></span><strong>Brucelosis bovina</strong>: Transmisible al humano por consumo de leche cruda. Requiere vacunación obligatoria, diagnóstico serológico y eliminación de positivos.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip color_i_1"></i></span><strong>Tuberculosis bovina</strong>: Riesgo crónico que compromete la inocuidad y el acceso a mercados especializados.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip color_i_1"></i></span><strong>Mastitis clínica y subclínica</strong>: Reduce la calidad de la leche. Se controla mediante monitoreo <em>(California Mastitis Test - CMT)</em> y reducción del recuento de células somáticas.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip color_i_1"></i></span><strong>Enfermedades respiratorias y digestivas</strong>: Afectan la productividad y bienestar del hato, especialmente en terneras.</li>
        </ul>
      .row(titulo="Resistencia antimicrobiana (RAM)").ajuste-cajaAcordion
        p.mb-3  Es uno de los principales desafíos para la salud pública a nivel mundial. Resulta del uso incorrecto de antibióticos y puede generar residuos en los productos animales. Las BPG exigen prescripción veterinaria y cumplimiento del tiempo de retiro para evitar este problema.
      .row(titulo="Contaminación química o física").ajuste-cajaAcordion
        p.mb-3 Este tipo de contaminación puede derivarse del uso inapropiado de sustancias en el entorno productivo, comprometiendo la inocuidad y aceptabilidad de los productos lácteos. Puede llevar al rechazo del producto en plantas procesadoras.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 B. Riesgos ambientales

    p.mb-5.style___box_5(data-aos="zoom-in") Los riesgos ambientales se relacionan con el impacto de las actividades ganaderas sobre los recursos naturales. Una gestión adecuada según las BPG permite minimizar estos efectos negativos y promover una ganadería sostenible en armonía con el entorno.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contaminación de fuentes hídricas
                p.mb-0 La incorrecta disposición de aguas residuales y excretas puede afectar la calidad del agua superficial y subterránea. Las BPG promueven el tratamiento previo, canales de conducción y zonas de amortiguación vegetal.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo inadecuado de estiércol y residuos orgánicos
                p.mb-0 Si no se manejan adecuadamente, estos residuos generan olores molestos, proliferación de vectores y contaminación. Las BPG promueven su aprovechamiento mediante compostaje y biofertilización bajo control técnico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Degradación del suelo
                p.mb-0 El uso intensivo y sin planificación de los potreros conduce a la pérdida de fertilidad y estructura del suelo. Se previene con prácticas como la rotación de potreros y la revegetalización.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Emisiones de gases de efecto invernadero (GEI)
                p.mb-0 La ganadería contribuye al cambio climático a través de emisiones como el metano. Las BPG proponen estrategias como sistemas silvopastoriles y dietas balanceadas para mitigar estas emisiones.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pérdida de hábitats naturales
                p.mb-0 La expansión de la frontera ganadera sin criterios de sostenibilidad puede destruir ecosistemas estratégicos. La normativa ambiental exige que los predios certificados no interfieran con áreas de alto valor ecológico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Enfermedades de control oficial en bovinos de leche

    p.mb-5 En el contexto de las <strong>Buenas Prácticas Ganaderas (BPG)</strong>, uno de los aspectos críticos en la gestión sanitaria de los predios lecheros es el control y erradicación de las <strong>enfermedades de control oficial</strong>, definidas así por su relevancia en la salud pública, el comercio internacional y la productividad del hato.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_3.ajuste___box_2(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img48.jpg', alt="" style="max-width: 500px").m-auto
          .col-xl
            p.mb-0 El <strong>Instituto Colombiano Agropecuario (ICA)</strong> lidera programas nacionales dirigidos a la prevención, vigilancia y eliminación de estas enfermedades, los cuales deben ser adoptados obligatoriamente por los predios certificados o en proceso de certificación en BPG Leche.
    
    p.mb-5 Las principales enfermedades de control oficial en bovinos lecheros, sus medidas obligatorias y riesgos asociados, se detallan en la siguiente tabla:

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Enfermedades de control oficial en bovinos de leche
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Enfermedad
                th.ajuste-border-tabla Control requerido
                th Riesgo principal
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Brucelosis bovina</strong>
                td.ajuste-border-tabla.texto-left Vacunación obligatoria (entre 3 y 9 meses), pruebas serológicas, eliminación de animales positivos.
                td.texto-left Zoonosis; afecta la inocuidad de la leche.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Tuberculosis bovina</strong>
                td.ajuste-border-tabla.texto-left Pruebas de tuberculina e inmediata eliminación de positivos.
                td.texto-left Afecta la salud pública y limita la comercialización.
              tr
                td.ajuste-border-tabla.texto-left <strong>Encefalopatía espongiforme bovina (EEB)</strong>
                td.ajuste-border-tabla.texto-left Control estricto del uso de proteínas animales en alimentos balanceados.
                td.texto-left Riesgo de prohibición de exportaciones.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Fiebre aftosa</strong>
                td.ajuste-border-tabla.texto-left Vacunación obligatoria y notificación inmediata de casos sospechosos.
                td.texto-left No es zoonosis, pero representa riesgo comercial y de cierre de mercados.

    <!-- BLOQUE 3 -->
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Normativa relacionada con el control sanitario y la bioseguridad en predios lecheros

    p.mb-5 Para asegurar la implementación de las medidas sanitarias exigidas, el ICA ha emitido diversas resoluciones y manuales técnicos que deben ser conocidos y aplicados por los responsables sanitarios de los predios:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_4.ajuste___box_3(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Resolución ICA 67449 de 2022.</strong> Define los requisitos para la certificación en BPG Leche, incluyendo el manejo sanitario.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Resolución 115000 de 2020.</strong> Establece las zonas libres de enfermedades de control oficial.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Resolución ICA 2341 de 2007.</strong> Regula la elaboración y aplicación de planes sanitarios prediales.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Manual de Bioseguridad ICA.</strong> Documento técnico que guía la prevención de enfermedades transmisibles dentro del predio.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Plan Nacional de erradicación de brucelosis y tuberculosis.</strong> Programa obligatorio que articula medidas técnicas y administrativas a nivel nacional.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img49.jpg', alt="" style="max-width: 400px").m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Planes de contingencia sanitaria y ambiental en predios certificados en BPG

    p.mb-5 Como parte de los requisitos para la certificación en BPG, todo predio lechero debe contar con un <strong>Plan de Contingencia Sanitaria y Ambiental</strong> que contemple acciones preventivas y reactivas frente a eventos críticos. Este plan debe estar documentado, actualizado y articulado con las recomendaciones del ICA.

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_3.ajuste___box_2.mb-3(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img50.jpg', alt="" style="max-width: 400px").m-auto
          .col-xl
            p.mb-3 El contenido mínimo que debe contemplar un plan de contingencia se describe a continuación:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Protocolos para la cuarentena y aislamiento de animales enfermos o sospechosos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Procedimientos para la notificación inmediata al ICA u otra autoridad sanitaria competente.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Establecimiento de rutas de evacuación y zonas de confinamiento en caso de emergencia.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Acciones para el manejo seguro de derrames químicos, fallas técnicas o eventos climáticos extremos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Medidas preventivas orientadas a preservar la calidad del agua, garantizar la bioseguridad y asegurar el bienestar animal durante cualquier contingencia.</li>
            </ul>
        
        p.mb-5.style___box_6(data-aos="zoom-in") La gestión efectiva de los <strong>riesgos sanitarios y ambientales</strong> en los predios lecheros certificados bajo BPG no solo es una obligación técnica y legal, sino un pilar esencial para garantizar la calidad del producto, proteger la salud humana y animal, y fortalecer la resiliencia del sistema productivo.
    
    p.mb-5 Cumplir con lo exigido por el ICA es el primer paso hacia una ganadería lechera <strong>certificada, responsable y competitiva</strong>, que responde a los retos actuales del mercado y de la sostenibilidad. A continuación, se describen las principales enfermedades de control oficial que afectan a los bovinos de leche en el país:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fiebre aftosa
                p.mb-0 Enfermedad viral altamente contagiosa que afecta a animales <em>biungulados</em>, tanto domésticos como silvestres. Presenta tasas de morbilidad cercanas al 100 % en poblaciones susceptibles no vacunadas. Aunque no es zoonótica, tiene un gran impacto económico y sanitario: genera restricciones comerciales, pérdidas productivas y altos costos de control. Su prevención es una prioridad estratégica a nivel nacional e internacional.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Encefalopatía Espongiforme Bovina (EEB)
                p.mb-0 Enfermedad neurológica degenerativa, progresiva, transmisible y mortal en bovinos adultos. Tiene un largo periodo de incubación (4 a 6 años) y está causada por un prión, una proteína infecciosa. Forma parte del grupo de las <em>Encefalopatías Espongiformes Transmisibles (EETs)</em>, que afectan tanto a animales como a humanos, generando degeneración del sistema nervioso central. Está asociada a restricciones estrictas en el comercio internacional.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tuberculosis bovina
                p.mb-0 Enfermedad infecciosa crónica causada por <em>Mycobacterium bovis</em>. Provoca lesiones granulomatosas (tubérculos), principalmente en pulmones y ganglios linfáticos. Es una zoonosis de alto impacto en salud pública y salud ocupacional. Su control incluye diagnóstico, sacrificio sanitario y restricciones de movilización. Es de notificación obligatoria según la OMSA y está bajo vigilancia del ICA en Colombia.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estomatitis vesicular
                p.mb-0 Enfermedad viral que afecta a bovinos, equinos, porcinos, ovinos, caprinos y también al ser humano. Está causada por un virus del género <em>Vesiculovirus</em> (familia <em>Rhabdoviridae</em>) y presenta varios serotipos, principalmente <em>New Jersey</em> e <em>Indiana</em>, este último con tres subtipos conocidos. Su presentación clínica es similar a la fiebre aftosa, lo que complica el diagnóstico diferencial.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Brucelosis bovina
                p.mb-0 Enfermedad infecto-contagiosa también conocida como aborto infeccioso. Afecta principalmente a bovinos adultos y puede transmitirse a otras especies. Es causada por <em>Brucella abortus</em> y constituye una zoonosis de alto impacto. La transmisión al ser humano ocurre por contacto con fluidos contaminados o consumo de leche cruda. Su control está regulado por el ICA e incluye vacunación, diagnóstico serológico y restricciones sanitarias.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Protocolos de emergencia en las Buenas Prácticas Ganaderas de leche

    .fondo___color_5
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 En los predios lecheros certificados en <strong>Buenas Prácticas Ganaderas (BPG), los protocolos de emergencia</strong> constituyen una herramienta indispensable para la prevención, el control y la respuesta inmediata ante situaciones que puedan comprometer la inocuidad de la leche, la salud del hato bovino, el bienestar animal, la salud pública y el medio ambiente.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img56.png', alt="" style="max-width: 295px").m-auto
        
        p.mb-5 De acuerdo con la <strong>Resolución ICA 67449 de 2022</strong>, estos protocolos deben estar formalmente documentados, mantenerse actualizados y formar parte integral del sistema de gestión del predio. Su aplicación debe articularse con los componentes de bioseguridad, sanidad animal, manejo ambiental y trazabilidad.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo de crisis sanitarias en predios lecheros
        
        p.mb-5 Las <strong>crisis sanitarias</strong> son eventos que afectan la salud del hato y la calidad de la leche, y cuya atención inmediata es clave para evitar la propagación de enfermedades y el deterioro del producto.

        h5.mb-4 Entre las situaciones que pueden originar una crisis sanitaria se encuentran:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0.style___box_4(data-aos="zoom-in")
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Brotes de enfermedades infectocontagiosas como brucelosis, tuberculosis bovina o mastitis contagiosa.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Presencia de residuos de medicamentos en leche cruda por incumplimiento de los tiempos de retiro.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Fallas en la vacunación, desparasitación o en la cuarentena de animales recién ingresados.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Contaminación cruzada derivada de malas prácticas de higiene durante el ordeño o uso de equipos mal desinfectados.</li>
                </ul>
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img58.jpg', alt="" style="max-width: 400px").m-auto
    
    h5.mb-4 Las principales acciones que deben activarse ante una crisis sanitaria son las siguientes:

    .fondo___color_3
      .px-5
        .row.justify-content-center.mb-5
          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img59.svg' alt="" )
              .tarjeta.color-secundario
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0 Aislar inmediatamente a los animales enfermos o sospechosos.
          
          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img60.svg' alt="" )
              .tarjeta.color-secundario
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0 Suspender la recolección de leche del animal o del grupo afectado.
          
          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img61.svg' alt="" )
              .tarjeta.color-secundario
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0 Notificar al ICA u otra autoridad sanitaria competente.

          .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/img62.svg' alt="" )
              .tarjeta.color-secundario
                .p-4
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3
                        p.mb-0 Activar protocolos de limpieza y desinfección en las instalaciones, equipos y utensilios.
        
        .row.justify-content-center
          .col-xl-12
            .row.justify-content-center.mb-5
              .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img63.svg' alt="" )
                  .tarjeta.color-secundario
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 Restringir el movimiento de animales y personal hasta controlar el evento.
              
              .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/img64.svg' alt="" )
                  .tarjeta.color-secundario
                    .p-4
                      .row.justify-content-center.mb-3
                        .col-auto
                          .py-2.px-3
                            p.mb-0 Realizar una investigación interna, tomar acciones correctivas y registrar los eventos en bitácoras técnicas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo de crisis ambientales en sistemas de producción lechera
        
        p.mb-5 Las <strong>crisis ambientales</strong> comprometen los recursos naturales del predio, generan impactos negativos en la comunidad y pueden alterar la continuidad del sistema productivo. Algunas de las situaciones más frecuentes incluyen:  

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0.style___box_3.ajuste___box_2(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img65.jpg', alt="" style="max-width: 400px").m-auto 
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Contaminación de fuentes hídricas o suelos por aguas residuales mal manejadas.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Sequías, inundaciones o heladas que afectan el acceso al agua y la alimentación del hato.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Almacenamiento inadecuado de residuos peligrosos o medicamentos vencidos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Quejas de comunidades vecinas por olores, ruidos o presencia de vectores.</li>
                </ul>
    
    h5.mb-5 Las acciones clave en un plan de emergencia ambiental deben contemplar:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_4(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Activar sistemas de drenaje, zanjas de contención o barreras físicas para evitar escurrimientos contaminantes.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Racionar agua potable, reubicar temporalmente animales o utilizar fuentes de agua de emergencia.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Informar a la autoridad ambiental local (CAR o Secretaría de Ambiente).</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Implementar prácticas correctivas como compostaje, reforestación, control de olores y disposición técnica de residuos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Registrar la contingencia y actualizar el Plan de Manejo Ambiental del predio.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img66.jpg', alt="" style="max-width: 400px").m-auto 
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 Elementos básicos que debe contener todo plan de emergencia en BPG
    
    p.mb-5 Un <strong>plan de emergencia BPG</strong> debe estar estructurado técnicamente y adaptado a las condiciones del predio. Los elementos fundamentales que deben incluirse son:

    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img67.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Control de escurrimientos
                p.mb-0 Activar sistemas de drenaje, zanjas de contención o barreras físicas para evitar la dispersión de contaminantes.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img68.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Gestión del recurso hídrico
                p.mb-0 Racionar el agua potable disponible, reubicar temporalmente a los animales o utilizar fuentes alternativas de emergencia.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img69.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Notificación oficial
                p.mb-0 Informar de inmediato a la autoridad ambiental correspondiente (CAR o Secretaría de Ambiente).
              
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Medidas correctivas
                p.mb-0 Implementar prácticas como compostaje, reforestación, control de olores y disposición técnica de residuos.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img71.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Documentación y seguimiento
                p.mb-0 Registrar el evento y actualizar el Plan de Manejo Ambiental del predio, incorporando las lecciones aprendidas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Importancia y función del plan de contingencia en el sistema productivo
        
        p.mb-5 En el contexto de las BPG, el <strong>plan de contingencia</strong> permite organizar de forma efectiva la respuesta ante situaciones inesperadas que puedan afectar la producción lechera. Su función es <strong>proteger el sistema de producción</strong>, garantizar el bienestar animal, prevenir riesgos sanitarios y ambientales, y asegurar la continuidad operativa del predio. 
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_6(data-aos="zoom-in")
          .col-xl-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src='@/assets/curso/temas/img72.svg' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Este tipo de planificación no solo responde a un compromiso técnico, sino que fortalece la credibilidad del sistema frente a consumidores, proveedores y autoridades regulatorias.
    
    .fondo___color_4
      .px-5
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Términos clave en la gestión del riesgo en predios lecheros
    
        p.mb-5 Para comprender e implementar correctamente los protocolos de emergencia, es importante familiarizarse con los siguientes conceptos clave en gestión del riesgo:
    
    
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img73.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Urgencia
            p.mb-0 Evento no previsto que requiere atención inmediata. Ejemplo: caída del sistema de refrigeración o aparición de mastitis aguda.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img74.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Emergencia
            p.mb-0 Evento adverso que puede ser controlado por el equipo del predio. Ejemplo: corte eléctrico, fuga de agua o intoxicación por forraje.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img75.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Vulnerabilidad
            p.mb-0 Condición que hace al predio susceptible al daño. Ejemplo: infraestructura deficiente, falta de sombra, mal estado del tanque de leche.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img76.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Amenaza
            p.mb-0 Evento potencial que puede causar un daño. Ejemplo: heladas, brotes sanitarios, contaminación de pozos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img77.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgo
            p.mb-0 Resultado de la interacción entre amenaza y vulnerabilidad.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Desastre
            p.mb-0 Evento de gran magnitud que supera la capacidad de respuesta del predio. Ejemplo: inundación total, brote de brucelosis en todo el hato.

        p.mb-0 La <strong>existencia y activación oportuna</strong> de planes de emergencia y contingencia refuerza el cumplimiento normativo exigido por el ICA y mejora la capacidad de respuesta ante eventos críticos. Además, protege la inocuidad de la leche, preserva el medio ambiente, garantiza el bienestar animal y asegura la sostenibilidad y continuidad del sistema de producción lechera.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
