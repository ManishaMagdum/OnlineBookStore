import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BOOKService {

  constructor() { }
  getBooks(){
   return [
      {
        name:'Clean Code',
        author:'Robert C. Martin',
        src:"https://m.media-amazon.com/images/I/51E2055ZGUL._SY522_.jpg",
        amount:700
      },
      {
        name:'The Pragmatic Programmer',
      author:' David Thomas',
      src:'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY445_SX342_.jpg',
      amount:800
      },
      {
        name:'CODE Complete',
        author:'Steve McConell',
        src:'https://m.media-amazon.com/images/I/61GzazUmKyL._SY522_.jpg',
        amount:500
      },
      {
        name:'Programming Pearls',
        author:'Jon Bently',
        src:'https://m.media-amazon.com/images/I/71KsxtHA8qL._SY522_.jpg',
        amount:450
      }
        ]
  }
}
