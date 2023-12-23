import { Component } from '@angular/core';
import { Book } from 'src/app/Model';
import { BOOKService } from './book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private bookService:BOOKService){

  }
  books:Book[]=[];
    

isShowing:boolean =true;

ngOnInit():void{
this.books=this.bookService.getBooks();
}

}
