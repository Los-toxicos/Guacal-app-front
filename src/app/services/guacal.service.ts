import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Guacal } from '../models/guacal/guacal.model';

@Injectable({
  providedIn: 'root'
})

export class GuacalService {

  constructor(private http: HttpClient) { }

  index(): Observable<Guacal[]> {
    return this.http.get<Guacal[]>(`${environment.url_backend}/guacales`);
  }

  show(id: number): Observable<Guacal> {
    return this.http.get<Guacal>(`${environment.url_backend}/guacales/${id}`);
  }

  store(elGuacal: Guacal): Observable<Guacal> {
    return this.http.post<Guacal>(`${environment.url_backend}/guacales`, elGuacal);
  }

  update(id: number, elGuacal: Guacal): Observable<Guacal> {
    return this.http.put<Guacal>(`${environment.url_backend}/guacales/${id}`, elGuacal);
  }

  destroy(id: number): Observable<Guacal[]> {
    return this.http.delete<Guacal[]>(`${environment.url_backend}/guacales/${id}`);
  }
}
