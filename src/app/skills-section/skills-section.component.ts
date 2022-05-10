import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';



@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],

})



export class SkillsSectionComponent  implements OnInit {

   constructor(private scrollService : ScrollService) {}




  ngOnInit(): void {
    console.log(this.scrollService.reachedSkills)
  }
}


