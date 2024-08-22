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
    { src: '../../../assets/1.jpg', alt: '',  },
    { src: '../../../assets/2.jpg', alt: '',  },
    { src: '../../../assets/3.jpg', alt: '',  },
    { src: '../../../assets/4.jpg', alt: '',  },
    { src: '../../../assets/5.jpg', alt: '',  },
    { src: '../../../assets/6.jpg', alt: '',  },
    { src: '../../../assets/7.jpg', alt: '',  },
    { src: '../../../assets/8.jpg', alt: '',  },
    { src: '../../../assets/9.jpg', alt: '',  },
    { src: '../../../assets/10.jpg', alt: '', },
    { src: '../../../assets/11.jpg', alt: '', },
    { src: '../../../assets/12.jpg', alt: '', },
    { src: '../../../assets/13.jpg', alt: '', },
    { src: '../../../assets/14.jpg', alt: '', },
    { src: '../../../assets/15.jpg', alt: '', },
    { src: '../../../assets/16.jpg', alt: '', },
    { src: '../../../assets/17.jpg', alt: '', },
    { src: '../../../assets/18.jpg', alt: '', },
    { src: '../../../assets/19.jpg', alt: '', },
    { src: '../../../assets/20.jpg', alt: '', },
    { src: '../../../assets/21.jpg', alt: '', },
    { src: '../../../assets/22.jpg', alt: '', },
    { src: '../../../assets/23.jpg', alt: '', },
    { src: '../../../assets/24.jpg', alt: '', },
    { src: '../../../assets/25.jpg', alt: '', },
    { src: '../../../assets/26.jpg', alt: '', },
    { src: '../../../assets/27.jpg', alt: '', },
    { src: '../../../assets/28.jpg', alt: '', },
    { src: '../../../assets/29.jpg', alt: '', }
  ];
}
