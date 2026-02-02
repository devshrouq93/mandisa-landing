import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  data:any = [
    {id:1 , title:'Loofah Sponge' , description:'Mandisa Egyptian loofah scrub features a slightly rough fibres to gently exfoliate the skin.'},
    {id:2 , title:'Egyptian Cotton' , description:'As the “best” cotton in the world, its softness and superior features is what you find in our products.'},
    {id:3 , title:'Mandisa Soap' , description:'Made with the purest ingredients in our land. Cleans well yet soft on skin and free of harsh chemicals.'},
    {id:4 , title:'Special Herb Blends' , description:'Professionally grown and dried with love in the organic fields in the heart of holy lands of Sinai Peninsula.'},
  ]
}
