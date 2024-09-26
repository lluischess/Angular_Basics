import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListaDbzComponent } from './components/lista/lista.component';
import { FormDbzComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListaDbzComponent,
    FormDbzComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
