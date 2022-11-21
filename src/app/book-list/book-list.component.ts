import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  book = {
    "title": "Los Siete Maridos de Evelyn Hugo",
    "author": "Taylor Jenkins",
    "price": 4.900,
    "stock": 9,
    "image": "assets/img/losSieteMaridosdeEvelynHugo.jpg"

  }
}
