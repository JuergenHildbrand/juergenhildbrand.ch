import { Component, Injectable, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class HeaderComponent {

  @Input() darkMode = true;
  en: boolean = true;

  constructor(public comp: AppComponent) { }

  slideInOut() {
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

  toggle() {
    if (this.en == true) {
      this.en = false;
      document.getElementById('myLinks').classList.add('changeWidth');
    } else {
      this.en = true;
      document.getElementById('myLinks').classList.remove('changeWidth');
    }
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
