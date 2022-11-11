import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Ruta } from '../models/ruta/ruta.model';

@Injectable({
  providedIn: 'root'
})

export class RutaService {

  constructor(private http: HttpClient) { }

  index(): Observable<Ruta[]> {
    return this.http.get<Ruta[]>(`${environment.url_backend}/rutas`);
  }

  show(id: number): Observable<Ruta> {
    return this.http.get<Ruta>(`${environment.url_backend}/rutas/${id}`);
  }

  store(laRuta: Ruta): Observable<Ruta> {
    return this.http.post<Ruta>(`${environment.url_backend}/rutas`, laRuta);
  }

  update(id: number, laRuta: Ruta): Observable<Ruta> {
    return this.http.put<Ruta>(`${environment.url_backend}/rutas/${id}`, laRuta);
  }

  destroy(id: number): Observable<Ruta[]> {
    return this.http.delete<Ruta[]>(`${environment.url_backend}/rutas/${id}`);
  }

}
