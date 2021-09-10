<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-5
        figure.mb-5(data-aos="fade-up")
          img(src="@/assets/curso/t0-i1.jpg", alt="imagen decorativa")
      .col-lg-7
        p.mb-3.text-bold(data-aos="fade-up")  Como ya se ha mencionado, la gestión financiera del hotel comienza y termina en la recepción. El proceso de <i>check-out</i> es el cierre de la estancia del huésped y requiere de toda la atención y agilidad para llevarlo a buen término.
        p.mb-3(data-aos="fade-up")  Comienza con el procesamiento preciso y oportuno de las cuentas de los huéspedes, además, esta responsabilidad se comparte con la oficina del contralor, para que esta información se provea al departamento financiero de una forma correcta. En los hoteles, existe el proceso de auditoría nocturna, el cual hace un seguimiento detallado a la actividad financiera de las cuentas del huésped.
        p.mb-3(data-aos="fade-up")  Para la elaboración de este componente, se abordaron varios autores conocidos en <i>check-out</i> y atención de PQRS, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del servicio de recepción hotelera.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
