import { Management } from './../model/management';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  constructor(private httpClient: HttpClient) { }

  // filter(x: any, arg1: { management: any; "": any; }): import("rxjs").Observable<Management[]> {
  //   throw new Error('Method not implemented.');
  // }
   API: string =  '/assets/buy.json';
   get(termoBusca?: string | undefined): Observable<Management[]> {
    let url = this.API;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.httpClient.get<Management[]>(url);
  }



  listAll() {
    return this.httpClient.get<Management[]>(this.API).pipe( //o
      first(),
      delay(2000),
      tap(management => console.log(management)) //
    );
  }

  getById(id: number): Observable<Management> {
    let url = this.API + id;
    return this.httpClient.get<Management>(url);
  }

  insert(objeto: Management): Observable<Management> {
    return this.httpClient.post<Management>(this.API, objeto);
  }

  update(objeto: Management): Observable<Management> {
    return this.httpClient.put<Management>(this.API, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.API + id;
    return this.httpClient.delete<void>(url);
  }

}
