import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})

export class WorkSectionComponent {

  ///// Disable Buttons /////
  click1: boolean = true;
  click2: boolean = false;
  click3: boolean = false;

  
  // Button 1
  all() {
    let wb1 = document.getElementById('wb1');
    let wb2 = document.getElementById('wb2');
    let wb3 = document.getElementById('wb3');
    let wb4 = document.getElementById('wb4');
    wb1.classList.add('scaleIn');
    wb2.classList.add('scaleIn');
    wb3.classList.add('scaleIn');
    wb4.classList.add('scaleIn');
    this.clickFunction1();
    this.timeOut1(wb1, wb2, wb3, wb4);
  }
  clickFunction1() {
    this.click1 = true;
    this.click2 = false;
    this.click3 = false;
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    btn1.classList.add('backgroundColorBtn');
    btn2.classList.remove('backgroundColorBtn');
    btn3.classList.remove('backgroundColorBtn');
  }
  timeOut1(wb1, wb2, wb3, wb4) {
    setTimeout(() => {
      wb1.classList.remove('d-none', 'scaleIn');
      wb2.classList.remove('d-none', 'scaleIn');
      wb3.classList.remove('d-none', 'scaleIn');
      wb4.classList.remove('d-none', 'scaleIn');
      wb1.classList.add('scaleOut');
      wb2.classList.add('scaleOut');
      wb3.classList.add('scaleOut');
      wb4.classList.add('scaleOut');
    }, 1000);
  }

  // Button 2
  angular() {
    let wb1 = document.getElementById('wb1');
    let wb2 = document.getElementById('wb2');
    let wb3 = document.getElementById('wb3');
    let wb4 = document.getElementById('wb4');
    wb1.classList.add('scaleIn');
    wb2.classList.add('scaleIn');
    wb3.classList.add('scaleIn');
    wb4.classList.add('scaleIn');
    this.clickFunction2();
    this.timeOut2(wb1, wb2, wb3, wb4);
  }
  clickFunction2() {
    this.click1 = false;
    this.click2 = true;
    this.click3 = false;
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    btn1.classList.remove('backgroundColorBtn');
    btn2.classList.add('backgroundColorBtn');
    btn3.classList.remove('backgroundColorBtn');
  }
  timeOut2(wb1, wb2, wb3, wb4) {
    setTimeout(() => {
      wb1.classList.remove('d-none', 'scaleIn');
      wb2.classList.remove('d-none', 'scaleIn');
      wb3.classList.add('d-none');
      wb4.classList.add('d-none');
      wb1.classList.add('scaleOut');
      wb2.classList.add('scaleOut');
    }, 1000);
  }

  // Button 3
  javascript() {
    let wb1 = document.getElementById('wb1');
    let wb2 = document.getElementById('wb2');
    let wb3 = document.getElementById('wb3');
    let wb4 = document.getElementById('wb4');
    wb1.classList.add('scaleIn');
    wb2.classList.add('scaleIn');
    wb3.classList.add('scaleIn');
    wb4.classList.add('scaleIn');
    this.clickFunction3();
    this.timeOut3(wb1, wb2, wb3, wb4);
  }
  clickFunction3() {
    this.click1 = false;
    this.click2 = false;
    this.click3 = true;
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    btn1.classList.remove('backgroundColorBtn');
    btn2.classList.remove('backgroundColorBtn');
    btn3.classList.add('backgroundColorBtn');
  }
  timeOut3(wb1, wb2, wb3, wb4) {
    setTimeout(() => {
      wb1.classList.add('d-none');
      wb2.classList.add('d-none');
      wb3.classList.remove('d-none', 'scaleIn');
      wb4.classList.remove('d-none', 'scaleIn');
      wb3.classList.add('scaleOut');
      wb4.classList.add('scaleOut');
    }, 1000);
  }

  // Links

  tryOutMyFirstOwnApp() {
    window.open('https://www.juergenhildbrand.ch/oberi-meiggu/index.html');
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
