import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit, OnDestroy {

  images = [
    'assets/converse.png',
    'assets/puma.png',
    'assets/Le_Coq_Sportif.png',
    'assets/vans.png',
    'assets/new-balance.png'
    // Añade más rutas de imágenes si es necesario
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 1000); // Cambia de imagen cada 3 segundos
  }

  getTransformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
