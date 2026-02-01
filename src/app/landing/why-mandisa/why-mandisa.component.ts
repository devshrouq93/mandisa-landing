import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'why-mandisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-mandisa.component.html',
  styleUrl: './why-mandisa.component.scss'
})
export class WhyMandisaComponent {

  data:any =[
    {id:1, title:'Competitive Prices' , imagePath:'../../../assets/images/money-bill.svg'},
    {id:2, title:'Assistive Team', imagePath:'../../../assets/images/shake-hands.svg'},
    {id:3, title:'Always Green', imagePath:'../../../assets/images/seeds.svg'},
    {id:4, title:'Highest Purity', imagePath:'../../../assets/images/tube.svg'},
  ]
}
  