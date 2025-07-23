<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Monitoreo en las Buenas Prácticas Ganaderas en la producción de leche


    

    
    <!-- BLOQUE 1 -->
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Definición y función técnica del monitoreo en predios certificados en BPG leche



      
    <!-- BLOQUE 2 -->
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Requisitos para un monitoreo eficaz en sistemas BPG leche




    <!-- BLOQUE 3 -->
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Clases de monitoreo en las Buenas Prácticas Ganaderas para la producción de leche




    <!-- BLOQUE 4 -->
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Procedimientos de monitoreo en predios lecheros




    <!-- BLOQUE 5 -->
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Metodologías de monitoreo en las BPG para producción de leche





</template>

<script>
export default {
  name: 'Tema6',
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
