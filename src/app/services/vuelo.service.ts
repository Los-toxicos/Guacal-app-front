import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Vuelo } from '../models/vuelo/vuelo.model';

@Injectable({
  providedIn: 'root'
})

export class VueloService {

  constructor(private http: HttpClient) { }

  index(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>(`${environment.url_backend}/vuelos`);
  }

  show(id: number): Observable<Vuelo> {
    return this.http.get<Vuelo>(`${environment.url_backend}/vuelos/${id}`);
  }

  store(elVuelo: Vuelo): Observable<Vuelo> {
    return this.http.post<Vuelo>(`${environment.url_backend}/vuelos`, elVuelo);
  }

  update(id: number, elVuelo: Vuelo): Observable<Vuelo> {
    return this.http.put<Vuelo>(`${environment.url_backend}/vuelos/${id}`, elVuelo);
  }

  destroy(id: number): Observable<Vuelo[]> {
    return this.http.delete<Vuelo[]>(`${environment.url_backend}/vuelos/${id}`);
  }

}
