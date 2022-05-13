import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent {

  titleWork = false;
  workBox1 = false;
  workBox2 = false;
  workBox3 = false;
  workBox4 = false;


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const screenTop = window.pageYOffset;
    const screenBottom = window.innerHeight + screenTop;
    const vw = window.innerWidth;
    const vwCalc = vw / 10;

    const bodyRect = document.body.getBoundingClientRect();


    const a = document.getElementById('titleWork');
    const title = a.getBoundingClientRect();
    const titleTopPosition = title.top - bodyRect.top;
    const titleBottomPosition = title.bottom - bodyRect.top;

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
    this.workBox1 = screenBottom > workBox1BottomPosition - vwCalc && screenTop < workBox1TopPosition + vwCalc;
    this.workBox2 = screenBottom > workBox2BottomPosition - vwCalc && screenTop < workBox2TopPosition + vwCalc;
    this.workBox3 = screenBottom > workBox3BottomPosition - vwCalc && screenTop < workBox3TopPosition + vwCalc;
    this.workBox4 = screenBottom > workBox4BottomPosition - vwCalc && screenTop < workBox4TopPosition + vwCalc;
  }


  myPageGit() {
    window.open('https://github.com/JuergenHildbrand/juergenhildbrand.ch.git');
  }

  tryOut() {
    window.open('https://www.juergenhildbrand.ch/El-Pollo-Loco/index.html')
  }

}
