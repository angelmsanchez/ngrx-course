import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PizzaInterface } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable()
export class PizzaService {

  private urlApi: string = `${environment.apiUrl}pizzas`;

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<PizzaInterface[]> {
    console.log('service');
    return this.http.get<PizzaInterface[]>(this.urlApi);
  }
}
