import { Directive, HostListener, Injectable } from '@angular/core';

@Directive({
  selector: '[scrolledTo]',
  exportAs: 'scrolledTo'
})

@Injectable()

export class ScrollDetectionComponent {
  

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

  }
}