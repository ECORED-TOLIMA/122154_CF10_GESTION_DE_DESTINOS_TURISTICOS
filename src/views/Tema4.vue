<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Impactos

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='')

    p(data-aos="fade-right") La medición del impacto de estrategias en productos turísticos, permite a las empresas entender cómo sus acciones afectan, tanto a la experiencia del cliente como a la sostenibilidad del destino.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Tipos de impacto

    p.mb-5(data-aos="fade-right") De acuerdo a esta clasificación de impactos, se pueden encontrar los siguientes tipos:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#12263F") Impacto económico

    p.mb-5(data-aos="fade-right") Dentro de este impacto se llevan a cabo las siguientes acciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-10.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-4.mb-lg-0
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Generación de ingresos ]
            br
            | Evalúa cómo las estrategias de #[i marketing] y ventas, aumentan los ingresos por turismo.
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Empleo ]
            br
            | Analiza la creación de empleo local y su relación con el crecimiento del producto turístico.
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Inversión ]
            br
            | Mide la atracción de inversiones en infraestructura turística.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#12263F") Impacto social

    p.mb-5(data-aos="fade-right") Se llevan a cabo dentro de este impacto, lo siguientes procesos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-10.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-02.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-4.mb-lg-0
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Percepción del destino ]
            br
            | Analiza cómo las campañas de marketing, afectan la imagen del destino entre los turistas y los residentes.
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Cultura local ]
            br
            | Evalúa el impacto en la cultura local, como la preservación de tradiciones o la comercialización de cultura.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#12263F") Impacto ambiental

    p.mb-5(data-aos="fade-right") Este último impacto, tiene inmerso las siguientes acciones:

    .row.justify-content-center.align-items-center
      .col-lg-6.col-10.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-03.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-4.mb-lg-0
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Sostenibilidad ]
            br
            | Analiza las prácticas sostenibles implementadas y su efecto en el medio ambiente.
          li(data-aos="fade-down")
            i.fas.fa-circle(style="font-size:12px; color:#FFCE73")
            | #[b Conservación de recursos ]
            br
            | Mide el uso de recursos naturales y cómo las estrategias contribuyen a su conservación.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Métodos de medición del impacto

    p.mb-5(data-aos="fade-right") Aunque estos métodos son conocidos, es importante relacionarlos y de manera puntual, entender su función:

    .row.justify-content-center.align-items-center
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema4/img-v01-02.svg', alt='Texto que describa la imagen')
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img-v01-01.svg', alt='Texto que describa la imagen')
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="34%" y="60%" numero="+")
            p Recolectan datos sobre la satisfacción del cliente, la percepción del destino y el impacto social.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="50%" y="23%" numero="+")
            p Evalúa datos de ingresos, tasas de ocupación hotelera y otros indicadores económicos relevantes.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="73%" y="21.5%" numero="+")
            p Analiza ejemplos específicos de productos turísticos que han implementado estrategias efectivas y su impacto.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="89.2%" y="60%" numero="+")
            p Analiza la percepción en línea y las opiniones de los turistas, a través de plataformas sociales.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Herramientas para medir el impacto

    p.mb-5(data-aos="fade-right") Aunque parecieran son pocas, a continuación, se relacionan las dos herramientas utilizadas para medir el impacto:

    .row.justify-content-center.ali.mb-3(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-4.col-6
              figure
                img(src='@/assets/curso/temas/tema4/icono-01.svg', alt='Imagen decorativa')
        
          h4.text-center #[i Software] de análisis de datos
          p Se encuentran herramientas como Google Analytics, Tableau o #[i software] especializado en turismo.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-4.col-6
              figure
                img(src='@/assets/curso/temas/tema4/icono-02.svg', alt='Imagen decorativa')
          
          h4.text-center Indicadores clave de desempeño (KPI)
          p Definen y rastrean KPIs que reflejen el éxito de las estrategias.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Ejemplos de estrategias y su impacto

    p.mb-5(data-aos="fade-right") Para finalizar el tema, se ejemplifican las estrategias y su impacto, logrando interpretar de esta manera, acciones reales que se llevan en el accionar turístico: 

    TabsC.color-acento-botones(data-aos="flip-up")
      .py-3.py-md-4(titulo="Estrategias de <em>marketing</em> digital")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-04.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p.mb-0 #[b Caso de estudio]
            p.mb-3 Una campaña de publicidad en redes sociales que incrementó las reservas en un 30 %.
            p.mb-0 #[b Impacto]
            p Aumento en la visibilidad del destino y crecimiento en el número de visitantes.

      .py-3.py-md-4(titulo="Desarrollo de experiencias sostenibles")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-05.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p.mb-0 #[b Caso de estudio]
            p.mb-3 Un tour ecológico que promueve la conservación del medio ambiente.
            p.mb-0 #[b Impacto]
            p Aumento en la conciencia ambiental y mejora en la satisfacción del cliente.
      
      .py-3.py-md-4(titulo="Colaboraciones con comunidades locales")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-06.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            p.mb-0 #[b Caso de estudio]
            p.mb-3 Un programa que involucra a comunidades locales en la experiencia turística.
            p.mb-0 #[b Impacto]
            p Mayor aceptación social y beneficios económicos para los residentes.

      







</template>

<script>
export default {
  name: 'Tema4',
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
