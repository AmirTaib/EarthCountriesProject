import { Injectable } from '@angular/core';
import { Countries } from '../models/countries.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';





@Injectable()
export class CountriesService {

    allCountries: Countries;
    apiSearch = 'all';

    constructor(private http: HttpClient) { }


    getAll(): Observable<Countries> {
        return this.http.get<Countries>(`https://restcountries.eu/rest/v2/${this.apiSearch}`);
    }



}
