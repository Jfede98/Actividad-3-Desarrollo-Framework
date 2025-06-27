<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4 text-center mb-4 mb-md-0">
        <img src="@/assets/piano_contacto.webp" alt="Imagen de persona tocando el piano" class="img-fluid rounded" />
      </div>
      <div class="col-12 col-md-6">
        <form @submit.prevent="enviar" class="p-4 shadow rounded bg-light" novalidate>
          <h2 class="text-center mb-4">Suscríbete a nuestra comunidad</h2>
          <p class="text-center txt_rojo pb-4">
            Déjanos tus datos y te enviaremos mayor información acerca de este fascinante mundo de la música a través del piano.
          </p>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              class="form-control"
              v-model="form.nombre"
              @blur="touched.nombre = true"
            />
            <div v-if="touched.nombre && !form.nombre" class="text-danger">
              El nombre es requerido para poder contactarte.
            </div>
          </div>
          <div class="mb-3">
            <label for="telefono" class="form-label">Teléfono</label>
            <input
              type="text"
              id="telefono"
              class="form-control"
              v-model="form.telefono"
              @blur="touched.telefono = true"
            />
            <div v-if="touched.telefono && !telefonoValido" class="text-danger">
              Ingresa un teléfono de contacto que contenga 10 dígitos.
            </div>
          </div>
          <div class="mb-3">
            <label for="correo" class="form-label">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              class="form-control"
              v-model="form.correo"
              @blur="touched.correo = true"
            />
            <div v-if="touched.correo && !correoValido" class="text-danger">
              Ingresa una dirección de correo electrónico válida.
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100 btn_enviar">Enviar</button>
        </form>

        <div v-if="mostrarMensaje" class="alert alert-success mt-4 text-center">
          ¡Gracias {{ form.nombre }} por registrarte!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
const form = reactive({
  nombre: '',
  telefono: '',
  correo: ''
})
const touched = reactive({
  nombre: false,
  telefono: false,
  correo: false
})
const mostrarMensaje = ref(false)
const telefonoValido = computed(() => /^\d{10}$/.test(form.telefono))
const correoValido = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)
)
function enviar() {
  touched.nombre = true
  touched.telefono = true
  touched.correo = true
  if (
    form.nombre &&
    telefonoValido.value &&
    correoValido.value
  ) {
    mostrarMensaje.value = true
    form.nombre = ''
    form.telefono = ''
    form.correo = ''
    touched.nombre = false
    touched.telefono = false
    touched.correo = false
  }
}
</script>

<style scoped>
.btn_enviar {
  background-color: var(--secondary);
  border: 0px;
}
.btn_enviar:hover {
  background-color: var(--complementary);
}
</style>
