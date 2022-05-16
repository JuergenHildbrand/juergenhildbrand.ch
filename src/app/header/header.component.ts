import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() darkMode = true;

  ngOnInit(): void {
    console.log(this.darkMode)    
  }
  
  

  // logoHeader = true;
  // linksHeader = true;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {

  //   const bodyRect = document.body.getBoundingClientRect();

  //   const screenTop = window.pageYOffset;
  //   const vw = window.innerWidth;

  //   const b = document.getElementById('linksHeader');
  //   const linksHeader = b.getBoundingClientRect();
  //   const linksHeaderBottomPosition = linksHeader.bottom - bodyRect.top;

  //   this.linksHeader = screenTop < linksHeaderBottomPosition;
  // }

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
