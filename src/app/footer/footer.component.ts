import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  @Input() darkMode = true;

  linkedIn() {
    window.open('https://www.linkedin.com/in/j%C3%BCrgenhildbrand/');
  }

  git() {
    window.open('https://github.com/JuergenHildbrand');
  }

  xing() {
    window.open('https://www.xing.com/discover/updates');
  }
}
