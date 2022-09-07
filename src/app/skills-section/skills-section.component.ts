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
      offset: 50,
      delay: 100,
      duration: 1200,
      once: true
    });
  }
}