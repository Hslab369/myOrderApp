import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {

  @Input('itemName') name: string = '';
  @Input('itemPrice') price: number = 0;
}
