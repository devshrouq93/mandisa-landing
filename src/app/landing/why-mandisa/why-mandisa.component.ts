import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'why-mandisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-mandisa.component.html',
  styleUrl: './why-mandisa.component.scss'
}) 
export class WhyMandisaComponent implements OnInit {

  is_mobile:boolean=false;

  // constructor( private observer: BreakpointObserver) {
  //  this.observer.observe(['(max-width:500px)']).subscribe((result:any) => {
  //     if (result.matches) {
  //       this.is_mobile = true;  
  //     } else {
  //       this.is_mobile = false; 
  //     }
  //   });
  // }

  ngOnInit(): void {
    
  }

  data:any =[
    {id:1, title:'Competitive Prices' , imagePath:'../../../assets/images/money-bill.svg'},
    {id:2, title:'Assistive Team', imagePath:'../../../assets/images/shake-hands.svg'},
    {id:3, title:'Always Green', imagePath:'../../../assets/images/seeds.svg'},
    {id:4, title:'Highest Purity', imagePath:'../../../assets/images/tube.svg'},
  ]
}
  