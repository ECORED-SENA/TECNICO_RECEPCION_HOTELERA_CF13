<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Atención al cliente y manejo de PQRS
    
    .row.mb-5
      .col-lg-7
        p.mb-3.text-bold  Durante los módulos estudiados hasta ahora, se ha hecho un recorrido por las principales habilidades a desarrollar por el personal que labora en la recepción del hotel en los diferentes procesos operativos.
        p.mb-5  Pero hay una en particular que aplica transversalmente a toda la operación y en la que los recepcionistas son su principal actor, y es la que tiene que ver con la atención al cliente y el manejo de peticiones, quejas, reclamos y sugerencias.
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  Este manejo es crucial para garantizar una buena experiencia de alojamiento y se puede dar en cualquier momento dentro del ciclo del huésped, e incluso después de la salida del establecimiento.
      .col-lg-5
        figure.mb-5(data-aos="fade-up")
          img(src="@/assets/curso/t4-i1.jpg", alt="Mujer sonriendo en la recepción del hotel")



    #t_4_1.titulo-segundo
      h2 4.1 El cliente
    .row.mb-5
      .col-lg-7(data-aos="slide-up")
        .bloque-texto-d.color-secundario.p-4.mb-5
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular El cliente es la persona más importante para una empresa; debe ser el objeto de atención principal. Sin él, esta no podría cumplir la finalidad para la que ha sido constituida. El cliente es, por tanto, quien adquiere un servicio hotelero que satisface sus necesidades y, como resultado, recompra ese servicio, pero, además, tiene la voluntad de recomendarlo.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Corral, 2012)

        p.mb-3  En este sentido, todos los requerimientos que se reciben del cliente deben tener un apropiado tratamiento.
      .col-lg-5
        figure.mb-5(data-aos="slide-down")
          img(src="@/assets/curso/t4-i2.jpg", alt="Mujeres caminando en el lobby del hotel")


    Separador
    br
    br
    #t_4_2.titulo-segundo
      h2 4.2. Tipos de solicitudes
    .row.mb-5
      .col-lg-2(data-aos="flip-left")
        figure.mb-5
          img(src="@/assets/curso/t4-i2.jpg", alt="Mujeres caminando en el lobby del hotel")
      .col-lg-10(data-aos="slide-right")
        p.mb-0  En el día a día de la operación hotelera y cada vez que un cliente se acerca al counter de recepción o usa medios escritos o digitales para contactar al hotel, se genera una comunicación y es importante determinar qué tipo de contacto es el que está realizando el cliente, y de acuerdo con esto, manejarlo de la forma adecuada. Tener un sistema consolidado de gestión de PQRS brinda la oportunidad de fortalecer el servicio, mejorar la operatividad y brindar una excelente experiencia de usuario.

    figcaption.customCaption.mb-2 <b>Figura</b> Tipos de solicitudes
    .row.mb-5
      .col-lg-4



    Separador
    br
    br
    #t_4_3.titulo-segundo
      h2 4.3. Procedimiento de manejo


    Separador
    br
    br
    #t_4_4.titulo-segundo
      h2 4.4 Manual de PQRS


    Separador
    br
    br
    #t_4_5.titulo-segundo
      h2 4.5 Manejo de situaciones difíciles









    Separador
    br
    br
    #t_4_2.titulo-segundo
      h2 4.2 Tipos de solicitudes











    Separador
    br
    br
    #t_4_3.titulo-segundo
      h2 4.3. Procedimiento de manejo








    Separador
    br
    br
    #t_4_4.titulo-segundo
      h2 4.4 Manual de PQRS


    Separador
    br
    br
    #t_4_4.titulo-segundo
      h2 4.5. Manejo de situaciones difíciles













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
