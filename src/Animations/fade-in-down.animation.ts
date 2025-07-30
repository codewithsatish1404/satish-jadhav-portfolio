import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const fadeInDownAnimation = trigger('fadeInDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-30px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
