import { Component, OnInit } from '@angular/core';
import {PublicidadService} from '../../services/publicidad.service';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {
  publici;
  imgPublicidad = localStorage.getItem('imgPublictity');
  constructor(private publicidad: PublicidadService) {
    this.publici = this.getPublicidad();
  }

  ngOnInit() {
  }
  getPublicidad() {
    this.publicidad.getPublicidad().subscribe(data => {
      this.publici = data;
      if (this.imgPublicidad === null) {
        localStorage.setItem('imgPublictity', this.publici.icon_url);
        console.log(this.imgPublicidad);
      }
    });
  }

}
