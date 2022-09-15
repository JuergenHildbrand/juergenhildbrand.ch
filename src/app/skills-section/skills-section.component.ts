import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})

export class SkillsSectionComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      offset: 0,
      delay: 0,
      duration: 1200,
      once: true
    });
  }
}