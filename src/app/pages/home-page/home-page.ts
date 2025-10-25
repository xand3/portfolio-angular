import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor() {}

  public socials = [
    {
      name: 'GitHub',
      src: '/assets/icons/GitHub.png',
      href: 'https://github.com/xand3',
    },
    {
      name: 'linkedin',
      src: '/assets/icons/linkedin.png',
      href: 'https://www.linkedin.com/in/alexandr3-bastos/',
    },
    {
      name: 'E-mail',
      src: '/assets/icons/email.png',
      href: 'mailto:xande.dev@outlook.com',
    },
    {
      name: 'Beacons',
      src: '/assets/icons/links.png',
      href: 'https://beacons.ai/xande_dev',
    },
  ];
}
