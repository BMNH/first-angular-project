import { EventEmitter, Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { Observable, delay } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const CLIENTS = [{ "id": 1, "name": "Andrés", "surname": "Guzmán", "email": "profesor@bolsadeideas.com", "createAt": "2018-01-01" }, { "id": 2, "name": "Mr. John", "surname": "Doe", "email": "john.doe@gmail.com", "createAt": "2018-01-02" }, { "id": 3, "name": "Linus", "surname": "Torvalds", "email": "linus.torvalds@gmail.com", "createAt": "2018-01-03" }, { "id": 4, "name": "Rasmus", "surname": "Lerdorf", "email": "rasmus.lerdorf@gmail.com", "createAt": "2018-01-04" }, { "id": 5, "name": "Erich", "surname": "Gamma", "email": "erich.gamma@gmail.com", "createAt": "2018-02-01" }, { "id": 6, "name": "Richard", "surname": "Helm", "email": "richard.helm@gmail.com", "createAt": "2018-02-10" }, { "id": 7, "name": "Ralph", "surname": "Johnson", "email": "ralph.johnson@gmail.com", "createAt": "2018-02-18" }, { "id": 8, "name": "John", "surname": "Vlissides", "email": "john.vlissides@gmail.com", "createAt": "2018-02-28" }, { "id": 9, "name": "Dr. James", "surname": "Gosling", "email": "james.gosling@gmail.com", "createAt": "2018-03-03" }, { "id": 10, "name": "Magma", "surname": "Lee", "email": "magma.lee@gmail.com", "createAt": "2018-03-04" }, { "id": 11, "name": "Tornado", "surname": "Roe", "email": "tornado.roe@gmail.com", "createAt": "2018-03-05" }, { "id": 12, "name": "Jade", "surname": "Doe", "email": "jane.doe@gmail.com", "createAt": "2018-03-06" }];
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlEndPoint: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    /* return this.http.get<Client[]>(this.urlEndPoint).pipe(
      filter(clients => clients.length != 0),
      delay(2000),
      ); */

    return of(CLIENTS).pipe(
      delay(2000)
    )
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, { headers: this.httpHeaders })
  }

  getClient(id: string | number): Observable<Client> {
    return of(CLIENTS.find(c => c.id == id)).pipe(delay(1000))
    // this.http.get<Client>(`${this.urlEndPoint}/${id}`)
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlEndPoint}/${client.id}`, client, { headers: this.httpHeaders })
  }

  deleteClient(id: number | string): Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }

}
