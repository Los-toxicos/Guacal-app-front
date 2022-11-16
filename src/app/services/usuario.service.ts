import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  index():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url_backend}/usuarios`);
  }

  show(id: number):Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.url_backend}/usuarios/${id}`);
  }

  store(elUsuario:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.url_backend}/usuarios`, elUsuario);
  }

  update(elUsuario:Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.url_backend}/usuarios/${elUsuario.id}`, elUsuario);
  }

  destroy(id:number):Observable<Usuario[]> {
    return this.http.delete<Usuario[]>(`${environment.url_backend}/usuarios/${id}`);
  }
  
}