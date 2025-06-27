<template>
<footer class="footer text-white py-4 bg">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
        <small>
          © {{anio}} PianoStore. Derechos reservados. Prohibido el uso parcial o total de información sin autorización previa.
        </small>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
        <ul class="d-flex list-unstyled gap-4 m-0">
          <li>
            <img src="@/assets/fb_img.svg" alt="Facebook" class="red">
          </li>
          <li>
            <img src="@/assets/inst_img.svg" alt="Instagram" class="red">
          </li>
          <li>
            <img src="@/assets/wapp_img.svg" alt="WhatsApp" class="red">
          </li>
          <li>
            <img src="@/assets/im_img.svg" alt="LinkedIn" class="red">
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script setup>
const anio = new Date().getFullYear()
</script>

<style scoped>
small{
    font-size: 0.7rem;
}
.red{
  width: 2rem;
  transition: transform 0.3s ease;
  cursor:pointer;
}
.red:hover {
  transform: scale(1.2);
}
.bg{
  background-color: var(--secondary);
}
</style>