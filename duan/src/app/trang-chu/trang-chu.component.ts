import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-trang-chu',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent {
  title = 'Trang chủ';
  products = [
    {
      name: 'Áo thun nam',
      price: 199000,
      image: 'https://via.placeholder.com/150?text=Ao+Thun'
    },
    {
      name: 'Giày sneaker',
      price: 499000,
      image: 'https://via.placeholder.com/150?text=Giay+Sneaker'
    },
    {
      name: 'Túi xách nữ',
      price: 299000,
      image: 'https://via.placeholder.com/150?text=Tui+Xach'
    }
  ];
}
