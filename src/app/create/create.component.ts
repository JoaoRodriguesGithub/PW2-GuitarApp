import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuitarServices } from 'src/services/guitars.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private router: Router, private guitarServices: GuitarServices) { }

  /*This method programs the button to add the new guitar information with the comunication from template to ts 
  with the serviceAddguitars method and then routes to home page.*/
  addGuitars(guitarUrl: string, guitarBrand: string, guitarModel: string, guitarYear: number) {
    this.guitarServices.serviceAddguitars({ image: guitarUrl, brand: guitarBrand, model: guitarModel, year: guitarYear })
    this.router.navigate(['/']);
  }
}
