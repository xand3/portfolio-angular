import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [Navbar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
