import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})

export class AboutMeSectionComponent {


  ngOnInit() {
    AOS.init({
      delay: 300,
      duration: 1200,
      once: true
    });
  }
}