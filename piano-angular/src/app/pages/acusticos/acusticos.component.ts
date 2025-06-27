import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acusticos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acusticos.component.html',
  styleUrls: ['./acusticos.component.css']
})
export class AcusticosComponent {
  pianosAcusticos = [
    {
      titulo: 'de cola (Grand Piano)',
      descripcion: 'El piano de cola es la forma más completa y prestigiosa del piano acústico. Su diseño horizontal permite que las cuerdas se dispongan en línea recta sobre una tabla armónica extensa, lo que genera una proyección sonora poderosa y envolvente. Gracias a su acción mecánica directa. Es decir, el sistema que conecta las teclas con los martillos que golpean las cuerdas. El piano de cola ofrece una respuesta rápida, sensible y precisa, ideal para interpretaciones de alta exigencia técnica y expresiva, donde se requiere un control absoluto sobre el timbre y la dinámica.',
      imagen: 'assets/grandpiano_img.webp',
      estilo: 'piano_titulo'
    },
    {
      titulo: 'vertical (Upright Piano)',
      descripcion: 'El piano vertical o piano de pared representa una solución funcional y compacta para quienes desean disfrutar de un instrumento acústico sin disponer de grandes espacios. En este modelo, las cuerdas, la tabla armónica y la mecánica están dispuestas en sentido vertical, lo que permite una importante reducción en el tamaño total del piano sin comprometer la calidad del sonido. Aunque la acción vertical tiene una respuesta ligeramente más lenta que la del piano de cola, los avances técnicos han logrado un rendimiento notable en términos de sensibilidad y potencia sonora.',
      imagen: 'assets/verticalpiano_img.webp',
      estilo: 'piano_titulo'
    },
    {
      titulo: 'de consola (Console Piano)',
      descripcion: 'Dentro de la familia de los pianos verticales, la espineta y el piano consola representan los modelos más compactos y accesibles, tanto en precio como en tamaño. La espineta, que suele medir menos de 100 cm de altura, utiliza un mecanismo indirecto denominado "acción de caída", donde los martillos se mueven por medio de varillas adicionales, lo que la hace menos sensible en comparación con modelos más grandes. Aun así, ofrece un sonido acústico real, ideal para personas que se inician en el aprendizaje del instrumento.',
      imagen: 'assets/consolapiano_img.webp',
      estilo: 'piano_titulo'
    }
    
    
  ];
}
