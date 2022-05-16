import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})

export class AboutMeSectionComponent {

  reachedAbout = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const screenTop = window.pageYOffset;
    const screenBottom = window.innerHeight + screenTop;
    const vw = window.innerWidth;
    const vwCalc = vw / 8;

    const about = document.getElementById('about');
    const aboutHeight = about.clientHeight;
    const aboutTopPosition = about.offsetTop;
    const aboutBottomPosition = aboutTopPosition + aboutHeight;

    this.reachedAbout = screenBottom > aboutTopPosition + vwCalc && screenTop < aboutBottomPosition - vwCalc;
  }
}
