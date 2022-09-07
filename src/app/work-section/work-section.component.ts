import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})

export class WorkSectionComponent implements OnInit {

  btn1 = true;
  btn2 = false;
  btn3 = false;
  disabledBtns: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.disabledBtns = true;
     } else {
      this.disabledBtns = false;
     }
  }

  toggle1() {
    this.btn1 = true
    this.btn2 = false;
    this.btn3 = false;
  }

  toggle2() {
    this.btn1 = false
    this.btn2 = true;
    this.btn3 = false;
  }

  toggle3() {
    this.btn1 = false
    this.btn2 = false;
    this.btn3 = true;
  }

  scaleIn() {
    const ang3 = document.getElementById('ang3');
    const ang2 = document.getElementById('ang2');
    const ang1 = document.getElementById('ang1');
    const js4 = document.getElementById('js4');
    const js3 = document.getElementById('js3');
    ang3.classList.add('scaleIn');
    ang2.classList.add('scaleIn');
    ang1.classList.add('scaleIn');
    js4.classList.add('scaleIn');
    js3.classList.add('scaleIn');
    this.scaleOut(ang3, ang2, ang1, js4, js3);
  }

  scaleOut(ang3, ang2, ang1, js4, js3) {
    if (this.btn1) {
      this.showAllProjects(ang3, ang2, ang1, js4, js3);
    }
    if (this.btn2) {
      this.showAngularProjects(ang3, ang2, ang1, js4, js3);
    }
    if (this.btn3) {
      this.showJavascriptProjects(ang3, ang2, ang1, js4, js3);
    }
  }

  showAllProjects(ang3, ang2, ang1, js4, js3) {
    setTimeout(() => {
      ang3.classList.remove('d-none', 'scaleIn');
      ang2.classList.remove('d-none', 'scaleIn');
      ang1.classList.remove('d-none', 'scaleIn');
      js4.classList.remove('d-none', 'scaleIn');
      js3.classList.remove('d-none', 'scaleIn');
      ang2.classList.add('scaleOut');
      ang1.classList.add('scaleOut');
      js4.classList.add('scaleOut');
      js3.classList.add('scaleOut');
    }, 1000);
  }

  showAngularProjects(ang3, ang2, ang1, js4, js3) {
    setTimeout(() => {
      ang3.classList.remove('d-none', 'scaleIn');
      ang2.classList.remove('d-none', 'scaleIn');
      ang1.classList.remove('d-none', 'scaleIn');
      js4.classList.remove('scaleIn');
      js3.classList.remove('scaleIn');
      ang3.classList.add('scaleOut');
      ang2.classList.add('scaleOut');
      ang1.classList.add('scaleOut');
      js4.classList.add('d-none');
      js3.classList.add('d-none');
    }, 1000);
  }

  showJavascriptProjects(ang3, ang2, ang1, js4, js3) {
    setTimeout(() => {
      ang3.classList.remove('scaleIn');
      ang2.classList.remove('scaleIn');
      ang1.classList.remove('scaleIn');
      js4.classList.remove('d-none', 'scaleIn');
      js3.classList.remove('d-none', 'scaleIn');
      ang3.classList.add('d-none');
      ang2.classList.add('d-none');
      ang1.classList.add('d-none');
      js4.classList.add('scaleOut');
      js3.classList.add('scaleOut');
    }, 1000);
  }

  
  // Links

  tryOutMySlackClone() {
    window.open('https://www.juergenhildbrand.ch/slack-clone/index.html')  
  }

  slackCloneGit() {
    window.open('https://github.com/JuergenHildbrand/Jey-s-Slack-clone.git');
  }

  tryOutMyFirstOwnApp() {
    window.open('https://www.meiggenalp.ch');
  }

  myFirstOwnApp() {
    window.open('https://github.com/JuergenHildbrand/obere-meiggenalp.git');
  }

  myPageGit() {
    window.open('https://github.com/JuergenHildbrand/juergenhildbrand.ch.git');
  }

  tryOutElPlloLoco() {
    window.open('https://www.juergenhildbrand.ch/El-Pollo-Loco/index.html')
  }

  elPlloLocoGit() {
    window.open('https://github.com/JuergenHildbrand/El-Pollo-Loco.git');
  }

  tryOutJoin() {
    window.open('https://www.juergenhildbrand.ch/Join/index.html')
  }

  joinGit() {
    window.open('https://github.com/JuergenHildbrand/Join.git');
  }

  tryOutPokedex() {
    window.open('https://www.juergenhildbrand.ch/Pokedex/index.html')
  }

  pokedexGit() {
    window.open('https://github.com/JuergenHildbrand/Pokedex.git');
  }
}
