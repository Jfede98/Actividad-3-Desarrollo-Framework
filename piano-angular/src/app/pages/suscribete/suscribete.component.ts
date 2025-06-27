import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from '../../Services/formulario.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './suscribete.component.html',
  styleUrls: ['./suscribete.component.css'],
})
export class SuscribeteComponent implements OnInit {
  contactoForm!: FormGroup;
  mostrarMensaje: boolean = false;

  constructor(
    private fb: FormBuilder,
    public formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  enviar(): void {
    if (this.contactoForm.valid) {
      this.formularioService.guardarDatosFormulario(this.contactoForm.value);
      this.contactoForm.reset();
      this.mostrarMensaje = true;
    } else {
      this.contactoForm.markAllAsTouched();
    }
  }
}
