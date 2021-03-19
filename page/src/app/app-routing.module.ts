import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSectionComponent } from './apresentation/main-section/main-section.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
