import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcusticosComponent } from './pages/acusticos/acusticos.component';
import { DigitalesComponent } from './pages/digitales/digitales.component';
import { SuscribeteComponent } from './pages/suscribete/suscribete.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acusticos', component: AcusticosComponent },
  { path: 'digitales', component: DigitalesComponent },
  { path: 'suscribete', component: SuscribeteComponent },
  { path: '', redirectTo: 'suscribete', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
