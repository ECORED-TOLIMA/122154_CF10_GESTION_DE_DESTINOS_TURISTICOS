<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe un enfoque general del componente formativo, el cual aborda los conceptos esenciales del impacto del turismo, plan de acción, indicadores, problemas y oportunidades identificadas. Este componente, analiza los diferentes impactos del turismo, el plan de acción y cómo estos factores influyen en los indicadores; además, evalúa sobre las estrategias del posicionamiento de la oferta turística en el medio, en los niveles económico, sociocultural y ambiental, garantizando el desarrollo sostenible de los destinos turísticos, al preservar la identidad cultural y el entorno natural: 

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Medición de impactos de productos turísticos, se tratan los aspectos que tiene que ver con la medición que impacta y tiene unos indicadores a nivel económico, social y ambiental, ejemplificando esto, por medio del CTRC presente en un municipio de Risaralda; además de las estrategias que se crean al momento de elaborar un plan de acción; también, se relaciona el impacto que se genera cuando se identifican problemas y se dan a conocer las oportunidades de mejora existentes sobre estos procesos.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
