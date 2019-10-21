import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';


const routes: Routes = [
  {
    path: '', component: MainWrapperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
