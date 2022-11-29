import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

  cartList: Book[] = [];

  constructor() { }

  addToCart(book: Book) {
    let item: Book = this.cartList.find((v1) => v1.title == book.title)!;
    if (!item) {
      this.cartList.push({...book});
    } else {
      item.quantity += book.quantity;
    }
  }
}
