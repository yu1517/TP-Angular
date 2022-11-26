import { Component } from '@angular/core';
//import { EventEmitter } from '@angular/core';
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
