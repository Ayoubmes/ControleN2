import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car = 
    {
      marque: "",
      n_immatriculation: "",
      n_sieges: "",
      couleur: "",
      image: ""
    };

  constructor(private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.car = JSON.parse(this.activetedRoute.snapshot.params.car);
  }

}
