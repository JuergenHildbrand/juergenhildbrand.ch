import { Directive, HostListener } from '@angular/core';
import { ScrollService} from "./scroll.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[scrolledTo]',
  exportAs: 'scrolledTo'
})


export class ScrollComponent {

  reachedSkills$: Observable<boolean>;
  reachedWork$: Observable<boolean>;
  reachedAbout$: Observable<boolean>;
  reachedContact$: Observable<boolean>;

  constructor(private scrollService: ScrollService) {}


  reachedSkills = false;
  reachedWork = false;
  reachedAbout = false;
  reachedContact = false;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const screenTop = window.pageYOffset;
    const screenBottom = window.innerHeight + screenTop;

    const skills = document.getElementById('skills');
    const skillsHeight = skills.clientHeight;
    const skillsTopPosition = skills.offsetTop;
    const skillsBottomPosition = skillsTopPosition + skillsHeight;

    const work = document.getElementById('work');
    const workHeight = work.clientHeight;
    const workTopPosition = work.offsetTop;
    const workBottomPosition = workTopPosition + workHeight;

    const about = document.getElementById('about');
    const aboutHeight = about.clientHeight;
    const aboutTopPosition = about.offsetTop;
    const aboutBottomPosition = aboutTopPosition + aboutHeight;

    const contact = document.getElementById('contact');
    const contactTopPosition = contact.offsetTop;

    // set `true` when scrolling has reached current element
    this.reachedSkills = screenBottom > skillsTopPosition && screenTop < skillsBottomPosition;
    this.reachedWork = screenBottom > workTopPosition && screenTop < workBottomPosition;
    this.reachedAbout = screenBottom > aboutTopPosition && screenTop < aboutBottomPosition;
    this.reachedContact = screenBottom > contactTopPosition;

    console.log('skills', this.reachedSkills);
    // console.log('work', this.reachedWork);
    // console.log('about', this.reachedAbout);
    // console.log('contact', this.reachedContact);
  }

  getVariables() {
    return this.reachedSkills,
      this.reachedWork,
      this.reachedAbout,
      this.reachedContact
  }
}


