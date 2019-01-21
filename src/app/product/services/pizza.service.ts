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
    return this.http.get<PizzaInterface[]>(this.urlApi);
  }

  create(pizza: PizzaInterface): Observable<PizzaInterface> {
    return this.http.post<PizzaInterface>(this.urlApi, pizza);
  }

  update(pizza: PizzaInterface): Observable<PizzaInterface> {
    return this.http.put<PizzaInterface>(`${this.urlApi}/${pizza.id}`, pizza);
  }

  remove(pizza: PizzaInterface): Observable<PizzaInterface> {
    return this.http.delete<PizzaInterface>(`${this.urlApi}/${pizza.id}`);
  }
}
