import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOKService } from './book.service';
import { BookComponent } from './book.component';
import { SingleBookComponent } from '../single-book/single-book.component';



@NgModule({
  declarations: [BookComponent,SingleBookComponent],
  providers:[BOOKService],
  imports: [ CommonModule ],
  exports:[BookComponent],
})
export class BookModule { }
