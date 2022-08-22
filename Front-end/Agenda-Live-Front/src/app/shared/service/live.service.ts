import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  //Metodo para recuperar da API as Lives

  apiUrl = 'http://localhost:8080/lives';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

    public getLivesWithFlag(flag: string): Observable<ResponsePageable>{
      //Dentro desse metodo ele vai passar a URI
      return this.httpClient.get<ResponsePageable>(this.apiUrl)
    }

}
