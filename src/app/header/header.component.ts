import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() darkMode = true;
  

  logoHeader = true;
  linksHeader = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    

    const bodyRect = document.body.getBoundingClientRect();

    const screenTop = window.pageYOffset;
    const vw = window.innerWidth;

    const a = document.getElementById('logoHeader');
    const logoHeader = a.getBoundingClientRect();
    const logoHeaderBottomPosition = logoHeader.bottom - bodyRect.top;

    const b = document.getElementById('linksHeader');
    const linksHeader = b.getBoundingClientRect();
    const linksHeaderBottomPosition = linksHeader.bottom - bodyRect.top;

    this.logoHeader = screenTop < logoHeaderBottomPosition ;
    this.linksHeader = screenTop < linksHeaderBottomPosition;
    console.log(this.logoHeader)
    console.log(screenTop)
    console.log(logoHeaderBottomPosition)
    
  
  }

  openMenu() {
    let x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
      x.classList.remove('openMenuA')
      x.classList.add('exitMenu');
      setTimeout(() => {
        x.style.display = 'none';
      }, 215);
    } else {
      x.classList.remove('exitMenu');
      x.classList.add('openMenuA');
      x.style.display = 'block';
    }
  }
}
