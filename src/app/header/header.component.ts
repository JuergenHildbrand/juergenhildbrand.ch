import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() darkMode = true;
  ngOnInit(): void {
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
