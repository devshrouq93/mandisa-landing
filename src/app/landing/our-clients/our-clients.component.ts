import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { SwiperModule } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'our-clients',
  standalone: true,
  imports: [CommonModule , SwiperModule],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.scss'
})
export class OurClientsComponent {
  breakpoints:any = {
    '0': {
      slidesPerView: 2,
      spaceBetween: 8
    },
    '425': {
      slidesPerView: 3,
      spaceBetween: 8
    },
    '768': {
      slidesPerView: 4,
      spaceBetween: 10
    },
    '1024': {
      slidesPerView: 5,
      spaceBetween: 12
    },
    '1280': {
      slidesPerView: 7,
      spaceBetween: 16
    }
  }
  
  our_clients:any=[
    {id:1 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/lotte.png.webp'},
    {id:2 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/shinsegea.png.webp'},
    {id:3 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/musinsa.png.webp'},
    {id:4 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/traders.png.webp'},
    {id:5 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/blank.png.webp'},
    {id:6 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/doosaan.png.webp'},
    {id:7 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/kakaomakers.png.webp'},
    {id:8 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/casamia.png.webp'},
    {id:1 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/lotte.png.webp'},
    {id:1 , imagePath:'https://mandisanaturals.com/wp-content/uploads/2023/11/lotte.png.webp'},
  ]
 
}
