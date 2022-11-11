import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Aerolinea } from '../models/aerolinea/aerolinea.model';

@Injectable({
  providedIn: 'root'
})

export class AerolineaService {

  constructor(private http: HttpClient) { }
  
  index(): Observable<Aerolinea[]> {
    return this.http.get<Aerolinea[]>(`${environment.url_backend}/aerolineas`);
  }

  show(id: number): Observable<Aerolinea> {
    return this.http.get<Aerolinea>(`${environment.url_backend}/aerolineas/${id}`);
  }

  store(laAerolinea: Aerolinea): Observable<Aerolinea> {
    return this.http.post<Aerolinea>(`${environment.url_backend}/aerolineas`, laAerolinea);
  }

  update(id: number, laAerolinea: Aerolinea): Observable<Aerolinea> {
    return this.http.put<Aerolinea>(`${environment.url_backend}/aerolineas/${id}`, laAerolinea);
  }

  destroy(id: number): Observable<Aerolinea[]> {
    return this.http.delete<Aerolinea[]>(`${environment.url_backend}/aerolineas/${id}`);
  }
}

