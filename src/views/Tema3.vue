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
    .row.mb-5
      .col-lg-7
        p.mb-5  El procedimiento de la auditoría nocturna es un proceso de control. Consiste en una revisión lenta y detallada de todas las transacciones financieras de las cuentas huésped y los departamentos del hotel, cada día del año. Al final de este proceso, se obtiene el saldo de las cuentas huésped y se corrigen los posibles errores que pudieran haberse cometido durante la operación diaria.
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  Como resultado, es posible monitorear la actividad crediticia de los huéspedes, proyectar el flujo de efectivo diario de la venta de habitaciones y comparar los ingresos proyectados (presupuesto) y los reales para los diversos departamentos.
      .col-lg-5
        figure.mb-5(data-aos="fade-up")
          img(src="@/assets/curso/t2-i1.jpg", alt="imagen decorativa")

    p.mb-5.text-bold  El proceso de auditoría realiza un seguimiento (control) de los cargos y pagos (débitos y créditos) y de los recibos de soporte de cargos departamentales, a diario. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.bg1 
          .row.m-0.align-items-center.justify-content-left
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p <b>Entonces, se podría afirmar que el principal objetivo de la auditoría nocturna es garantizar que la información de los huéspedes sea correcta y esté actualizada.</b> Adicionalmente, que la sección financiera y la gerencia del hotel cuenten con una fuente fehaciente de información de desempeño diario del hotel.
    
    #t_3_2.titulo-segundo
      h2 3.2 El auditor nocturno
    p.mb-5.text-bold  El auditor nocturno tiene muchas responsabilidades, además de realizar la revisión nocturna y preparar los informes de auditoría nocturna
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.bg2 
          .row.m-0.align-items-center.justify-content-left
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Esta persona también debe hacer el registro <i>(check-in)</i> y la salida <i>(check-out)</i> de los huéspedes que lleguen después de las 10:00 p.m. o salgan antes de las 6:00 a.m. Adicionalmente, procesar reservas, realizar las tareas de supervisor de seguridad, verificar los sistemas de seguridad contra incendios, actuar como cajero para las funciones de banquetes y realizar el trabajo de gerente de turno. Como se observa, esta posición tiene un alto grado de responsabilidad y es muy importante en el funcionamiento del hotel.



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

<style lang="sass" scoped>
.bg1:before
  background: url('../assets/curso/bg-1.jpg')
  background-size: cover

.bg2:before
  background: url('../assets/curso/bg-2.jpg')
  background-size: cover
</style>
