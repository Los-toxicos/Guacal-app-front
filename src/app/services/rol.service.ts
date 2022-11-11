import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Rol } from '../models/rol/rol.model';

@Injectable({
  providedIn: 'root'
})

export class RolService {

  constructor(private http: HttpClient) { }

  index(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.url_backend}/roles`);
  }

  show(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${environment.url_backend}/roles/${id}`);
  }

  store(elRol: Rol): Observable<Rol> {
    return this.http.post<Rol>(`${environment.url_backend}/roles`, elRol);
  }

  update(id: number, elRol: Rol): Observable<Rol> {
    return this.http.put<Rol>(`${environment.url_backend}/roles/${id}`, elRol);
  }

  destroy(id: number): Observable<Rol[]> {
    return this.http.delete<Rol[]>(`${environment.url_backend}/roles/${id}`);
  }

}
