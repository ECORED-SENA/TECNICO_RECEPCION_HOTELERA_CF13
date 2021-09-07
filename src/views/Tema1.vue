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
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  Como se mencionó, el horario establecido para la salida del huésped depende de los parámetros de cada hotel, sin embargo, las necesidades de permanencia del huésped son variadas, por lo que la mayoría de ellos ofrecen la posibilidad de dejar allí el equipaje hasta el momento de emprender el viaje para dejar el destino visitado. En caso de presentarse esta situación, el hotel debe disponer de un espacio para la custodia temporal de las pertenencias del huésped y contar con un mecanismo de identificación de estas, que usualmente es un sticker en el cual se plasma la información básica y posteriormente se relaciona en la bitácora de botones o recepción, según aplique la responsabilidad.


    #t_1_1.titulo-segundo
      h2 1.1  <i>Late check-out  </i>
    .row.mb-5
      .col-lg-3
        figure.mb-5(data-aos="slide-left")
          img(src="@/assets/curso/t1-i2.svg", alt="imagen decorativa")
      .col-lg-9
        p.mb-3.text-bold(data-aos="fade-up") El <i>late check-out</i> se presenta cuando el huésped solicita dejar la habitación más tarde de lo establecido.
        p.mb-3(data-aos="fade-up")  Este es un servicio cuya demanda está en aumento en ciertos destinos, ya que ofrece nuevas posibilidades a la hora de organizar el viaje. Con ello, se permite al cliente dejar tarde la habitación: a las dos (2:00 pm) o incluso a las seis (6:00 pm), según el caso. Esto da nuevas oportunidades a los clientes, dependiendo de su motivo de viaje; unos podrán disfrutar de su última noche en el hotel y no tener que madrugar, otros podrán aprovechar la mañana tranquilamente, sin tener que estar pendientes de la hora de salida.
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  También es un servicio muy útil para clientes que tengan una reunión por la mañana del día de check-out, estos podrán dejar sus maletas en la habitación y, después de la reunión, volver al hotel para darse una ducha o descansar un rato antes de salir. Este servicio se ofrece según disponibilidad y puede conllevar un costo. El early check-in (registro antes de la hora) es una práctica menos extendida pero que también existe.


    Separador
    br
    br
    

    #t_1_2.titulo-segundo
      h2 1.2  Confirmación de salidas
    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos="slide-left")
          img(src="@/assets/curso/t1-ic1.svg", alt="imagen decorativa")
      .col-lg-10
        p(data-aos="slide-right") Es un procedimiento que se debe realizar en el turno de la tarde, cuyo propósito es verificar que las personas con fecha de salida para ese día y que aún no han legalizado su salida lo hagan o informen si van a tomar el servicio de alojamiento más tiempo. Este proceso es utilizado en los días en que la disponibilidad es restringida y previene de una posible sobreventa <i>(overbooking)</i>.




    Separador
    br
    br


    #t_1_3.titulo-segundo
      h2 1.3  Salidas anticipadas

    .row.mb-5
      .col-lg-2
        figure.mb-5(data-aos="slide-left")
          img(src="@/assets/curso/t1-ic2.svg", alt="imagen decorativa")
      .col-lg-10
        p(data-aos="slide-right") También conocidas como early departure, son aquellas reservas que no completan el periodo de estadía planteado inicialmente, dejando el hotel antes de lo previsto. En muchos establecimientos, cuando esto se anuncia posterior a la hora fijada como límite de check-out, se realiza un cobro que va entre el 50 y el 100% del valor de la noche, dependiendo de la política fijada, la cual depende básicamente de la demanda y la posibilidad de ocupar esa habitación que va a quedar disponible.














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
