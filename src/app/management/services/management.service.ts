import { ICrudService } from './i-crud-service';
import { Management } from './../model/management';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagementService implements ICrudService<Management> {
  constructor(private http: HttpClient) { }
  apiUrl: string = environment.API_URL + '/client/'

  // filter(x: any, arg1: { management: any; "": any; }): import("rxjs").Observable<Management[]> {
  //   throw new Error('Method not implemented.');
  // }

   get(termoBusca?: string | undefined): Observable<Management[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Management[]>(url);
  }



  listAll() {
    return this.http.get<Management[]>(this.apiUrl).pipe( //o
      first(),
      delay(2000),
      tap(management => console.log(management)) //
    );
  }

  getById(id: number): Observable<Management> {
    let url = this.apiUrl + id;
    return this.http.get<Management>(url);
  }

  insert(objeto: Management): Observable<Management> {
    return this.http.post<Management>(this.apiUrl, objeto);
  }

  update(objeto: Management): Observable<Management> {
    return this.http.put<Management>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }

}
