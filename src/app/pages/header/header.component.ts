import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

 navLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'Expertise', sectionId: 'expertise' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Education', sectionId: 'education' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  activeSection: string = '';
  private firstLoad = true;
;


scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection = sectionId;
  }
}
}