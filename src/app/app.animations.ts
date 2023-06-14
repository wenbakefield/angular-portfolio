import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const fadeInOut =
trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ])
    ]);
