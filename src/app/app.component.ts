import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio';
  stars: {x: number, y: number, delay: number}[] = [];
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    for (let i = 0; i < 200; i++) {
      this.stars.push({
        x: this.random(0, this.window.innerWidth),
        y: this.random(0, this.window.innerHeight),
        delay: this.random(0, 4)
      });
    }
  }
  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  get window(): Window {
    return this.document.defaultView!;
  }
}

