import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Book/book/book.component';
import { CartComponent } from './Book/cart/cart.component';
import { LoginComponent } from './Book/auth/login/login.component';
import { RegisterComponent } from './Book/auth/register/register.component';

const routes: Routes = [
 {path:'',component:BookComponent} ,
 {path:'cart',component:CartComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
