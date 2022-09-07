import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  @Input() darkMode = true;

  goTolinkedIn() {
    window.open('https://www.linkedin.com/in/j%C3%BCrgenhildbrand/');
  }

  goToGit() {
    window.open('https://github.com/JuergenHildbrand');
  }
}
