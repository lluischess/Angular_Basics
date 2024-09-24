import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListaDbzComponent } from './components/lista/lista.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListaDbzComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
