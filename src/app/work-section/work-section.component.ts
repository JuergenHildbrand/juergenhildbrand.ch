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

  ///// Animations /////
  titleWork = false;
  buttonsWork = false;
  workBox1 = false;
  workBox2 = false;
  workBox3 = false;
  workBox4 = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const bodyRect = document.body.getBoundingClientRect();
    const screenTop = window.pageYOffset;
    const screenBottom = window.innerHeight + screenTop;
    const vw = window.innerWidth;
    const vwCalc = vw / 5;

    const a = document.getElementById('titleWork');
    const title = a.getBoundingClientRect();
    const titleTopPosition = title.top - bodyRect.top;
    const titleBottomPosition = title.bottom - bodyRect.top;

    const f = document.getElementById('buttonsWork');
    const buttonsWork = f.getBoundingClientRect();
    const buttonsWorkTopPosition = buttonsWork.top - bodyRect.top;
    const buttonsWorkBottomPosition = buttonsWork.bottom - bodyRect.top;

    const b = document.getElementById('workBox1');
    const workBox1 = b.getBoundingClientRect();
    const workBox1TopPosition = workBox1.top - bodyRect.top;
    const workBox1BottomPosition = workBox1.bottom - bodyRect.top;

    const c = document.getElementById('workBox2');
    const workBox2 = c.getBoundingClientRect();
    const workBox2TopPosition = workBox2.top - bodyRect.top;
    const workBox2BottomPosition = workBox2.bottom - bodyRect.top;

    const d = document.getElementById('workBox3');
    const workBox3 = d.getBoundingClientRect();
    const workBox3TopPosition = workBox3.top - bodyRect.top;
    const workBox3BottomPosition = workBox3.bottom - bodyRect.top;

    const e = document.getElementById('workBox4');
    const workBox4 = e.getBoundingClientRect();
    const workBox4TopPosition = workBox4.top - bodyRect.top;
    const workBox4BottomPosition = workBox4.bottom - bodyRect.top;

    this.titleWork = screenBottom > titleBottomPosition && screenTop < titleTopPosition;
    this.buttonsWork = screenBottom > buttonsWorkBottomPosition && screenTop < buttonsWorkTopPosition;
    this.workBox1 = screenBottom > workBox1BottomPosition - vwCalc && screenTop < workBox1TopPosition + vwCalc;
    this.workBox2 = screenBottom > workBox2BottomPosition - vwCalc && screenTop < workBox2TopPosition + vwCalc;
    this.workBox3 = screenBottom > workBox3BottomPosition - vwCalc && screenTop < workBox3TopPosition + vwCalc;
    this.workBox4 = screenBottom > workBox4BottomPosition - vwCalc && screenTop < workBox4TopPosition + vwCalc;
  }

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
      wb1.classList.remove();
      wb1.classList.remove('d-none', 'scaleIn');
      wb2.classList.add('scaleIn');
      wb3.classList.add('scaleIn');
      wb4.classList.add('scaleIn');
      wb1.classList.add('scaleOut');
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
      wb2.classList.remove('scaleIn');
      wb3.classList.remove('scaleIn');
      wb4.classList.remove('scaleIn');
      wb2.classList.add('scaleOut');
      wb3.classList.add('scaleOut');
      wb4.classList.add('scaleOut');
    }, 1000);
  }

  // Links
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
