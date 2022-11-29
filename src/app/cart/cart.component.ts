import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private cart: BookCartService) {
    
  }
}
