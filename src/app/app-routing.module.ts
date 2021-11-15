import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { IpoListingComponent } from './components/ipo-listing/ipo-listing.component';
import { AdminComponent } from './components/admin/admin.component';
const routes: Routes = [
  { path: 'auth', component: AuthComponent,
  children: [
    { path: 'register',  component: RegisterComponent},
    { path: 'login',  component: LoginComponent}
  ]},
  {path: "home", component: HomeComponent},
  {path: "ipo-listing", component:IpoListingComponent},
  {path: "admin", component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
