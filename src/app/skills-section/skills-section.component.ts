import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})

export class SkillsSectionComponent {

  titleSkills = false;
  skillBoxes1 = false;
  skillBoxes2 = false;
  skillBoxes3 = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const bodyRect = document.body.getBoundingClientRect();

    const screenTop = window.pageYOffset;
    const screenBottom = window.innerHeight + screenTop;
    const vw = window.innerWidth;
    const vwCalc = vw / 12;

    const a = document.getElementById('titleSkills');
    const title = a.getBoundingClientRect();
    const titleTopPosition = title.top - bodyRect.top;
    const titleBottomPosition = title.bottom - bodyRect.top;

    const b = document.getElementById('skillBoxes1');
    const boxes1 = b.getBoundingClientRect();
    const boxes1TopPosition = boxes1.top - bodyRect.top;
    const boxes1BottomPosition = boxes1.bottom - bodyRect.top;

    const c = document.getElementById('skillBoxes2');
    const boxes2 = c.getBoundingClientRect();
    const boxes2TopPosition = boxes2.top - bodyRect.top;
    const boxes2BottomPosition = boxes2.bottom - bodyRect.top;

    const d = document.getElementById('skillBoxes3');
    const boxes3 = d.getBoundingClientRect();
    const boxes3TopPosition = boxes3.top - bodyRect.top;
    const boxes3BottomPosition = boxes3.bottom - bodyRect.top;

    this.titleSkills = screenBottom > titleBottomPosition && screenTop < titleTopPosition;
    this.skillBoxes1 = screenBottom > boxes1BottomPosition && screenTop < boxes1TopPosition - vwCalc;
    this.skillBoxes2 = screenBottom > boxes2BottomPosition && screenTop < boxes2TopPosition - vwCalc;
    this.skillBoxes3 = screenBottom > boxes3BottomPosition && screenTop < boxes3TopPosition - vwCalc;
  }
}

