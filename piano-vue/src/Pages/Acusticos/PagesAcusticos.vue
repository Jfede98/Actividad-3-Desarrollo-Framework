<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Descubre los tipos de pianos acústicos</h2>    
    <p class="text-center pb-4 txt_negro">
      El piano acústico es una obra maestra de la ingeniería musical, símbolo de elegancia y expresión sonora. A lo largo de su evolución, se han desarrollado distintas variantes que responden a las necesidades de interpretación, espacio y proyección sonora. Desde la majestuosidad del piano de cola hasta la funcionalidad compacta de los pianos verticales, cada tipo ofrece una experiencia única para el intérprete y el oyente.
    </p>
    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-lg-4"
        v-for="(item, index) in pianosAcusticos"
        :key="index"
      >
        <div class="card h-100 shadow-sm">
          <img :src="item.imagen" class="imagentarjeta" :alt="item.titulo" />
          <div class="card-body">
            <h4 class="card-title text-center" :class="item.estilo">Piano {{ item.titulo }}</h4>
            <p class="card-text text-center txt_negro">{{ item.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import grandPianoImg from '@/assets/grandpiano_img.webp';
import verticalPianoImg from '@/assets/verticalpiano_img.webp';
import consolaPianoImg from '@/assets/consolapiano_img.webp';
const pianosAcusticos = [
    {
      titulo: 'de cola (Grand Piano)',
      descripcion: 'El piano de cola es la forma más completa y prestigiosa del piano acústico. Su diseño horizontal permite que las cuerdas se dispongan en línea recta sobre una tabla armónica extensa, lo que genera una proyección sonora poderosa y envolvente. Gracias a su acción mecánica directa. Es decir, el sistema que conecta las teclas con los martillos que golpean las cuerdas. El piano de cola ofrece una respuesta rápida, sensible y precisa, ideal para interpretaciones de alta exigencia técnica y expresiva, donde se requiere un control absoluto sobre el timbre y la dinámica.',
      imagen: grandPianoImg, 
      estilo: 'pianotitulo'
    },
    {
      titulo: 'vertical (Upright Piano)',
      descripcion: 'El piano vertical o piano de pared representa una solución funcional y compacta para quienes desean disfrutar de un instrumento acústico sin disponer de grandes espacios. En este modelo, las cuerdas, la tabla armónica y la mecánica están dispuestas en sentido vertical, lo que permite una importante reducción en el tamaño total del piano sin comprometer la calidad del sonido. Aunque la acción vertical tiene una respuesta ligeramente más lenta que la del piano de cola, los avances técnicos han logrado un rendimiento notable en términos de sensibilidad y potencia sonora.',
      imagen: verticalPianoImg,
      estilo: 'pianotitulo'
    },
    {
      titulo: 'de consola (Console Piano)',
      descripcion: 'Dentro de la familia de los pianos verticales, la espineta y el piano consola representan los modelos más compactos y accesibles, tanto en precio como en tamaño. La espineta, que suele medir menos de 100 cm de altura, utiliza un mecanismo indirecto denominado "acción de caída", donde los martillos se mueven por medio de varillas adicionales, lo que la hace menos sensible en comparación con modelos más grandes. Aun así, ofrece un sonido acústico real, ideal para personas que se inician en el aprendizaje del instrumento.',
      imagen: consolaPianoImg,
      estilo: 'pianotitulo'
    }
]
</script>

<style scoped>
.imagentarjeta {
  width: 100%;
  object-fit: cover;
  margin-bottom: 4%;
}
.texto {
  font-size: 0.9rem;
}
.pianotitulo {
  color: var(--secondary);
}
</style>
