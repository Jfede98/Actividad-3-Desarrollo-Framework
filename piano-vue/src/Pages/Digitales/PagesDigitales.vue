<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">
      Pianos digitales: innovación, portabilidad y tecnología
    </h2>
    <p class="text-center pb-4 txt_negro">
      Los pianos digitales han revolucionado la práctica musical moderna al
      ofrecer una alternativa compacta, versátil y tecnológicamente avanzada a
      los pianos acústicos tradicionales. Equipados con teclas contrapesadas,
      sonidos muestreados con alta fidelidad y funciones integradas como
      metrónomo, grabación y conectividad MIDI/USB, estos instrumentos permiten
      a músicos de todos los niveles estudiar, componer y presentarse con total
      libertad.
    </p>
    <p class="text-center pb-4 txt_negro">
      Además de su facilidad de transporte y menor requerimiento de
      mantenimiento, los pianos digitales actuales han alcanzado un nivel de
      realismo sorprendente tanto en el tacto como en el sonido, acercándose
      cada vez más a la experiencia acústica. Ya sea para el hogar, el estudio o
      el escenario, existe un modelo digital adaptado a cada necesidad.
    </p>
    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-lg-4"
        v-for="(item, index) in pianosDigitales"
        :key="index"
      >
        <div class="card h-100 shadow-sm">
          <img :src="item.imagen" class="imagentarjeta" :alt="item.titulo" />
          <div class="card-body">
            <h4 class="card-title text-center pianotitulo">
              {{ item.titulo }}
            </h4>
            <p class="card-text text-center txt_negro">
              {{ item.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import yamahaImg from "@/assets/yamaha_img.webp";
import kawaiImg from "@/assets/kawai_img.webp";
import casioImg from "@/assets/casio_img.webp";
import nordImg from "@/assets/nord_img.webp";
import korgImg from "@/assets/korg_img.webp";
import rolandImg from "@/assets/roland_img.webp";
const pianosDigitales = [
  {
    titulo: "Yamaha",
    descripcion:
      "Reconocida mundialmente por su equilibrio entre innovación, calidad sonora y durabilidad. La serie Clavinova ofrece una experiencia cercana a la de un piano de cola, mientras que los modelos P-series y Arius combinan portabilidad y elegancia. Yamaha destaca por su tecnología VRM (Modelado de Resonancia Virtual) y teclas de madera con recubrimiento de marfil sintético.",
    imagen: yamahaImg,
  },
  {
    titulo: "Kawai",
    descripcion:
      "Marca japonesa especializada en acción realista y fidelidad acústica. Sus modelos como la serie CA (Concert Artist) y ES (portátiles) incorporan teclas con acción de madera y tecnología Harmonic Imaging, ofreciendo una experiencia muy cercana al piano acústico. Kawai es la elección preferida de muchos pianistas clásicos que buscan sensación auténtica sin sacrificar espacio.",
    imagen: kawaiImg,
  },
  {
    titulo: "Casio",
    descripcion:
      "Ideal para estudiantes, docentes y músicos en movimiento, Casio combina funcionalidad con accesibilidad. Las series Privia y Celviano ofrecen teclas con acción de martillo, sonidos polifónicos y excelentes funciones educativas. Es una marca destacada por su relación calidad-precio y su constante innovación en el ámbito digital.",
    imagen: casioImg,
  },
  {
    titulo: "Nord",
    descripcion:
      "Fabricados en Suecia, los pianos Nord son altamente valorados por su versatilidad en vivo. Con teclas de altísima calidad y acceso inmediato a samples realistas, efectos, sintetizadores y capas de sonido, los Nord Stage y Piano son la elección favorita de músicos de jazz, pop y electrónica en entornos profesionales.",
    imagen: nordImg,
  },
  {
    titulo: "Korg",
    descripcion:
      "Famosa por su enfoque en la síntesis y tecnología de sonido, Korg combina calidad de construcción con herramientas creativas. Modelos como el Korg Grandstage o Korg B2 ofrecen sonidos potentes, controles intuitivos y efectos integrados, siendo una excelente opción para intérpretes y compositores.",
    imagen: korgImg,
  },
  {
    titulo: "Roland",
    descripcion:
      "Famosa por su enfoque en la síntesis y tecnología de sonido, Korg combina calidad de construcción con herramientas creativas. Modelos como el Korg Grandstage o Korg B2 ofrecen sonidos potentes, controles intuitivos y efectos integrados, siendo una excelente opción para intérpretes y compositores.",
    imagen: rolandImg,
  },
];
</script>

<style scoped>
.imagentarjeta {
  width: 100%;
  object-fit: cover;
  margin-bottom: 4%;
}
.pianotitulo {
  color: var(--secondary);
}
.txt_negro {
  color: #333;
  font-size: 0.9rem;
}
</style>
