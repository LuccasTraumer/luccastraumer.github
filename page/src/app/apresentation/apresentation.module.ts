import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [MainSectionComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ApresentationModule { }
