import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartList$: Observable<Book[]>;
  public total: number = 0;

  constructor(private cart: BookCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.total = cart.total;
  }

  remove(id: number): void {
    this.cart.clearCart();
    this.total = 0;
  }
}
