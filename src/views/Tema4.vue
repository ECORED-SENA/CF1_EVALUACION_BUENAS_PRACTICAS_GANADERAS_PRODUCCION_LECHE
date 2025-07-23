<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Contingencia en el monitoreo de BPG en la producción de leche

    

    
    <!-- BLOQUE 1 -->
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Función principal



      
    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Tipos de contingencia más comunes en predios lecheros




    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Protocolos comunes dentro de un plan de contingencia en predios lecheros




    <!-- BLOQUE 4 -->
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Elementos clave que debe contener todo plan de contingencia en BPG




    <!-- BLOQUE 5 -->
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Conceptos fundamentales en la gestión de contingencias




    <!-- BLOQUE 6 -->
    Separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.6 Acciones y estrategias en la gestión de contingencias en BPG Leche




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
