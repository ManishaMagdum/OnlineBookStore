import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Book } from 'src/app/Model';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent {
@Input() book:Book={} as Book;
isInCart:boolean=false;

constructor(private cartService:CartService){}
addToCart(){
  this.isInCart=true;
  this.cartService.add(this.book);
 
}
removeFromCart(){
  this.isInCart=false;
  this.cartService.remove(this.book);
}

}

