import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permiso } from '../models/permiso/permiso.model';

@Injectable({
  providedIn: 'root'
})

export class PermisoService {

  constructor(private http: HttpClient) { }

  index(): Observable<Permiso[]> {
    return this.http.get<Permiso[]>(`${environment.url_backend}/permisos`);
  }

  show(id: number): Observable<Permiso> {
    return this.http.get<Permiso>(`${environment.url_backend}/permisos/${id}`);
  }

  store(elPermiso: Permiso): Observable<Permiso> {
    return this.http.post<Permiso>(`${environment.url_backend}/permisos`, elPermiso);
  }

  update(elPermiso: Permiso): Observable<Permiso> {
    return this.http.put<Permiso>(`${environment.url_backend}/permisos/${elPermiso.id}`, elPermiso);
  }

  destroy(id: number): Observable<Permiso[]> {
    return this.http.delete<Permiso[]>(`${environment.url_backend}/permisos/${id}`);
  }

}
