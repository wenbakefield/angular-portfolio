import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  languages = ['python', 'java', 'cplusplus', 'javascript', 'typescript', 'csharp', 'ruby', 'elixir', 'sass', 'lua'];
  libraries = ['react', 'jquery', 'bootstrap', 'tailwindcss', 'jest', 'lodash', 'numpy', 'pandas', 'tensorflow', 'keras'];
  frameworks = ['angular', 'express', 'nextdotjs', 'spring', 'rubyonrails'];
  platforms = ['github', 'jirasoftware', 'netlify', 'heroku', 'amazonaws', 'firebase', 'googlecolab', 'jupyter'];
}
