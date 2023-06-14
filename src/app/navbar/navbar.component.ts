import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobile = window.innerWidth < 700;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 700;
  }
}
