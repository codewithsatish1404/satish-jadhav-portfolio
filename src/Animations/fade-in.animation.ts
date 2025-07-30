// fade-in.animation.ts
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
