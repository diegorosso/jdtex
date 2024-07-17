import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  brands = [
    { name: 'Brand 1', imgSrc: '/assets/puma.png' },
    { name: 'Brand 2', imgSrc: '/assets/Le_Coq_Sportif.png' },
    { name: 'Brand 3', imgSrc: '/assets/converse.png' },
    { name: 'Brand 4', imgSrc: '/assets/new-balance.png' },
    { name: 'Brand 5', imgSrc: '/assets/vans.png' },
    // Añade más marcas según sea necesario
  ];

  currentIndex = 0;

  ngOnInit() {
    // Inicialización previa a la carga completa del DOM
  }

  ngAfterViewInit() {
    // Asegúrate de que el DOM está completamente cargado antes de ejecutar updateSlider
    this.updateSlider();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.brands.length - 1;
    }
    this.updateSlider();
  }

  nextSlide() {
    if (this.currentIndex < this.brands.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateSlider();
  }

  updateSlider() {
    if (typeof document !== 'undefined') {
      const slider = document.querySelector('.slider') as HTMLElement;
      if (slider) {
        const width = slider.clientWidth;
        slider.style.transform = `translateX(-${this.currentIndex * width}px)`;
      }
    }
  }
}
