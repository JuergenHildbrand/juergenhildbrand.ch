import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  openMenu() {
    let x = document.getElementById('myLinks');
    let l1 = document.getElementById('link1');
    let l2 = document.getElementById('link2');
    let l3 = document.getElementById('link3');
    let l4 = document.getElementById('link4');
    let l5 = document.getElementById('link5');
    if (x.style.display === 'block') {
      x.classList.remove('openMenuA')
      x.classList.add('exitMenu');
      setTimeout(() => {
        l1.classList.add('colorLinksT');
        l2.classList.add('colorLinksT');
        l3.classList.add('colorLinksT');
        l3.classList.add('colorLinksT');
        l4.classList.add('colorLinksT');
        l5.classList.add('colorLinksT');
        l1.classList.remove('colorLinksV');
        l2.classList.remove('colorLinksV');
        l3.classList.remove('colorLinksV');
        l4.classList.remove('colorLinksV');
        l5.classList.remove('colorLinksV');
      }, 100);
      setTimeout(() => {
        x.style.display = 'none';
      }, 215);
    } else {
      x.classList.remove('exitMenu');
      x.classList.add('openMenuA');
      x.style.display = 'block';
      setTimeout(() => {
        l1.classList.remove('colorLinksT');
        l2.classList.remove('colorLinksT');
        l3.classList.remove('colorLinksT');
        l4.classList.remove('colorLinksT');
        l5.classList.remove('colorLinksT');
        l1.classList.add('colorLinksV');
        l2.classList.add('colorLinksV');
        l3.classList.add('colorLinksV');
        l4.classList.add('colorLinksV');
        l5.classList.add('colorLinksV');
      }, 100);
    }
  }
}
