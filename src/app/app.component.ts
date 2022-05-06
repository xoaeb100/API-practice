import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Api service to display countries and their population';
  countryData:any = null;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getCountries().subscribe((data)=>{
    this.countryData = data;
});
}


}


