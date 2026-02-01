import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'mandisa-products',
  standalone: true,
  imports: [CommonModule , SwiperModule],
  templateUrl: './mandisa-products.component.html',
  styleUrl: './mandisa-products.component.scss'
})
export class MandisaProductsComponent {

}
