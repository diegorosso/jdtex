import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Agrega CommonModule a los imports
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  arrow = faArrowRight;

  images: Image[] = [
    { src: '../../../assets/1.webp', alt: '' },
    { src: '../../../assets/2.webp', alt: '' },
    { src: '../../../assets/3.webp', alt: '' },
    { src: '../../../assets/4.webp', alt: '' },
    { src: '../../../assets/5.webp', alt: '' },
    { src: '../../../assets/6.webp', alt: '' },
    { src: '../../../assets/7.webp', alt: '' },
    { src: '../../../assets/8.webp', alt: '' },
    { src: '../../../assets/9.webp', alt: '' },
    { src: '../../../assets/10.webp', alt: '' },
    { src: '../../../assets/11.webp', alt: '' },
    { src: '../../../assets/12.webp', alt: '' },
    { src: '../../../assets/13.webp', alt: '' },
    { src: '../../../assets/14.webp', alt: '' },
    { src: '../../../assets/15.webp', alt: '' },
    { src: '../../../assets/16.webp', alt: '' },
    { src: '../../../assets/17.webp', alt: '' },
    { src: '../../../assets/18.webp', alt: '' },
    { src: '../../../assets/19.webp', alt: '' },
    { src: '../../../assets/20.webp', alt: '' },
    { src: '../../../assets/21.webp', alt: '' },
    { src: '../../../assets/22.webp', alt: '' },
    { src: '../../../assets/23.webp', alt: '' },
    { src: '../../../assets/24.webp', alt: '' },
    { src: '../../../assets/25.webp', alt: '' },
    { src: '../../../assets/26.webp', alt: '' },
    { src: '../../../assets/27.webp', alt: '' },
    { src: '../../../assets/28.webp', alt: '' },
    { src: '../../../assets/29.webp', alt: '' }
  ];

  visibleImages: Image[] = this.images.slice(0, 5);
  currentIndex = 0;

  updateVisibleImages(): void {
    this.visibleImages = this.images.slice(this.currentIndex, this.currentIndex + 5);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleImages();
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 5) {
      this.currentIndex++;
      this.updateVisibleImages();
    }
  }
}
