import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';




@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})

export class SkillsSectionComponent implements OnInit{

  ngOnInit() {
    AOS.init({
      once: false,
    }

    );

  }

  

  // ///// Animations /////
  // titleSkills = false;
  // skillBoxes1 = false;
  // skillBoxes2 = false;
  // skillBoxes3 = false;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {

  //   const bodyRect = document.body.getBoundingClientRect();

  //   const screenTop = window.pageYOffset;
  //   const screenBottom = window.innerHeight + screenTop;
  //   const vw = window.innerWidth;

  //   const a = document.getElementById('titleSkills');
  //   const title = a.getBoundingClientRect();
  //   const titleBottomPosition = title.bottom - bodyRect.top;

  //   const b = document.getElementById('skillBoxes1');
  //   const boxes1 = b.getBoundingClientRect();
  //   const boxes1BottomPosition = boxes1.bottom - bodyRect.top;

  //   const c = document.getElementById('skillBoxes2');
  //   const boxes2 = c.getBoundingClientRect();
  //   const boxes2BottomPosition = boxes2.bottom - bodyRect.top;

  //   const d = document.getElementById('skillBoxes3');
  //   const boxes3 = d.getBoundingClientRect();
  //   const boxes3BottomPosition = boxes3.bottom - bodyRect.top;

  //   this.titleSkills = screenBottom > titleBottomPosition;
  //   this.skillBoxes1 = screenBottom > boxes1BottomPosition;
  //   this.skillBoxes2 = screenBottom > boxes2BottomPosition;
  //   this.skillBoxes3 = screenBottom > boxes3BottomPosition;
  // }
}

