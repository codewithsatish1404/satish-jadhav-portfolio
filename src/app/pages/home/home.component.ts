import { Component } from '@angular/core';
import { ScrollTopComponent } from '../scroll-top/scroll-top.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../../Animations/fade-in.animation';
import { ScrollAnimateDirective } from '../../Directives/scroll-animate.directive';
import { zoomInAnimation } from '../../../Animations/zoom-in.animation';
import { slideInLeftAnimation } from '../../../Animations/slide-in-left.animation';
import { fadeInDownAnimation } from '../../../Animations/fade-in-down.animation';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollTopComponent, CommonModule,ScrollAnimateDirective,ContactComponent],
  animations: [fadeInAnimation, zoomInAnimation, slideInLeftAnimation, fadeInDownAnimation,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showPopup = false;
    currentYear: number = new Date().getFullYear();

  typedText = '';
fullText = 'Full Stack Developer';
currentIndex = 0;

ngOnInit(): void {
  this.startTyping();
}

startTyping() {
  const typingInterval = setInterval(() => {
    if (this.currentIndex < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 150); // speed of typing (in ms)
}


  expertiseBlocks = [
    {
      title: 'Frontend',
      techs: [
        {
          name: 'Angular',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
        },
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
          name: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
          name: 'Bootstrap',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        }
      ]
    },
    {
      title: 'Backend',
      techs: [
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
          name: 'Express.js',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
        }
        ,
        { name: 'ASP.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' }

      ]
    },
    {
      title: 'Database',
      techs: [
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }

      ]
    },
    {
      title: 'DevOps & Cloud',
      techs: [
        {
          name: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },

        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        }
      ]
    }
  ];


 projects = [
  {
    name: 'HandmadeHeaven E-Commerce',
    description: 'A feature-rich Angular + Node.js + MongoDB application for selling handmade crafts.',
    technologies: ['Angular', 'Express.js', 'MongoDB', 'Bootstrap'],
    achievements: [
      'Dynamic product catalog with filters and categories',
      'Secure user login and role-based admin dashboard',
      'Order flow from cart to shipping integrated with MongoDB',
    ],
    demoLink: 'https://handmadeheaven.live', // Replace with your actual link
    repoLink: 'https://github.com/yourusername/handmadeheaven'
  },
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio built with Angular and custom animations.',
    technologies: ['Angular', 'SCSS', 'Bootstrap', 'GSAP'],
    achievements: [
      'Custom scroll animations and transitions',
      'Responsive across all screen sizes',
      'Integrated resume download and contact form',
    ],
    demoLink: 'https://handmadeheaven.live', // Replace with your actual link
    repoLink: 'https://github.com/yourusername/handmadeheaven'
  },
  {
    name: 'TaskFlow - Workflow Manager',
    description: 'An internal tool for managing user tasks, roles, and workflows.',
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    achievements: [
      'CRUD operations for tasks and users',
      'Authentication with JWT',
      'Real-time updates using RxJS',
    ],
    demoLink: 'https://handmadeheaven.live', // Replace with your actual link
    repoLink: 'https://github.com/yourusername/handmadeheaven'
  },
  {
    name: 'RentNsale',
    description: 'A marketplace platform for renting and selling products and properties.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
    achievements: [
      'Advanced search filters for rent/sale listings',
      'User messaging and inquiry system',
      'Admin panel to manage listings and users',
    ],
  },
  {
    name: 'BusinessForSale',
    description: 'A listing portal for buying and selling businesses with lead management.',
    technologies: ['Angular', 'Express.js', 'MongoDB'],
    achievements: [
      'Business category filters and contact lead forms',
      'Saved listings and interested business tracking',
      'Responsive design for desktop and mobile users',
    ],
  },
  {
    name: 'JobsInLondon',
    description: 'A job board application focused on London-based roles and employers.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
    achievements: [
      'Job listings with category and location filters',
      'Employer login and job posting dashboard',
      'Applicant tracking and resume uploads',
    ],
  }
];


  education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'D.Y. Patil Institute of MCA & Management, Akurdi, Pune.',
      university:'Savitribai Phule Pune University',
      duration: '2017 – 2021'
    }
  ];

  experience = [
    {
      role: 'Angular Developer',
      company: 'Staffing Services India pvt. ltd.',
      duration: 'Oct 2023 - May 2025'
    },
    {
      role: 'Frontend Developer',
      company: 'SGMS Infotech LLP',
      duration: 'Aug 2022 – Aug 2023'
    }
  ];

  triggerSparkle(event: MouseEvent) {
  const el = (event.currentTarget as HTMLElement);
  el.classList.remove('sparkle');
  void el.offsetWidth; // Force reflow
  el.classList.add('sparkle');
}

}
