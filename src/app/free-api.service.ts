import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class FreeApiService {
  private readonly urlApi = `https://swapi.dev/api`;
  constructor(private http: HttpClient) { }


  getUserData(personId: number): Observable<any> {
    return this.http.get(`${this.urlApi}/people/${personId}`);
  }
}
