import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const slideInLeftAnimation = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
