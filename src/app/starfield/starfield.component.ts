import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-starfield',
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.scss']
})
export class StarfieldComponent implements OnInit {
  stars: {x: number, y: number, delay: number}[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    for (let i = 0; i < 200; i++) {
      this.stars.push({
        x: this.random(0, this.document.documentElement.scrollWidth),
        y: this.random(0, this.document.documentElement.scrollHeight),
        delay: this.random(0, 4)
      });
    }
  }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}