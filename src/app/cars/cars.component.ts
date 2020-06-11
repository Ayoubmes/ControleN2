import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  i = 0;

  cars = [
    {
      marque: "Mercedes",
      n_immatriculation: "Ma1",
      n_sieges: "6",
      couleur: "grey",
      image: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg/range/berlines/_jcr_content/par/productinfotabnav/tabnav/productinfotabnavite_2037082479/tabnavitem/productinfotextimage/media2/slides/videoimageslide/image.MQ6.12.20190923142953.jpeg"
    },
    {
      marque: "ferrari",
      n_immatriculation: "Ma2",
      n_sieges: "5",
      couleur: "Red",
      image: "https://i.gaw.to/content/photos/33/53/335302_2018_Ferrari_812.jpg"
    },
    {
      marque: "Dodge",
      n_immatriculation: "Ma3",
      n_sieges: "4",
      couleur: "Blue",
      image: "https://www.dodge.com/mediaserver/iris?client=FCAUS&market=U&brand=D&vehicle=2020_LA&paint=PBM&fabric=&sa=LADR22,2DE,25E,APA&pov=fronthero&bkgnd=white&resp=jpg&x=2000&y=2400&w=5500&h=5900&height=&width=&width=500&width=500"
    },
    
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  goToCarsDetail(car){

    let ca = 
    {
      marque: "",
      n_immatriculation: "",
      n_sieges: "",
      couleur: "",
      image: ""
    };

    ca = car; 

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.cars[i].n_immatriculation === car.n_immatriculation){
        ca = this.cars[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.cars.length)
    
    this.router.navigate(["CarDetails", JSON.stringify(ca)]);

  }

}
