import { Component, OnInit } from '@angular/core';
import { ScrollComponent } from '../scroll.component';


@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
  providers: [ScrollComponent]
})



export class SkillsSectionComponent  implements OnInit {


  constructor(private scrollService: ScrollComponent) { 
    this.scrollService.reachedSkills = scrollService.getVariables();
   }

  ngOnInit(): void {
    console.log(ScrollComponent)
  }
}


