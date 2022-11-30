import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
//import { EventEmitter } from '@angular/core';
import { Book } from './Book'; //importa la interfas book del archivo book

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent {
[x: string]: any;
  books: Book[] = [];

  constructor(
    private cart: BookCartService,
    private booksDataService: BookDataService) {
  }

  ngOnInit(): void{
    this.booksDataService.getAll().subscribe(books => this.books = books);
  }

  addToCart(book): void{
    this.cart.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }


  // Funcion que sube/baja cantidad a comprar con parametro ball de tipo Ball.
  // upQuantity(): void { // este metodo devuelve void porque no lo vamos a utilizar
  //   if (this.quantity < this.max) {
  //     this.quantity++;
  //     // Le pasamos su nuevo valor.
  //     this.quantityChange.emit(this.quantity);
  //   } else {
  //     this.maxReached.emit("Se alcanzó el máximo en stock");
  //   }
  // }

  // downQuantity(): void {
  //   if (this.quantity > 0) {
  //     this.quantity--;
  //     this.quantityChange.emit(this.quantity);
  //   }
  // }

  // changeQuantity(event): void {
  //   // event.target.value es el valor ingreasdo por el usuario en este caso en el evento del input.

  //   // Compruebo que no sea negativo y en caso de serlo lo vuelvo positivo.
  //   if (event.target.value < 0) {
  //     event.target.value = event.target.value * (-1);
  //     this.quantity = event.target.value;
  //     this.quantityChange.emit(this.quantity);
  //     // otra opcion -> ball.quantity = 0;
  //   }

  //   // Compruebo que la cantidad ingresada no supere al stock
  //   if (event.target.value > this.max) {
  //     this.quantity = this.max;
  //     this.quantityChange.emit(this.quantity);
  //     this.maxReached.emit("No hay más! Se agregó al carrito el máximo disponible en stock");
  //   }

  //   // Substraccion de ceros a la izquierda
  //   if (event.target.value) {
  //     event.target.value = event.target.value - 0;

  //   }

  // }

}

  //
