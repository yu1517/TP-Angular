import { Component, Input } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number();

  upQuantity(book: Book): void { // este metodo devuelve void porque no lo vamos a utilizar
    if (book.quantity < book.stock)
      book.quantity++;
  }
  downQuantity(book: Book): void {
    if (book.quantity > 0)
      book.quantity--;
  }
  changeQuantity(event, book: Book): void {
    console.log(event.key);
  }

}
