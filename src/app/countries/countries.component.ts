import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';
import { Countries } from '../shared/models/countries.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  showSelectedCountries: Countries;

  constructor(private httpFromService: CountriesService) { }

  ngOnInit() {
    this.httpFromService.getAll().subscribe(result => {
      this.showSelectedCountries = result;
    });
  }




  setSelectedCountries(requestValue: string) {
    if (!requestValue) {
      this.httpFromService.apiSearch = `all`;
    } else {
      this.httpFromService.apiSearch = `name/` + requestValue;
    }
    this.httpFromService.getAll().subscribe(result => {
      this.showSelectedCountries = result;
    });

  }

}
