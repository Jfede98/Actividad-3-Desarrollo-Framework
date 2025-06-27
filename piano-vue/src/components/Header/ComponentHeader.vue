<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar">
      <div class="container d-flex flex-column align-items-center">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/marca.svg" alt="Logo Pianos" class="ps-4 marca" style="max-height: 80px;" />
        </router-link>
        <div class="d-flex justify-content-center w-100" id="navbarContent">
          <ul class="navbar-nav flex-row gap-3 text-center padding">
            <li class="nav-item">
              <router-link class="nav-link text-red active" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/acusticos">Acústicos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/digitales">Digitales</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/suscribete">Suscríbete</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
.marca{
    width: 80%;
}
.navbar{
  background-image: url(/src/assets/header_bg.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1000;
}
.navbar .nav-link {
  color: var(--primary)!important;
  cursor: pointer;
}
.navbar .nav-link:hover {
  background-color: var(--support)!important;
  border-radius: 0.3rem;
}
.padding{
  padding-top:8%;
}
</style>
