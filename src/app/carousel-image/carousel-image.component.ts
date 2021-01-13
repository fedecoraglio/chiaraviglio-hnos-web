//Importt the Image interface
import { Component } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'css-carousel',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss'],
})
//Carousel Component itself
export class CarouselImageComponent {
    //images data to be bound to the template
	public images = IMAGES;
}

var IMAGES: Image[] = [
	{ "title": "Young Peter Cech", "url": "/assets/home_1_1.jpeg"},	
	{ "title": "We are covered", "url": "/assets/home_3_3.jpeg" },
	{ "title": "Generation Gap", "url": "/assets/home_6_6.jpeg"},
	{ "title": "Potter Me", "url": "/assets/home_7_7.jpeg"},
];