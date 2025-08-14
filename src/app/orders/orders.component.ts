import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-orders',
  imports: [ItemComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  customerName = 'John Doe';
  items = [
    { itemName: 'Laptop', itemPrice: 2000 },
    { itemName: 'Phone', itemPrice: 1000 },
    { itemName: 'Tablet', itemPrice: 800 },
    { itemName: 'Headphones', itemPrice: 1200 }
  ];

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + item.itemPrice, 0);
  }
}
