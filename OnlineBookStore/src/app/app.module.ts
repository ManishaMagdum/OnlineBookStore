import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BookModule } from './Book/book/book.module';
import { CartComponent } from './Book/cart/cart.component';
import { AuthModule } from './Book/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
