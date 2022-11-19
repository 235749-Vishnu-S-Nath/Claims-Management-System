import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalPageComponent } from './hospital-page/hospital-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"hospital-page", component:HospitalPageComponent},
    {path:"login-page",component:LoginPageComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//routes