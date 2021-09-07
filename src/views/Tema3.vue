<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Auditoría nocturna
    
    #t_3_1.titulo-segundo
      h2 3.1 Objetivo

    #t_3_2.titulo-segundo
      h2 3.2 El auditor nocturno

    #t_3_3.titulo-segundo
      h2 3.3 El proceso técnico

    #t_3_4.titulo-segundo
      h2 3.4 Reportes


































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

<style lang="sass" scoped></style>
