import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) 
  },
  { path: 'Cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, 
  { path: 'CarDetails/:car', loadChildren: () => import('./car-details/car-details.module').then(m => m.CarDetailsModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
