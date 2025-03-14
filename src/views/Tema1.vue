<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Impacto del turismo

    p(data-aos="fade-right") El impacto que el turismo produce en un destino es a la vez muy completo y diverso, lo que hace que sea un fenómeno mucho más amplio que la mera movilidad. Los turistas generan una serie impresionante de cambios e impactos físicos, económicos, ambientales y humanos, en el destino visitado; desde el impacto de la movilidad hasta el que produce en la propia cultura de los residentes, lo que a su vez genera varios efectos y cambios, tanto entre los propios destinos como a nivel más general. 
    p.mb-5(data-aos="fade-right") Para realizar el análisis de los distintos posibles productos turísticos, se intentará hacer, en lo posible, midiendo su impacto, tanto a pequeña como a gran escala, analizando y definiendo su metodología de medición. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#FFE2B7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-02.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La necesidad de medir los impactos de cada producto turístico, estriba fundamentalmente en el objeto, perseguido por cualquier plan de dinamización del turismo rural, ya que los distintos productos que potencialmente podrían incluirse en los mismos, no van a suponer a priori, una rentabilidad económica ni social en sí mismos, por lo que es conveniente realizar un análisis de impactos antes y después de su posible implementación. 

    p(data-aos="fade-right") Como es lógico, no todos los impactos se pueden traducir en valor monetario y aquellos que se logren medir se podrían cuantificar vía precio, aunque mediante diferentes fórmulas fueran convertibles en valor social. Por último, en el supuesto de que así ocurriera, el impacto se debería relacionar con un periodo de tiempo, para establecerlo en parámetros comparativos sencillos.
    p.mb-5(data-aos="fade-right") El impacto del turismo puede ser analizado desde diversas dimensiones: económica, social, cultural y ambiental:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#12263F") Económico 
    
    p.mb-5(data-aos="fade-right") El turismo impulsa la economía local, a través de la generación de empleo y el aumento de ingresos para los negocios locales; sin embargo, también puede provocar dependencia económica y vulnerabilidad ante crisis globales.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema1/img-03.png', alt='')

    .row.justify-content-center.ali.mb-3(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FEEBCF")
          h4.text-center Positivo
          ul.lista-ul.mb-0
            li 
              i.lista-ul__vineta
              | Generación de divisas.
            li 
              i.lista-ul__vineta
              | Generación de empleo, tanto principal como secundario.
            li 
              i.lista-ul__vineta
              | Crecimiento económico.
            li 
              i.lista-ul__vineta
              | Equilibrio en la balanza de pagos.
            li 
              i.lista-ul__vineta
              | Contribución al PIB.
            li 
              i.lista-ul__vineta
              | Promoción de la actividad empresarial.
            li 
              i.lista-ul__vineta
              | Inversión extranjera directa.
            li 
              i.lista-ul__vineta
              | Posibilidad de ingresos a grupos postergados y poco privilegiados.
            li 
              i.lista-ul__vineta
              | Aumento de empresas de proveeduría.
            li 
              i.lista-ul__vineta
              | Incremento en la demanda de bienes y servicios.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          h4.text-center Negativo
          ul.lista-ul.mb-0
            li 
              i.lista-ul__vineta
              | Incremento en el valor de la tierra.
            li 
              i.lista-ul__vineta
              | Fuga de inversiones.
            li 
              i.lista-ul__vineta
              | Inflación local.
            li 
              i.lista-ul__vineta
              | Fraccionamiento inadecuado y especulación con predios.
            li 
              i.lista-ul__vineta
              | Importación intensiva de recursos e insumos.
            li 
              i.lista-ul__vineta
              | Freno al desarrollo regional.
            li 
              i.lista-ul__vineta
              | Insuficiente inversión en infraestructura.
            li 
              i.lista-ul__vineta
              | Modificación de la estructura económica.
            li 
              i.lista-ul__vineta
              | Distribución inequitativa de ingresos.
            li 
              i.lista-ul__vineta
              | Sobredependencia económica.
            li 
              i.lista-ul__vineta
              | Competencia intersectorial (abandono de otras actividades productivas).
            li 
              i.lista-ul__vineta
              | Estacionalidad de la demanda.
            li 
              i.lista-ul__vineta
              | Espejismo económico.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#12263F") Social y cultural

    p.mb-5(data-aos="fade-right") Puede fomentar el intercambio cultural y el respeto por la diversidad, pero también puede llevar a la erosión cultural y la pérdida de identidad local, si no se gestiona adecuadamente.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema1/img-04.png', alt='')
    
    .row.justify-content-center.ali.mb-3(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-4.col-6
              figure
                img(src='@/assets/curso/temas/tema1/icono-01.svg', alt='Imagen decorativa')
          
          h4.text-center Positivo
          ul.lista-ul.mb-0
            li 
              i.lista-ul__vineta
              | Fortalecimiento de la capacidad de asociación.
            li 
              i.lista-ul__vineta
              | Mayor interacción con el otro.
            li 
              i.lista-ul__vineta
              | Reafirmación de valores y de la identidad cultural.

        .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FEEBCF")
          .row.justify-content-center.mb-3
            .col-lg-4.col-6
              figure
                img(src='@/assets/curso/temas/tema1/icono-02.svg', alt='Imagen decorativa')
          
          h4.text-center Negativo
          ul.lista-ul.mb-0
            li 
              i.lista-ul__vineta
              | Resquebrajamiento de la unidad familiar.
            li 
              i.lista-ul__vineta
              | Pérdida de la identidad y de valores.
            li 
              i.lista-ul__vineta
              | Drogadicción y prostitución.
            li 
              i.lista-ul__vineta
              | Alto riesgo social de poblaciones vulnerables.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#12263F") Ambiental

    p.mb-5(data-aos="fade-right") Aunque el turismo puede promover la conservación de áreas naturales, también puede resultar en la degradación del medio ambiente, si no se implementan prácticas sostenibles.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema1/img-05.png', alt='')

    .row.justify-content-center.ali(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FEEBCF")
          h4.text-center Positivo
          ul.lista-ul.mb-0
            li 
              i.lista-ul__vineta
              | Estímulo para la conservación y mejora del entorno.
            li 
              i.lista-ul__vineta
              | Creación de parques naturales, protección de áreas salvajes, restauración y preservación de lugares históricos.
            li 
              i.lista-ul__vineta
              | Introducción de medidas de planificación y gestión.
            li 
              i.lista-ul__vineta
              | Sensibilización.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          h4.text-center Negativo
          ul.lista-ul.mb-0
            li 
              i.lista-ul__vineta
              | Erosión y degradación del entorno:
            li
              ul
                li 
                  i.lista-ul__vineta
                  | Polución (agua, aire, etc.).
                li 
                  i.lista-ul__vineta
                  | Aguas residuales.
                li 
                  i.lista-ul__vineta
                  | Recogida de basuras.
                li 
                  i.lista-ul__vineta
                  | Vertederos incontrolados.
                li 
                  i.lista-ul__vineta
                  | Agotamiento de recursos acuíferos.
                li 
                  i.lista-ul__vineta
                  | Erosión del suelo.
                li 
                  i.lista-ul__vineta
                  | Deterioro hábitat (fauna y flora).
            li 
              i.lista-ul__vineta
              | Desarrollo urbano no integrado en el paisaje.







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
