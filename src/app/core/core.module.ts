import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagNotFoundComponent } from './components/pag-not-found/pag-not-found.component';



@NgModule({
  declarations: [
    HeadersComponent,
    FooterComponent,
    PagNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadersComponent,
    FooterComponent
  ]
})
export class CoreModule { }
