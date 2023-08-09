import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BootComponent } from './boot/boot.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationFormComponent },
    // { path: 'userdetails', component: BootComponent },
    { path: 'nav', component: NavbarComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  