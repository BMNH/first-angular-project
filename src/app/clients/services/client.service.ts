import { EventEmitter, Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { CLIENTS } from './clients.json';
import { filter, Observable, map, delay, tap, Subject } from 'rxjs';
import { of } from 'rxjs';
import { CommaExpr } from '@angular/compiler';
import { Event } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint:string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {
   }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint).pipe(
      filter(clients => clients.length != 0),
      delay(2000),
      );
  }

  create(client: Client) : Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {headers: this.httpHeaders})
  }

  getClient(id): Observable<Client>{
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`)
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndPoint}/${client.id}`, client, {headers: this.httpHeaders})
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
