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
    
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row(data-aos="slide-left")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t2-ic1.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              .h4 El cliente solicita el registro de salida
              p Una vez el huésped anuncia su retirada, se da inicio al procedimiento de pago. Pregunte al huésped sobre su estancia. Mantenga un buen contacto visual y escuche atentamente.            

          .row(data-aos="slide-right")
            .col-md-10
              .h4 Recuperar las llaves
              p De una forma cortés, se debe solicitar la llave y ubicarla en el respectivo <i>rack</i>. Si la solicitud se recibe telefónicamente, se debe ofrecer ayuda para bajar el equipaje y, en caso de respuesta positiva, informar al botones.

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t2-ic2.svg', alt='icono decorativo')

          .row(data-aos="slide-left")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t2-ic3.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              .h4 Revisión habitación
              p En paralelo con el proceso anterior, el departamento de habitaciones debe realizar la inspección física del estado en que se deja la unidad habitacional, su equipamiento y dotación. De igual manera, se verifica que el huésped no haya olvidado nada en su habitación.         

          .row(data-aos="slide-right")
            .col-md-10
              .h4 Anunciar <i>check-out</i> a las áreas
              p Avisar a las demás áreas del hotel que la habitación va siendo desalojada, para que los centros de facturación cierren las cuentas que tengan abiertas y el departamento encargado verifique los últimos consumos de minibar.

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t2-ic4.svg', alt='icono decorativo')

          .row(data-aos="slide-left")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t2-ic5.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              .h4 Organizar la cuenta y últimos cargos
              p Una vez recibidos los reportes de las diferentes áreas, se procede a realizar los cargos a que haya lugar, confirmando esto con el huésped. En caso de requerirse más de una factura, se realiza y/o verifica la distribución de cargos por cuenta.
          .row(data-aos="slide-right")
            .col-md-10
              .h4 Pre -cuenta
              p Ya verificados los folios y los cargos, se muestra al huésped esta información para que él la valide. Es importante que en los casos de CxC o cuenta compañía que se encuentran respaldados por un Bill to, la cuenta que va para la empresa quede firmada. 

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t2-ic6.svg', alt='icono decorativo')

          .row(data-aos="slide-left")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t2-ic7.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              .h4 Cierre de la cuenta
              p Con todo revisado y aprobado, el cajero procede a corroborar la forma de pago, realizando el respectivo proceso de cobro e ingresándolo al sistema para la emisión de la respectiva factura.

    .row.mb-5.justify-content-center
      .col-lg-10  
        .tarjeta.color-primario.p-4(data-aos="flip-up")
          .row
            .col-lg-2
              figure
                img.nW(src='@/assets/curso/t2-ic8.svg', alt='icono decorativo')
            .col-lg-10    
              p.mb-3  En la mayoría de los sistemas PMS, este proceso es bastante intuitivo, lo que le ayudará a minimizar los tiempos en el proceso. A continuación, puede ver un proceso de <i>check-out</i> en un sistema de gestión de propiedad.
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=QTEzACI8q1g" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Vea aquí el video</b> https://www.youtube.com/watch?v=QTEzACI8q1g









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
