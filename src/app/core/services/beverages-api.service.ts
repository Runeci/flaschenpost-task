import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beverage } from '../../shared/models/beverages.interfaces';
import { DATA_API_URL } from '../../shared/models/consts';

@Injectable({
    providedIn: 'root'
})
export class BeveragesApiService {

    constructor(private http: HttpClient) {
    }

    public getBeverages(): Observable<Beverage[]> {
        return this.http.get<Beverage[]>(DATA_API_URL);
    }
}
