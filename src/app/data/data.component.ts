import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {


  constructor() { }
  @Input() country!:null


  ngOnInit(): void {
  }

}
