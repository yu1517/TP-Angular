import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

  private _cartList: Book[] = [];
  public cartList: BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);
  public total: number = 0;

  constructor() { }

  addToCart(book: Book) {
    let item: Book = this._cartList.find((v1) => v1.title == book.title)!;
    if (!item) {
      this._cartList.push({...book});
    } else {
      item.quantity += book.quantity;
    }
    this.total += book.price * book.quantity;
    this.cartList.next(this._cartList); // equivale al emit del evento
  }

  clearCart() {
    this._cartList = [];
    this.cartList.next(this._cartList);
  }
  remove(book: Book){
    for (let i = 0; i < this._cartList.length; i++) {
      if(this._cartList[i].title == book.title ){
        this._cartList.splice(i, book.id);
      }
    }

  }
}
