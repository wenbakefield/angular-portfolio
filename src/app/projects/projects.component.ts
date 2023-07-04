import { Component } from '@angular/core';
import { fadeInOut } from '../app.animations';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  sourceCodeLink: string;
  demoLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeInOut]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      image: './assets/projects/ddn.png',
      title: 'DeepDeadNet',
      tags: ['Python', 'Spring', 'Netlify', 'TensorFlow'],
      description: 'A web application which can generate music that sounds like the Grateful Dead through the power of Generative Adversarial Networks.',
      sourceCodeLink: 'https://github.com/wenbakefield/deep-dead-net/blob/main/deepdeadnet.pdf',
      demoLink: 'https://deepdead.net/'
    },
    {
      image: './assets/projects/pip.png',
      title: "Pip's Quest",
      tags: ['Python', 'Pygame'],
      description: 'A roguelite involving a hamster wizard, cursed critters, and an evil snake. Inspired by EarthBound and Slay The Spire. Hastily hacked together in Python.',
      sourceCodeLink: 'https://github.com/wenbakefield/pips-quest',
      demoLink: 'https://github.com/wenbakefield/pips-quest/releases/tag/v0.3.0-alpha'
    },
    {
      image: './assets/projects/covey.png',
      title: 'Covey Critters',
      tags: ['React', 'TypeScript', 'Jest', 'Express', 'Heroku'],
      description: 'A feature implementation for Covey.Town, which allows users to compete in a carnival game, earn a high score, and win a pet, which follows them around.',
      sourceCodeLink: 'https://github.com/wenbakefield/covey-critters',
      demoLink: 'https://coveytown.benwakefield.dev/'
    },
    {
      image: './assets/projects/axetron.png',
      title: 'AxeTron',
      tags: ['C++', 'Arduino', 'PureData'],
      description: 'Embedded digital effects in an electric guitar, through the power of Arudino, C++, and the Daisy Seed.',
      sourceCodeLink: 'https://github.com/wenbakefield/axetron',
      demoLink: 'https://github.com/wenbakefield/axetron/blob/7744f65b100ee551d2b31a23ee27555973e4d1ae/axetron_report.pdf'
    },
    {
      image: './assets/projects/harmony.png',
      title: 'Roomies',
      tags: ['Elixir', 'Phoenix', 'Bootstrap', 'Twilio'],
      description: 'Allows a group of roommates to coordinate responsibilities through a simple interface. The app sends text reminders for location-based tasks through Twilio.',
      sourceCodeLink: 'https://github.com/wenbakefield/roomies',
      demoLink: 'https://youtu.be/v5cwNN_dJxk'
    },
    {
      image: './assets/projects/momo.png',
      title: 'MoMo',
      tags: ['C++', 'PureData', 'MobMuPlat'],
      description: 'A mobile application that serves as a portable, deeply customizable multi-effects unit for any instrument with an audio output.',
      sourceCodeLink: 'https://github.com/wenbakefield/momo',
      demoLink: 'https://github.com/wenbakefield/momo/raw/main/Using%20MobMuPlat%20to%20Develop%20a%20Mobile%20Audio%20Effects%20Unit.pdf'
    },
  ];
  selectedTags: string[] = [];
  filteredProjects: Project[] = [];

  constructor() {
    this.filteredProjects = this.projects;
  }

  filterProjectsByTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }

    this.filterProjects();
  }

  filterProjects(): void {
    if (this.selectedTags.length === 0) {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        this.selectedTags.every(tag => project.tags.includes(tag))
      );
    }
  }

  clearTags(): void {
    this.selectedTags = [];
    this.filterProjects();
  }

  allTags(): string[] {
    const tags: string[] = [];
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });

    return tags;
  }
}
