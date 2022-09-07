import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})

export class TopSectionComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      offset: 1000,
      delay: 500,
      duration: 1200,
      once: true
    });
  }
}