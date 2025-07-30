import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const zoomInAnimation = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);
