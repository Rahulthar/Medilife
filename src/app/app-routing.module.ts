import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PagNotFoundComponent } from './core/components/pag-not-found/pag-not-found.component';

const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:PagNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
