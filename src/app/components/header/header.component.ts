import { Component, OnInit, ElementRef, ViewChild, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faClock, faMailBulk, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class HeaderComponent implements OnInit {
  phone = faPhone;
  clock = faClock;
  mail = faMailBulk;
  menu = faBars;

  @ViewChild('header', { static: true }) header!: ElementRef;
  @ViewChild('backTopBtn', { static: true }) backTopBtn!: ElementRef;
  @ViewChild('navToggler', { static: true, read: ElementRef }) navToggler!: ElementRef;
  @ViewChild('navbar', { static: true, read: ElementRef }) navbar!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.addEventOnElem(this.navToggler.nativeElement, 'click', this.toggleNavbar.bind(this));
      this.addEventOnElem(document.querySelectorAll('[data-nav-link]'), 'click', this.closeNavbar.bind(this));
      this.headerActive(); // Run it initially in case the page is already scrolled
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.headerActive();
    }
  }

  addEventOnElem(elem: any, type: string, callback: EventListener) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }

  toggleNavbar() {
    this.navbar.nativeElement.classList.toggle('active');
  }

  closeNavbar() {
    this.navbar.nativeElement.classList.remove('active');
  }

  headerActive() {
    if (window.scrollY > 100) {
      this.header.nativeElement.classList.add('active');
      this.backTopBtn.nativeElement.classList.add('active');
    } else {
      this.header.nativeElement.classList.remove('active');
      this.backTopBtn.nativeElement.classList.remove('active');
    }
  }
}
