<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Procedimiento técnico
    
    .row.mb-5
      .col-lg-5
        p.mb-3.text-bold  La salida de los huéspedes del hotel puede ser un momento de verdad.
        p.mb-3  En algunas oportunidades, se experimentan largas filas, y, en general, se podría catalogar este instante como una prueba de la paciencia tanto del huésped como del cajero. Cuando ocupe esta posición, trate siempre de ponerse en el lugar del huésped; este enfoque le servirá a lo largo de su carrera en la industria hotelera y le permitirá dar un mejor servicio.
        p.mb-3  Este aparte le ayuda a desarrollar un entendimiento del procedimiento de pago de los huéspedes. Este no es un proceso difícil de entender y aplicar, sin embargo, requiere planificación para organizar los detalles de esta parte de la estancia del huésped. A continuación, se pueden apreciar los pasos básicos para realizar la salida del huésped de una forma técnica. Al seguir estos pasos, usted logrará dominar la rutina básica del proceso.

      .col-lg-7
        figure.mb-5(data-aos="fade-up")
          img(src="@/assets/curso/t2-i1.jpg", alt="imagen decorativa")
    
    




    

</template>

<script>
export default {
  name: 'Tema2',
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
