import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {

  titleWork = false;
  workBox1 = false;
  workBox2 = false;


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


    this.titleWork = screenBottom > titleBottomPosition && screenTop < titleTopPosition;
    this.workBox1 = screenBottom > workBox1BottomPosition - vwCalc && screenTop < workBox1TopPosition + vwCalc;
    this.workBox2 = screenBottom > workBox2BottomPosition - vwCalc && screenTop < workBox2TopPosition + vwCalc;
  }


  ngOnInit(): void {
  }

}
