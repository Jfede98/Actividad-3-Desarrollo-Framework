import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digitales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digitales.component.html',
  styleUrl: './digitales.component.css',
})
export class DigitalesComponent {
  pianosDigitales = [
    {
      titulo: 'Yamaha',
      descripcion:
        'Reconocida mundialmente por su equilibrio entre innovación, calidad sonora y durabilidad. La serie Clavinova ofrece una experiencia cercana a la de un piano de cola, mientras que los modelos P-series y Arius combinan portabilidad y elegancia. Yamaha destaca por su tecnología VRM (Modelado de Resonancia Virtual) y teclas de madera con recubrimiento de marfil sintético.',
      imagen: 'assets/yamaha_img.webp',
    },
    {
      titulo: 'Kawai',
      descripcion:
        'Marca japonesa especializada en acción realista y fidelidad acústica. Sus modelos como la serie CA (Concert Artist) y ES (portátiles) incorporan teclas con acción de madera y tecnología Harmonic Imaging, ofreciendo una experiencia muy cercana al piano acústico. Kawai es la elección preferida de muchos pianistas clásicos que buscan sensación auténtica sin sacrificar espacio.',
      imagen: 'assets/kawai_img.webp',
    },
    {
      titulo: 'Casio',
      descripcion:
        'Ideal para estudiantes, docentes y músicos en movimiento, Casio combina funcionalidad con accesibilidad. Las series Privia y Celviano ofrecen teclas con acción de martillo, sonidos polifónicos y excelentes funciones educativas. Es una marca destacada por su relación calidad-precio y su constante innovación en el ámbito digital.',
      imagen: 'assets/casio_img.webp',
    },
    {
      titulo: 'Nord',
      descripcion:
        'Fabricados en Suecia, los pianos Nord son altamente valorados por su versatilidad en vivo. Con teclas de altísima calidad y acceso inmediato a samples realistas, efectos, sintetizadores y capas de sonido, los Nord Stage y Piano son la elección favorita de músicos de jazz, pop y electrónica en entornos profesionales.',
      imagen: 'assets/nord_img.webp',
    },
    {
      titulo: 'Korg',
      descripcion:
        'Famosa por su enfoque en la síntesis y tecnología de sonido, Korg combina calidad de construcción con herramientas creativas. Modelos como el Korg Grandstage o Korg B2 ofrecen sonidos potentes, controles intuitivos y efectos integrados, siendo una excelente opción para intérpretes y compositores.',
      imagen: 'assets/korg_img.webp',
    },
    {
      titulo: 'Roland',
      descripcion:
        'Famosa por su enfoque en la síntesis y tecnología de sonido, Korg combina calidad de construcción con herramientas creativas. Modelos como el Korg Grandstage o Korg B2 ofrecen sonidos potentes, controles intuitivos y efectos integrados, siendo una excelente opción para intérpretes y compositores.',
      imagen: 'assets/roland_img.webp',
    },
  ];
}
