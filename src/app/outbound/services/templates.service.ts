import { Injectable } from '@angular/core';

import { filter, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Motif } from '../models/motif.model';


@Injectable({
  providedIn: 'root'
})
export class MotifService {
  private urlEndPoint:string = 'http://localhost:8080/api/motifs';
  //private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {
   }

  getMotifs(): Observable<Motif[]> {
    return this.http.get<Motif[]>(this.urlEndPoint).pipe(
      filter(motifs => motifs.length != 0),
      );
  }

}