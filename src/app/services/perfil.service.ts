import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Perfil } from '../models/perfil/perfil.model';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  constructor(private http: HttpClient) { }

  index(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(`${environment.url_backend}/perfiles`);
  }

  show(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${environment.url_backend}/perfiles/${id}`);
  }

  store(elPerfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(`${environment.url_backend}/perfiles`, elPerfil);
  }

  update(id: number, elPerfil: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${environment.url_backend}/perfiles/${id}`, elPerfil);
  }

  destroy(id: number): Observable<Perfil[]> {
    return this.http.delete<Perfil[]>(`${environment.url_backend}/perfiles/${id}`);
  }

}
