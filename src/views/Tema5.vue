<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Problemas identificados

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='')

    p.mb-5(data-aos="fade-right") Dentro del proceso de medición de impactos turísticos, como cualquier otro proceso llevado a cabo en otra área, existen diversos problemas que pueden presentarse; es por ello, que a continuación, se listan los más identificados, describiendo de manera puntual cada uno e indicando el impacto que causan:

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Falta de datos confiables]
              p.mb-3 #[b Descripción:] la obtención de datos precisos y actualizados es uno de los mayores desafíos. Muchas veces, los datos son incompletos, sesgados o poco representativos.
              p #[b Impacto:] sin datos confiables, es difícil evaluar el verdadero impacto de las estrategias implementadas. Esto puede llevar a decisiones erróneas que afecten el rendimiento del producto turístico.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-02.png', style="width: 450px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Diversidad de métodos de medición]
              p.mb-3 #[b Descripción:] existen múltiples enfoques y herramientas para medir el impacto, pero no todos son adecuados para todas las situaciones. La falta de estandarización dificulta la comparación de resultados.
              p #[b Impacto:] la diversidad de métodos puede generar confusión y dificultad en la interpretación de los resultados, lo que puede afectar la implementación de futuras estrategias.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-03.png', style="width: 450px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Dificultad para cuantificar impactos intangibles]
              p.mb-3 #[b Descripción:] aspectos como la satisfacción del cliente, la percepción del destino y la cultura local, son difíciles de medir de manera cuantitativa.
              p #[b Impacto:] la incapacidad para medir estos aspectos intangibles, puede llevar a una visión incompleta del impacto de las estrategias, limitando la comprensión de su verdadero valor.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-04.png', style="width: 450px" ,alt='').m-auto 
          
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Influencia de factores externos]
              p.mb-3 #[b Descripción:] factores como crisis económicas, pandemias, cambios en las regulaciones y desastres naturales, pueden influir en el turismo de manera impredecible.
              p #[b Impacto:] estos factores pueden distorsionar la evaluación del impacto de una estrategia específica, ya que los resultados pueden verse afectados por circunstancias externas, fuera del control del producto turístico.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-05.png', style="width: 450px" ,alt='').m-auto 
          
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Resistencia al cambio]
              p.mb-3 #[b Descripción:] algunas empresas turísticas, pueden ser reacias a implementar nuevas estrategias o cambiar sus enfoques existentes, debido a la falta de confianza en los datos o en los métodos de medición.
              p #[b Impacto:] esta resistencia puede resultar en la ineficacia de las estrategias, ya que no se aprovechan las oportunidades de mejora basadas en datos.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-06.png', style="width: 450px" ,alt='').m-auto 

          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Limitaciones presupuestarias]
              p.mb-3 #[b Descripción:] las pequeñas y medianas empresas turísticas, a menudo carecen de los recursos necesarios para realizar estudios de impacto exhaustivos.
              p #[b Impacto:] la falta de presupuesto, puede limitar la capacidad para invertir en investigación y desarrollo, lo que impide una evaluación adecuada del impacto.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-07.png', style="width: 450px" ,alt='').m-auto 

          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Cambios en comportamientos de los turistas]
              p.mb-3 #[b Descripción:] las preferencias y comportamientos de los turistas, están en constante cambio, lo que puede dificultar la medición de estrategias a lo largo del tiempo.
              p #[b Impacto:] si las estrategias no se ajustan a los cambios en las expectativas de los turistas, el impacto puede ser negativo y las mediciones pueden resultar irrelevantes.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-08.png', style="width: 450px" ,alt='').m-auto 

          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Falta de capacitación y conocimiento]
              p.mb-3 #[b Descripción:] muchas organizaciones, carecen de personal capacitado en análisis de datos y en la medición del impacto turístico.
              p #[b Impacto:] la falta de conocimiento, puede llevar a interpretaciones incorrectas de los datos, limitando la capacidad para tomar decisiones informadas.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-09.png', style="width: 450px" ,alt='').m-auto 

          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Enfoque a corto plazo]
              p.mb-3 #[b Descripción:] muchas empresas se enfocan en resultados inmediatos y no consideran el impacto a largo plazo de sus estrategias.
              p #[b Impacto:] este enfoque puede conducir a decisiones que comprometen la sostenibilidad del destino y del producto turístico en el futuro.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-010.png', style="width: 450px" ,alt='').m-auto 

          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              p #[b Dificultades en la integración de resultados]
              p.mb-3 #[b Descripción:] la información recopilada, a menudo proviene de diversas fuentes y no se integra de manera efectiva, para ofrecer una visión holística.
              p #[b Impacto:] la falta de integración, puede dificultar la identificación de patrones y tendencias, limitando la capacidad para evaluar el verdadero impacto de las estrategias.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-011.png', style="width: 450px" ,alt='').m-auto 

    p.mb-5(data-aos="fade-right") Otras problemáticas pueden ser:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema5/img-conectada.svg", alt="alt").img250
        
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/icono-01.svg", alt="alt").img100
            .col
              h5 Sobreexplotación de recursos
              p El uso excesivo de recursos naturales, puede llevar a su degradación.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/icono-02.svg", alt="alt").img100
            .col
              h5 Desigualdad económica
              p No siempre todos los sectores de la comunidad se benefician del turismo.

        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/icono-03.svg", alt="alt").img100
            .col
              h5 Erosión cultural
              p La comercialización de la cultura local puede diluir la autenticidad y el valor cultural.








</template>

<script>
export default {
  name: 'Tema5',
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
