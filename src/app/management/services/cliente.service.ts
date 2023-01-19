import { ICrudService } from './i-crud-service';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable, tap, catchError, first, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // readonly endpoint = 'http://localhost:3000/clientes'
  apiUrl: string = environment.API_URL + '/client'

  constructor( private http: HttpClient) { }


  // getAll(): Observable<Cliente>{
  //   return this.http.get<Cliente>(this.endpoint);

  // }

  listAll() {
    return this.http.get<Cliente[]>(this.apiUrl).pipe( //o
      tap(client => console.log(client)) //
    );
  }
  get(termoBusca?: string | undefined): Observable<Cliente[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Cliente[]>(url);
  }
  getById(id: number): Observable<Cliente> {
    let url = this.apiUrl + id;
    return this.http.get<Cliente>(url);
  }

  insert(objeto: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, objeto);
  }

  update(objeto: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.apiUrl, objeto);
  }
  delete(id: string): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }


}
