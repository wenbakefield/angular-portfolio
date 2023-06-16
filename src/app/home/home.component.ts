import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../app.animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut],
})
export class HomeComponent {
  profileImageSrc = './assets/profile.png';
  public textArray = ['Software Developer.', 'Musician.', 'Game Designer.', 'Spelunker.', 'AI Enthusiast.', 'Audio Engineer.'];
  public text = '';
  private currentIndex = -1;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.typeWriter();

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.Handset]) {
          this.profileImageSrc = 'assets/profile-small.png';
        } else if (result.breakpoints[Breakpoints.Tablet]) {
          this.profileImageSrc = 'assets/profile-medium.png';
        } else if (result.breakpoints[Breakpoints.Web]) {
          this.profileImageSrc = 'assets/profile-large.png';
        }
      }
    });
  }

  typeWriter() {
    if(this.currentIndex >= this.textArray.length - 1) {
      this.currentIndex = -1;
    }
    const text = this.textArray[++this.currentIndex];
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        // Add next character to text
        this.text += text.charAt(i);
        i++;
      } else {
        // Text finished, start over
        clearInterval(interval);
        setTimeout(() => this.clearWriter(), 2000);
      }
    }, 100);
  }

  clearWriter() {
    const interval = setInterval(() => {
      if (this.text.length > 0) {
        // Remove last character from text
        this.text = this.text.slice(0, -1);
      } else {
        // Text cleared, start over
        clearInterval(interval);
        setTimeout(() => this.typeWriter(), 1000);
      }
    }, 50); // Deleting characters at a faster speed
  }

}
