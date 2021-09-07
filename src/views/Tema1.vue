<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 <i>Check-out</i>
    
    .row.mb-5
      .col-lg-6
        p.mb-3.text-bold Se denomina así al proceso en el que el huésped termina su estadía, liquida su cuenta y deja el hotel, culminando así el denominado ciclo del huésped. Este procedimiento se informa a los otros departamentos.
        p.mb-3  Aunque no existe una hora estándar, la mayoría de los establecimientos de alojamiento fijan su hora de check-out alrededor del medio día, ya que de esta depende también la implementación de una hora de check-in, teniendo en cuenta que la diferencia es el tiempo utilizado para aplicar los protocolos de limpieza y desinfección, garantizando la correcta asepsia al cliente que llega a ocupar la habitación. Una vez establecida la hora de salida, es importante comunicársela al huésped al momento de su ingreso al hotel, como parte del proceso de registro (check-in).
      .col-lg-6
        figure.mb-5(data-aos="fade-up")
          img(src="@/assets/curso/t1-i1.jpg", alt="imagen decorativa")
    
    




















    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
