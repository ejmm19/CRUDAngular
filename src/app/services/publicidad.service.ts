import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {
  urlApi = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient) {
    this.getPublicidad();
  }

  getPublicidad() {
    return this.http.get(this.urlApi).pipe(
        map(res => {
          return res;
        })
    );
  }
}
