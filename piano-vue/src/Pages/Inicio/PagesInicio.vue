<template>
  <ComponentBanner />
  <div class="text-center mt-0 mb-5 bg_black">
    <img
      src="@/assets/pianoTeclas_img.webp"
      class="teclado"
      alt="Imagen de teclado de piano"
    />
    <div class="row justify-content-center">
      <div class="col-9 text-center mt-0 mb-5 bg_black">
        <h1>El alma de la música comienza en un piano</h1>
        <p>
          Más allá del instrumento, el verdadero crecimiento musical requiere
          inspiración, guía y recursos adecuados. En esta sección reunimos lo
          esencial para acompañarte en tu camino como pianista: desde partituras
          seleccionadas y tutoriales paso a paso, hasta aplicaciones
          inteligentes, soporte técnico y accesorios que optimizan tu práctica.
        </p>
      </div>
    </div>
    <div class="row justify-content-center bg-white pt-5">
      <div class="col-md-4">
        <div class="p-3">
          <img
            src="@/assets/piano_img.webp"
            class="d-block w-100 border"
            alt="Imagen de piano"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-3 bg-white text-start">
          <p class="txt_negro">
            La arquitectura del piano es una fusión magistral entre ingeniería,
            diseño y sensibilidad sonora. Cada elemento, desde la sólida
            estructura de su bastidor hasta el delicado mecanismo de los
            martillos, cumple una función esencial que permite convertir el
            gesto del intérprete en música.
          </p>
          <p>&nbsp;</p>
          <p class="txt_negro">
            Un piano acústico está compuesto por más de 12.000 piezas,
            ensambladas con meticulosa precisión. Su corazón es la tabla
            armónica, generalmente elaborada en abeto, que amplifica las
            vibraciones de las cuerdas. Estas, a su vez, están tensadas sobre un
            marco de hierro fundido, diseñado para resistir una tensión
            acumulada que puede superar las 20 toneladas.
          </p>
          <p>&nbsp;</p>
          <p class="txt_negro">
            El sistema de acción —una compleja red de palancas, resortes y
            martillos— convierte la presión sobre cada tecla en un golpe
            controlado sobre las cuerdas, permitiendo una expresión dinámica
            única. La respuesta táctil y la sonoridad del instrumento dependen
            del equilibrio perfecto entre mecánica y resonancia.
          </p>
        </div>
      </div>
    </div>
  </div>

  <ComponentVideo />
  <ComponentAside />
  <ComponentBrand />
</template>

<script>
import ComponentBanner from "./../../components/Banner/ComponentBanner";
import ComponentVideo from "./../../components/Video/ComponentVideo";
import ComponentAside from "./../../components/Aside/ComponentAside";
import ComponentBrand from "./../../components/Brand/ComponentBrand";

export default {
  components: {
    ComponentBanner,
    ComponentVideo,
    ComponentAside,
    ComponentBrand,
  },
};
</script>

<style scoped>
.border {
  border-radius: 0.2rem;
}
.teclado {
  width: 100%;
  margin: 0%;
}
.bg_black {
  background-color: black;
}
</style>

<!--<template>
<div class="text-center mt-0 mb-5 bg_black">
  <img src="@/assets/pianoTeclas_img.webp" class="teclado" alt="Imagen de teclado de piano">
  <div class="row justify-content-center">
<div class=" col-9  text-center mt-0 mb-5 bg_black">
  <h1>El alma de la música comienza en un piano</h1>
  <p>Más allá del instrumento, el verdadero crecimiento musical requiere inspiración, guía y recursos adecuados.
En esta sección reunimos lo esencial para acompañarte en tu camino como pianista: desde partituras seleccionadas y tutoriales paso a paso, hasta aplicaciones inteligentes, soporte técnico y accesorios que optimizan tu práctica.</p>
</div>
</div>
<div class="row justify-content-center bg-white pt-5">
    <div class="col-md-4">
      <div class="p-3">
         <img src="@/assets/piano_img.webp" class="d-block w-100 border" alt="Imagen de piano">
      </div>
    </div>
    <div class="col-md-6">
      <div class="p-3  bg-white text-start">        
        <p class="txt_negro">
La arquitectura del piano es una fusión magistral entre ingeniería, diseño y sensibilidad sonora. Cada elemento, desde la sólida estructura de su bastidor hasta el delicado mecanismo de los martillos, cumple una función esencial que permite convertir el gesto del intérprete en música.
</p>
<p>&nbsp;</p>
  <p class="txt_negro">
Un piano acústico está compuesto por más de 12.000 piezas, ensambladas con meticulosa precisión. Su corazón es la tabla armónica, generalmente elaborada en abeto, que amplifica las vibraciones de las cuerdas. Estas, a su vez, están tensadas sobre un marco de hierro fundido, diseñado para resistir una tensión acumulada que puede superar las 20 toneladas.
  </p>
  <p>&nbsp;</p>
   <p class="txt_negro">
El sistema de acción —una compleja red de palancas, resortes y martillos— convierte la presión sobre cada tecla en un golpe controlado sobre las cuerdas, permitiendo una expresión dinámica única. La respuesta táctil y la sonoridad del instrumento dependen del equilibrio perfecto entre mecánica y resonancia.
  </p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.border{
    border-radius: 0.2rem;
}
.teclado{
    width: 100%;
    margin: 0%;;
}
.bg_black{
    background-color: black;
}
</style>-->
