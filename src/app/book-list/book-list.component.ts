import { Component } from '@angular/core';
import { Book } from './Book'; //importa la interfas book del archivo book

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] = [
    {
      title: "Los Siete Maridos de Evelyn Hugo",
      author: "Taylor Jenkins",
      price: 4900,
      stock: 2,
      image: "assets/img/losSieteMaridosdeEvelynHugo.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      title: "Caballo de Fuego - Paris",
      author: "Florencia Bonelli",
      price: 4300,
      stock: 9,
      image: "assets/img/caballodefuego-paris.jpg",
      clearance: true,
      quantity: 0,
    }, {
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      price: 3900,
      stock: 0,
      image: "assets/img/AsesinatoenelOrientExpress.jpg",
      clearance: false,
      quantity: 0,
    },
  ];
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
