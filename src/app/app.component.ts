import { Component, OnInit, Inject } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { fadeInOut } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';
}

