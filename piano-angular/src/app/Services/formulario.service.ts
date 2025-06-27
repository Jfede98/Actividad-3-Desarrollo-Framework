import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  nombreUsuario: string = '';

  guardarDatosFormulario(data: any) {
    this.nombreUsuario = data.nombre;
  }
}
