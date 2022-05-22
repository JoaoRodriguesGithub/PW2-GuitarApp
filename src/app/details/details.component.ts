import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuitarServices } from 'src/services/guitars.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  guitars: { image: string, brand: string, model: string, year: number };

  guitar: { id: number };

  constructor(private guitarServices: GuitarServices, private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.guitar = {
      id: this.activeRoute.snapshot.params['id']
    }
    this.guitars = this.guitarServices.guitars[this.guitar.id];
  }

  remove() {
    this.guitarServices.serviceRemoveGuitars(this.guitar.id);
    this.router.navigate(['/']);
  }

}
