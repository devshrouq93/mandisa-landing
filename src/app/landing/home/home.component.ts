import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MandisaProductsComponent } from '../mandisa-products/mandisa-products.component';
import { WhyMandisaComponent } from '../why-mandisa/why-mandisa.component';
import { OurClientsComponent } from '../our-clients/our-clients.component';
import { EgyptDeliveryComponent } from '../egypt-delivery/egypt-delivery.component';

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [CommonModule ,BannerComponent ,AboutUsComponent ,WhyMandisaComponent,MandisaProductsComponent ,OurClientsComponent ,EgyptDeliveryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
