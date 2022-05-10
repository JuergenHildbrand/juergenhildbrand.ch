import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent implements OnInit {



  constructor(public scrollService : ScrollService) {}

  ngOnInit(): void {

      console.log('skills', this.scrollService.reachedSkills);
      console.log('work', this.scrollService.reachedWork);
      console.log('about', this.scrollService.reachedAbout);
      console.log('contact', this.scrollService.reachedContact);
  }

  
}
