import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Veterinario } from '../models/veterinario/veterinario.model';

@Injectable({
  providedIn: 'root'
})

export class VeterinarioService {

  constructor(private http: HttpClient) { }

  index(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(`${environment.url_backend}/veterinarios`);
  }

  show(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${environment.url_backend}/veterinarios/${id}`);
  }

  store(elVeterinario: Veterinario): Observable<Veterinario> {
    return this.http.post<Veterinario>(`${environment.url_backend}/veterinarios`, elVeterinario);
  }

  update(id: number, elVeterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`${environment.url_backend}/veterinarios/${id}`, elVeterinario);
  }

  destroy(id: number): Observable<Veterinario[]> {
    return this.http.delete<Veterinario[]>(`${environment.url_backend}/veterinarios/${id}`);
  }

}
