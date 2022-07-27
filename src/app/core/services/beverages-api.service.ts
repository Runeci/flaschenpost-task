import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beverage } from '../../shared/models/beverages.interfaces';
import { MOCK_API } from '../../shared/models/consts';

@Injectable({
  providedIn: 'root'
})
export class BeveragesApiService {

  constructor(private http: HttpClient) { }

  public getBeverages(): Observable<Beverage[]> {
    return this.http.get<Beverage[]>(MOCK_API);
  }
}
