import { Component, OnInit } from '@angular/core';
import { GuitarServices } from 'src/services/guitars.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  guitarServices: GuitarServices

  guitars: Array<{ image: string, brand: string, model: string, year: number }> = [];

  constructor(guitarServices: GuitarServices) {
    this.guitarServices = guitarServices;
  }

  ngOnInit() {
    this.guitars = this.guitarServices.guitars;
  }

}
