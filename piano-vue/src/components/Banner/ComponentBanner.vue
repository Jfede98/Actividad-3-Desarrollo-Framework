<template>
<div class="imagen-banner text-center d-flex align-items-center justify-content-center">
  <div class="overlay-box padding">
    <h2 class="text-white">Nobleza y legado en cada nota</h2>
    <p class="text-white">Explora la majestuosidad de un instrumento que ha acompañado a los grandes compositores de la historia de la composición e interpretación musical.</p>
  </div>
</div>
</template>

<script setup>
</script>

<style scoped>.imagen-banner {
  background-image: url('/src/assets/pianoBanner_img.webp');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 650px; 
  position: relative;
}
.overlay-box {
  background-color: rgba(0, 0, 0, 0.6); 
  border-radius: 6px;
  max-width: 1000px;
  padding: 10%;
}
.padding{
  padding: 6%;
}
</style>
