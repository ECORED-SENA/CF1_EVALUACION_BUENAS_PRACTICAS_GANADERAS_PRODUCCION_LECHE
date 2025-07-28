<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La producción de leche bovina en Colombia enfrenta el desafío de cumplir con estándares nacionales e internacionales que garanticen la inocuidad del producto, el bienestar animal y la sostenibilidad ambiental. En este contexto, las Buenas Prácticas Ganaderas (BPG) representan un conjunto de lineamientos técnicos y sanitarios que permiten estructurar una producción más segura, responsable y trazable. Implementarlas no solo implica aplicar procedimientos adecuados, sino también evaluar su cumplimiento de manera rigurosa y continua.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo tiene como propósito fortalecer las competencias de técnicos, operarios y productores del sector lácteo para monitorear y verificar la implementación de las BPG, con base en lo establecido por el Instituto Colombiano Agropecuario (ICA). A través del análisis de riesgos sanitarios y ambientales, el uso de indicadores de gestión, el diseño de planes de contingencia y la aplicación de metodologías de seguimiento, se busca construir una cultura de mejora continua en los predios lecheros.

    .row.align-items-center.m-0.style___box_1(data-aos="zoom-in")
      .col-xl
        p.mb-0 Evaluar las prácticas ganaderas permite detectar desviaciones, aplicar acciones correctivas y reforzar los aspectos clave del sistema productivo. Con ello, se promueve una ganadería moderna y competitiva, capaz de responder a las exigencias del mercado, proteger la salud pública y garantizar un producto de alta calidad.
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img2.svg', alt="" style="max-width: 90px").m-auto
          
</template>

<script>
export default {
  name: 'Introduccion',
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
