import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannerComponent } from '../../components/banner/banner.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { VideoComponent } from '../../components/video/video.component';
import { BrandComponent } from '../../components/brand/brand.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    AsideComponent,
    VideoComponent,
    BrandComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {}
