import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Agrega CommonModule a los imports
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  arrow = faArrowRight;

  // Array de imágenes con sus propiedades
  images = [
    {
      src: '../../../assets/galery2.jpg',
      alt: 'galery',
      width: 422,
      height: 550,
    },
    {
      src: '../../../assets/galery4.jpg',
      alt: 'galery',
      width: 422,
      height: 550,
    },
    {
      src: '../../../assets/galery1.jpg',
      alt: 'galery',
      width: 422,
      height: 550,
    },
    {
      src: '../../../assets/galery5.jpg',
      alt: 'galery',
      width: 422,
      height: 550,
    },
    { src: '../../../assets/1.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/2.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/3.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/4.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/5.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/6.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/7.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/8.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/9.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/10.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/11.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/12.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/13.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/14.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/15.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/16.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/17.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/18.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/19.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/20.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/21.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/22.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/23.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/24.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/25.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/26.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/27.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/28.jpg', alt: '', width: 422, height: 550 },
    { src: '../../../assets/29.jpg', alt: '', width: 422, height: 550 }
  ];
}
