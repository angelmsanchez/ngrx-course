import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ToppingInterface } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable()
export class ToppingService {

  private urlApi: string = `${environment.apiUrl}toppings`;

  constructor(
    private http: HttpClient
  ) { }

  getToppings(): Observable<ToppingInterface[]> {
    return this.http.get<ToppingInterface[]>(this.urlApi);
  }
}
