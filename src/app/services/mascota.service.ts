import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mascota } from '../models/mascota/mascota.model';

@Injectable({
  providedIn: 'root'
})

export class MascotaService {

  constructor(private http: HttpClient) { }

  index(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${environment.url_backend}/mascotas`);
  }

  show(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${environment.url_backend}/mascotas/${id}`);
  }

  store(laMascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(`${environment.url_backend}/mascotas`, laMascota);
  }

  update(id: number, laMascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${environment.url_backend}/mascotas/${id}`, laMascota);
  }

  destroy(id: number): Observable<Mascota[]> {
    return this.http.delete<Mascota[]>(`${environment.url_backend}/mascotas/${id}`);
  }

}
