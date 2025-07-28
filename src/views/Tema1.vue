<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Buenas prácticas ganaderas bovinas en la producción de leche

    .fondo___color_1
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.style___box_2(data-aos="fade-right")
            p.mb-0 Las Buenas Prácticas Ganaderas (BPG) aplicadas a la producción de leche bovina comprenden un conjunto de lineamientos técnicos, sanitarios y ambientales que buscan asegurar una producción inocua, trazable, responsable y respetuosa con el medio ambiente. Su implementación tiene como propósito principal proteger la salud pública, garantizar el bienestar animal y conservar los recursos naturales, estableciendo condiciones adecuadas en todas las etapas del proceso productivo.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img2.png', alt="" style="max-width: 295px").m-auto

        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img3.svg', alt="" style="max-width: 85px").m-auto
          .col-xl
            p.mb-0 Desde el punto de vista normativo, el Instituto Colombiano Agropecuario (ICA) establece los requisitos para que las unidades pecuarias lecheras apliquen procedimientos que minimicen los riesgos de contaminación y mantengan la calidad del producto. Esto abarca el manejo del hato, la higiene en el ordeño, la alimentación, el uso racional de medicamentos, así como el almacenamiento y transporte de la leche. Bajo este enfoque, la evaluación y el monitoreo se convierten en herramientas clave para verificar el cumplimiento y promover mejoras continuas.

        .row.align-items-center
          .col-xl
            p.mb-0 La implementación efectiva de las BPG demanda una gestión dinámica, con procesos de evaluación y seguimiento permanente, que permitan anticipar riesgos, corregir desviaciones y fortalecer prácticas exitosas. Este modelo impulsa la cultura del autocontrol, mejora la trazabilidad, facilita el acceso a certificaciones oficiales y refuerza la competitividad del sector lechero. De esta manera, las BPG trascienden su carácter técnico para convertirse en un componente estratégico de sostenibilidad y desarrollo agropecuario.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img4.png', alt="" style="max-width: 190px").m-auto

    <!-- BLOQUE 1 -->
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Alcance de las Buenas Prácticas Ganaderas en la producción de leche

    p.mb-5 Las <strong>Buenas Prácticas Ganaderas (BPG)</strong> en la producción de leche constituyen un conjunto de acciones orientadas a garantizar la obtención de leche cruda inocua, de alta calidad, trazable y producida bajo condiciones ambientalmente sostenibles. Su implementación responde a lo dispuesto por el <strong>Instituto Colombiano Agropecuario (ICA)</strong>, particularmente en la <strong>Resolución 67449 de 2022</strong>, que establece los requisitos sanitarios para la producción primaria de leche cruda destinada al consumo humano.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este conjunto de prácticas representa una estrategia articulada que integra la gestión técnica, el control sanitario, el bienestar animal, la sostenibilidad ambiental y la trazabilidad del producto. Sin embargo, para que estos objetivos se conviertan en resultados verificables, es indispensable aplicar mecanismos sistemáticos de evaluación y monitoreo que permitan comprobar el grado de cumplimiento y eficacia de las acciones implementadas.

    .row.align-items-center.m-0.mb-5
      .col-xl.style___box_1.ajuste___box_1(data-aos="fade-right")
        p.mb-0 La <strong>evaluación</strong> consiste en el análisis detallado del estado de implementación de las BPG mediante herramientas como listas de chequeo, auditorías internas o externas, revisión documental y observación directa. A través de esta práctica, es posible detectar desviaciones, identificar riesgos sanitarios, establecer planes de mejora continua y asegurar el cumplimiento de los estándares exigidos. Por su parte, el <strong>monitoreo</strong> implica un seguimiento periódico y planificado que permite analizar el comportamiento de las prácticas a lo largo del tiempo, anticipar fallos y garantizar la sostenibilidad de las acciones correctivas.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img6.png', alt="" style="max-width: 260px").m-auto
    
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img7.svg', alt="" style="max-width: 85px").m-auto
      .col-xl
        p.mb-0 La evaluación constante de las BPG tiene un impacto directo sobre la calidad e inocuidad del producto obtenido. Asegurar una leche libre de contaminantes, proveniente de animales sanos, bajo condiciones de producción controladas y ambientalmente responsables, es un factor crítico para proteger la salud del consumidor, cumplir con los parámetros normativos nacionales e internacionales y fortalecer la competitividad del sector.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
      .col
        h3 Objetivos clave de las BPG en predios lecheros

    p.mb-5 A continuación se describen los principales objetivos que orientan la implementación de las Buenas Prácticas Ganaderas en los sistemas de producción lechera:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Garantizar la inocuidad de la leche cruda
                p.mb-0 Implica prevenir la presencia de contaminantes físicos, químicos y biológicos, asegurando que el producto cumpla con los parámetros de seguridad alimentaria establecidos. Este aspecto es verificado mediante muestreos, análisis de laboratorio y registros de cumplimiento evaluados periódicamente.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Prevenir y controlar enfermedades del hato y zoonosis
                p.mb-0 Requiere implementar programas sanitarios que incluyan vacunación, vigilancia epidemiológica, control de ingresos y salidas del hato, y seguimiento a enfermedades zoonóticas como brucelosis y tuberculosis. La efectividad de estos programas se mide mediante registros sanitarios, pruebas diagnósticas y resultados de inspecciones veterinarias.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Evitar residuos de medicamentos en la leche
                p.mb-0 Consiste en promover el uso racional y documentado de productos veterinarios, respetando los periodos de retiro. La verificación se realiza mediante la revisión de bitácoras, registros de tratamientos y pruebas aleatorias de residuos en leche cruda.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Proteger el medio ambiente
                p.mb-0 Supone aplicar prácticas sostenibles que reduzcan el impacto ambiental, como el manejo adecuado de residuos, la conservación del recurso hídrico y el control de emisiones. La evaluación ambiental debe incluir indicadores medibles y observaciones de campo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Asegurar el bienestar animal
                p.mb-0 Implica establecer condiciones adecuadas de alojamiento, alimentación, sanidad y manejo del ganado, con un enfoque preventivo y ético. Estas condiciones se evalúan mediante indicadores de comportamiento, salud, mortalidad, productividad y registros de intervenciones veterinarias.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fortalecer la trazabilidad del hato y del producto
                p.mb-0 Exige establecer sistemas de identificación y seguimiento que permitan conocer el origen, historial sanitario y condiciones de producción de la leche. Esta trazabilidad se evalúa a través de registros actualizados, etiquetas, sistemas informáticos y procedimientos documentados.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Mejorar la calidad y competitividad del sector lechero
                p.mb-0 Requiere elevar los niveles de productividad y eficiencia mediante la implementación de prácticas técnicas validadas. El proceso de evaluación incluye el análisis de indicadores productivos (litros de leche por vaca/día, calidad composicional, recuentos bacterianos), acceso a mercados, certificaciones logradas y cumplimiento de los requisitos comerciales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Estrategias prácticas que contribuyen a una mayor eficiencia en la producción láctea

    .fondo___color_2
      .px-5
        p.mb-5 Para optimizar los procesos productivos y alcanzar un desempeño sostenible, es recomendable aplicar estrategias prácticas como las siguientes:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0.style___box_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img18.jpg', alt="" style="max-width: 400px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Asegure la calidad con procesos de control</strong>, estableciendo protocolos de verificación y puntos críticos de monitoreo.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Haga su línea de producción más eficiente</strong>, reduciendo desperdicios, optimizando recursos y adoptando tecnologías apropiadas.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Reduzca costos identificando oportunidades</strong>, a través del análisis de gastos operativos y la racionalización de insumos.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Empodere a su personal con buenas prácticas y formación</strong>, promoviendo la capacitación continua y la participación activa en los procesos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-fill-drip"></i></span><strong>Evalúe y mejore constantemente el rendimiento</strong>, aplicando indicadores de desempeño y fomentando la cultura de mejora continua.</li>
                </ul>
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img8.svg" style="max-width: 60px").m-auto
          .col
            h3 Importancia del producto obtenido en el sistema de producción
        
        p.mb-5 La leche, como alimento esencial en la dieta humana, debe ser producida bajo condiciones que garanticen su calidad e inocuidad. Cuando el producto es obtenido mediante procesos controlados, monitoreados y evaluados rigurosamente, se generan beneficios significativos:

    .fondo___img
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img21.svg' style="max-width: 90px").m-auto
                p.mb-0 Contribuye a la <strong>seguridad alimentaria y la salud pública</strong>, evitando enfermedades transmitidas por alimentos.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img22.svg' style="max-width: 90px").m-auto
                p.mb-0 Cumple con los <strong>estándares de exportación</strong>, facilitando el acceso a mercados exigentes.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
                p.mb-0 Genera <strong>confianza en el consumidor</strong>, quien demanda productos trazables, seguros y responsables con el ambiente y el bienestar animal.
              
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
                p.mb-0 Fortalece la <strong>imagen del productor y de la cadena láctea</strong> ante entidades de inspección, vigilancia y control.

              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
                p.mb-0 Aporta al cumplimiento de <strong>objetivos de sostenibilidad, competitividad y mejora continua</strong> del sector lechero.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
