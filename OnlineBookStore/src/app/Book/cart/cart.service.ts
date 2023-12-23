import { Injectable } from '@angular/core';
import { Book } from '../../Model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
 Cart: Book[]=[]

  constructor() { }
  add(book:Book){
    this.Cart.push(book);
  }
  get(){
    return this.Cart;
  }
  remove(book:Book){
    this.Cart=this.Cart.filter((b)=>b!=book);
  }
}
