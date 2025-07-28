<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Contingencia en el monitoreo de BPG en la producción de leche

    p.mb-5 En el contexto de la implementación de las <strong>Buenas Prácticas Ganaderas (BPG)</strong> en predios dedicados a la producción de leche, el concepto de contingencia adquiere una relevancia estratégica. 
    
    .fondo___color_1
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 Una contingencia es todo evento inesperado que interrumpe el desarrollo normal de los procesos productivos, sanitarios, ambientales o administrativos, y que puede poner en riesgo aspectos clave como la <strong>inocuidad</strong> del producto, la salud del hato, la trazabilidad, el bienestar animal y el cumplimiento normativo. Aunque no siempre se materializa, la posibilidad de ocurrencia de una contingencia exige estar preparados mediante planes estructurados, prácticos y específicos para cada tipo de amenaza.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img79.png', alt="" style="max-width: 295px").m-auto
        
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img80.svg', alt="" style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Una <strong>contingencia</strong>, dentro del marco de BPG, es un evento de carácter imprevisto que afecta negativamente el funcionamiento regular del sistema productivo. Estas situaciones pueden tener diversas causas, y es fundamental conocer su origen para diseñar respuestas efectivas. Las principales fuentes de contingencia en los sistemas lecheros se clasifican de la siguiente manera:
        
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Sanitarios
            p.mb-0 Brotes de brucelosis, tuberculosis, mastitis; residuos de antibióticos; fallas en vacunación o cuarentena.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Ambientales
            p.mb-0 Contaminación de fuentes hídricas; mal manejo de residuos o productos vencidos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img83.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Climáticos
            p.mb-0 Sequías, inundaciones, olas de calor que afectan la producción, el confort y la alimentación del hato.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img84.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Operativos
            p.mb-0 Fallos en el sistema de ordeño, refrigeración, manejo de registros o suministro de insumos esenciales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img85.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Sociales y económicas
            p.mb-0 Bloqueos, conflictos sociales, aumento de costos, escasez de insumos o cambios regulatorios.

    <!-- BLOQUE 1 -->
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Función principal

    .row.align-items-center.mb-5.m-0
      .col-xl.style___box_2.ajuste___box_4(data-aos="fade-right")
        p.mb-0 El <strong>plan de contingencia</strong> es un documento técnico-operativo diseñado para guiar la respuesta del predio ante eventos adversos. Su función principal es <strong>garantizar la continuidad operativa</strong>, preservar la calidad e inocuidad del producto, y mantener el bienestar del hato y la sostenibilidad del sistema.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img86.png', alt="" style="max-width: 295px").m-auto
    
    p.mb-5 En un predio lechero certificado en BPG, este plan permite anticipar, enfrentar y mitigar cualquier evento que comprometa los principios fundamentales de las buenas prácticas: sanidad, trazabilidad, sostenibilidad y responsabilidad ambiental. Los pasos esenciales para su formulación son:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_3.ajuste___box_5(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img87.jpg', alt="" style="max-width: 500px").m-auto
          .col-xl
            ol.lista-ol--cuadro
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span A
                | Identificar amenazas y riesgos potenciales.
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span B
                | Analizar el impacto y la probabilidad de ocurrencia.
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span C
                | Priorizar los riesgos más críticos.
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span D
                | Definir acciones de respuesta, asignar responsables y recursos.
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span E
                | Comunicar y capacitar al equipo.
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span F
                | Implementar y monitorear los procedimientos establecidos.
              li.ajuste___box_6(data-aos="fade-right")
                .lista-ol--cuadro__vineta
                  span G
                | Evaluar y actualizar el plan después de cada evento ocurrido.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Tipos de contingencia más comunes en predios lecheros
    
    p.mb-5 Los predios deben estar preparados para enfrentar distintas clases de contingencia, cada una con características específicas:

    .fondo___color_5
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Sanitarias
            p.mb-0 Brotes de enfermedades infecciosas, presencia de residuos en leche, fallas en planes sanitarios, agua contaminada.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Ambientales
            p.mb-0 Contaminación del suelo o fuentes hídricas, mal manejo de estiércol, afectación a la biodiversidad.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img83.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Climáticas
            p.mb-0 Eventos extremos como sequías prolongadas, inundaciones, olas de calor o temperaturas elevadas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img84.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Operativas
            p.mb-0 Fallas técnicas en equipos, cortes de energía eléctrica, pérdida de registros o información crítica.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img85.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Sociales o económicas
            p.mb-0 Paros o bloqueos, conflictos en la región, aumentos en los costos de insumos, cambios o restricciones regulatorias.

        <!-- BLOQUE 3 -->
        Separador
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Protocolos comunes dentro de un plan de contingencia en predios lecheros

        p.mb-5 Cada tipo de contingencia requiere protocolos específicos de respuesta, los cuales deben estar documentados, actualizados y ser conocidos por todo el personal operativo del predio.

        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img93.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Brotes sanitarios
            p.mb-0 Aislar animales afectados, notificar al ICA, reforzar medidas de bioseguridad y suspender la leche del grupo afectado.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img94.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Contaminación de leche
            p.mb-0 Suspender ordeño, tomar muestras para análisis, eliminar leche contaminada, rastrear la causa.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img95.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Emergencias ambientales
            p.mb-0 Activar sistemas de contención, proteger fuentes hídricas, evacuar animales si es necesario.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img96.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Fallas técnicas
            p.mb-0 Reparar equipos o activar planes alternos (centros de enfriamiento o almacenamiento de emergencia).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img97.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Eventos climáticos extremos
            p.mb-0 Controlar densidad animal, garantizar agua, ofrecer sombra o refugio, ajustar dieta y manejo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img98.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Inseguridad rural o bloqueos
            p.mb-0 Activar redes comunitarias, comunicar a autoridades y proteger el predio según protocolos establecidos.

    <!-- BLOQUE 4 -->
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Elementos clave que debe contener todo plan de contingencia en BPG
    
    p.mb-5 Para ser efectivo, todo plan de contingencia debe incorporar los siguientes componentes fundamentales:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_4(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-2">
              <li class="mb-3 mt-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Diagnóstico de amenazas y vulnerabilidades del predio.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Procedimientos operativos normalizados (PON) por tipo de evento.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Asignación de funciones y responsables claramente definidos.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Inventario actualizado de recursos disponibles: insumos veterinarios, rutas, equipos y contactos clave.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Canales de comunicación interna y externa, incluyendo contacto con el ICA, aliados estratégicos y comunidad vecina.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Registros detallados de las acciones ejecutadas durante la contingencia.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Estrategias de recuperación, lecciones aprendidas y ajustes al plan como parte del proceso de mejora continua.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img99.jpg', alt="" style="max-width: 400px").m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Conceptos fundamentales en la gestión de contingencias

    .fondo___color_4
      .px-5
        p.mb-5 Para una adecuada planificación y evaluación de las contingencias, es importante manejar con precisión los conceptos asociados a la gestión del riesgo:

        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img100.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Urgencia
            p.mb-0 Evento imprevisto que requiere atención inmediata.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img101.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Emergencia
            p.mb-0 Situación crítica que puede ser manejada con los recursos internos del predio.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Amenaza
            p.mb-0 Evento o condición que representa una posibilidad de daño.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Vulnerabilidad
            p.mb-0 Grado de exposición o susceptibilidad del predio ante una amenaza.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgo
            p.mb-0 Resultado de la interacción entre una amenaza y la vulnerabilidad existente.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img105.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Desastre
            p.mb-0 Evento de gran magnitud que sobrepasa la capacidad de respuesta del predio y requiere intervención externa.
        
        p.mb-0 Con esta sección, se refuerza el enfoque preventivo, reactivo y adaptativo del sistema BPG, asegurando que cada predio cuente con las herramientas necesarias para enfrentar situaciones adversas con efectividad, minimizando sus impactos y garantizando la calidad y sostenibilidad del sistema productivo lechero.

    <!-- BLOQUE 6 -->
    Separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.6 Acciones y estrategias en la gestión de contingencias en BPG Leche

    p.mb-5 La gestión de contingencias en predios lecheros certificados en Buenas Prácticas Ganaderas (BPG) implica no solo la identificación de riesgos y la reacción ante eventos adversos, sino también la implementación de acciones correctivas que fortalezcan la operación del sistema productivo. Estas acciones deben ser técnicamente fundamentadas, ejecutadas con responsabilidad y documentadas adecuadamente para garantizar trazabilidad, inocuidad y cumplimiento normativo.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 Reglamentación aplicable a la implementación de acciones correctivas

    p.mb-5 En Colombia, la normativa sanitaria exige que todo producto de origen animal destinado al consumo humano cumpla con criterios de inocuidad, trazabilidad y calidad verificable. Estas disposiciones también regulan las acciones correctivas que deben aplicarse ante fallas en la producción primaria de leche. Las principales normas vigentes son:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_4(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-2">
              <li class="mb-3 mt-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Resolución ICA 67449 de 2022</strong>. Establece los requisitos para la certificación en BPG en predios lecheros.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Decreto 1500 de 2007</strong>. Regula el sistema oficial de inspección, vigilancia y control sanitario en la producción primaria.</li>
              <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Resolución 0240 de 2013</strong>. Reglamenta el uso de medicamentos veterinarios.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Resolución 000138 de 2023</strong>. Define los lineamientos sobre el uso prudente de antimicrobianos en animales.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img106.jpg', alt="" style="max-width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 Causas comunes que originan acciones correctivas en predios lecheros

    p.mb-5 Las acciones correctivas se activan ante la detección de fallas, desviaciones o riesgos que comprometen la eficiencia del sistema BPG. Estas causas pueden clasificarse en las siguientes categorías:

    .bg--img_03.mb-3
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img107.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Servicios no conformes").ajuste-cajaAcordion
              p.mb-0 Presencia de residuos en la leche, falta de trazabilidad o alteraciones en parámetros fisicoquímicos o microbiológicos.
            .row(titulo="Fallas operativas y documentales").ajuste-cajaAcordion
              p.mb-0 Registros incompletos, pérdida de información técnica o incumplimiento de procedimientos establecidos.
            .row(titulo="Auditorías internas o externas").ajuste-cajaAcordion
              p.mb-0 No conformidades identificadas por el ICA o entidades certificadoras durante procesos de verificación.
            .row(titulo="Incumplimiento normativo").ajuste-cajaAcordion
              p.mb-0 Inobservancia de requisitos legales sobre bioseguridad, uso de medicamentos, bienestar animal o calidad sanitaria.
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Accidentes o eventos críticos").ajuste-cajaAcordion
              p.mb-0 Situaciones inesperadas que afectan la sanidad del hato, el ambiente o la inocuidad del producto.
            .row(titulo="Retroalimentación del personal o usuarios").ajuste-cajaAcordion
              p.mb-0 Quejas, observaciones o sugerencias provenientes de operarios, técnicos, consumidores o visitantes.
            .row(titulo="Indicadores de desempeño (KPI)").ajuste-cajaAcordion
              p.mb-0 Desviaciones persistentes en métricas como recuento celular somático, calidad del agua, productividad o uso de insumos.
            .row(titulo="Medición de satisfacción del cliente o auditor").ajuste-cajaAcordion
              p.mb-0 Resultados negativos en encuestas, entrevistas o evaluaciones frente a expectativas comerciales o estándares de certificación.
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img108.png", alt="" style="width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de acciones correctivas aplicadas en BPG Leche

    p.mb-5 Las acciones correctivas pueden ser <strong>inmediatas</strong> (reactivas) o <strong>preventivas</strong> (proactivas), dependiendo de si el evento ya se ha presentado o si se busca evitar su ocurrencia futura.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Tipos de acciones correctivas en la gestión de no conformidades
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Tipo de acción
                th.ajuste-border-tabla Descripción
                th Ejemplos
            tbody
              tr
                td.ajuste-border-tabla.texto-left <strong>Correctiva inmediata</strong>
                td.ajuste-border-tabla.texto-left Se aplica tras la aparición de una no conformidad o situación crítica.
                td.texto-left 
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Retiro de leche contaminada.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Suspensión del ordeño por mala higiene.</li>
                  </ul>
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>Correctiva preventiva</strong>
                td.ajuste-border-tabla.texto-left Se orienta a evitar que el problema se repita o se materialice.
                td.texto-left 
                  <ul class="fa-ul estilo___ul mb-0">
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Mantenimiento de equipos.</li>
                    <li class="mb-2"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Capacitaciones.</li>
                    <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span>Mejora en protocolos de bioseguridad.</li>
                  </ul>

    .fondo___color_6
      .px-5
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Metodología para la implementación de acciones correctivas

        p.mb-5 Para que las acciones correctivas sean eficaces, deben basarse en un proceso sistemático de análisis y seguimiento. A continuación, se orienta su aplicación:

        .row.mb-3
          .col-xl-4(data-aos="zoom-in")
            .style___box_7.h-100.ajuste___box_8
              h4.mb-0.text-center Reconocimiento de la no conformidad o riesgo
              p.mb-0 Evaluar hallazgos, reportes o indicadores que revelen una desviación.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_7.h-100.ajuste___box_7
              h4.mb-0.text-center Análisis de causa raíz
              p.mb-0 Utilizar herramientas como los “5 ¿Por qué?” o el diagrama de Ishikawa para identificar el origen del problema.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_7.h-100.ajuste___box_8.ajuste___box_7
              h4.mb-0.text-center Diseño de la acción correctiva
              p.mb-0 Formular soluciones técnicas sostenibles para erradicar la causa.

        .row.justify-content-center.mb-5
          .col-xl-12
            .row.justify-content-center
              .col-xl-4(data-aos="zoom-in")
                .style___box_7.h-100.ajuste___box_7
                  h4.mb-0.text-center Elaboración del plan de acción
                  p.mb-0 Asignar responsables, definir recursos necesarios y establecer fechas de ejecución.
              .col-xl-4(data-aos="zoom-in").espacio___movil_3
                .style___box_7.h-100.ajuste___box_7
                  h4.mb-0.text-center Seguimiento y verificación
                  p.mb-0 Evaluar la eficacia de la acción implementada y verificar que no haya reincidencia.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Aplicación práctica y métodos de evaluación de las acciones correctivas

    .fondo___color_4
      .px-5
        p.mb-5 La evaluación de la efectividad de las acciones correctivas debe basarse en evidencia técnica y registros verificables. A continuación se presentan los criterios clave:

        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img109.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Indicadores de rendimiento (KPI)
            p.mb-0 Permiten detectar desviaciones repetitivas (por ejemplo, rechazos de leche o altos niveles de células somáticas).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img110.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Registros técnicos y sanitarios
            p.mb-0 Ayudan a identificar reincidencias en fallas como calidad del agua, control de mastitis o manejo de residuos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img111.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Informes del personal
            p.mb-0 Reportes operativos del equipo de campo o administrativo que revelen fallos estructurales o técnicos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img112.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Auditorías internas o externas
            p.mb-0 Evaluación de conformidades o no conformidades según los criterios del ICA o entidades certificadoras.
        
        p.mb-5 En los predios lecheros certificados, la respuesta oportuna y estructurada ante situaciones críticas es esencial para proteger la inocuidad de la leche, el bienestar animal y la viabilidad productiva. Las acciones correctivas deben implementarse en dos niveles: <strong>inmediatas</strong>, para contener el problema en el corto plazo, y <strong>preventivas</strong>, para evitar su recurrencia. A continuación se presentan ejemplos concretos de este enfoque:
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span los aplicados de acciones correctivas en predios lecheros
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla Situación crítica
                th.ajuste-border-tabla Acción correctiva inmediata
                th Acción correctiva preventiva
            tbody
              tr
                td.ajuste-border-tabla.texto-left Mastitis subclínica elevada
                td.ajuste-border-tabla.texto-left Aislamiento de animales afectados.
                td.texto-left Capacitación en rutinas de ordeño e higiene de pezones.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Leche con residuos de antibióticos
                td.ajuste-border-tabla.texto-left Retención y análisis de la leche.
                td.texto-left Calendario de retiro de medicamentos y controles por lote.
              tr
                td.ajuste-border-tabla.texto-left Fallo en la cadena de frío
                td.ajuste-border-tabla.texto-left Detención de la recolección y enfriamiento de emergencia.
                td.texto-left Mantenimiento programado del tanque de enfriamiento.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Agua no potable para el ordeño
                td.ajuste-border-tabla.texto-left Uso temporal de agua segura (hervida o embotellada).
                td.texto-left Mejoras en el sistema de captación y análisis físico-químico del agua.
    
    p.mb-0.style___box_1(data-aos="zoom-in") Las <strong>acciones correctivas</strong>, cuando son oportunas, bien planificadas y evaluadas, no solo corrigen fallas puntuales, sino que contribuyen a establecer una cultura de mejora continua en el predio. Esto refuerza la confianza del consumidor, fortalece el cumplimiento normativo y posiciona al productor como un actor comprometido con la calidad, la sostenibilidad y la responsabilidad sanitaria. Una finca que actúa con base en protocolos documentados, indicadores técnicos y planes de mejora se convierte en una unidad productiva sólida, competitiva y resiliente frente a los desafíos del sistema lechero moderno.
    
</template>

<script>
export default {
  name: 'Tema4',
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
