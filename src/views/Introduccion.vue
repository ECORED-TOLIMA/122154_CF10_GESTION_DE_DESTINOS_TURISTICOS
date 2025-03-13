<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El turismo se ha convertido en uno de los sectores más importantes a nivel global, generando significativos ingresos y creando millones de empleos. Sin embargo, este crecimiento también plantea retos en términos de sostenibilidad y equilibrio con las comunidades locales y el medio ambiente. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2 
        .cajon-b.color-primario.p-3.mb-1(data-aos="fade-right")
          p La medición de impactos de productos turísticos, permite entender mejor las consecuencias de esta actividad y facilitar un desarrollo más responsable. Además, es importante conocer herramientas y métodos para evaluar los impactos del turismo, con el objetivo de promover prácticas que beneficien, tanto a los visitantes como a los destinos.
          p Dentro de las estrategias para el desarrollo del turismo, una de las herramientas básicas, es el planteamiento de un producto turístico diferenciado que aumente el atractivo del destino, frente a otros competidores y, como consecuencia, la posibilidad de captación de nuevos turistas.
          p.mb-0 Por último, la productividad, con proyectos claros basados en el territorio y proporcionando un nutrido y variado contenido turístico, podrá mejorar la percepción del turista con respecto a los precios, lo que permitirá mejorar la comercialización y, especialmente, el trabajo global del sector.

      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#FFE9DF")
          p.mb-0 Teniendo en cuenta el contexto mencionado, se recomienda acceder al siguiente video, el cual explica la temática a tratar en este componente formativo:

    figure.mb-0(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
