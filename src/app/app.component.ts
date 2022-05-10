import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {


  constructor(public router: Router, private scrollService : ScrollService) { }

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
      this.scrollService.reachedSkills = screenBottom > skillsTopPosition && screenTop < skillsBottomPosition;
      this.scrollService.reachedWork = screenBottom > workTopPosition && screenTop < workBottomPosition;
      this.scrollService.reachedAbout = screenBottom > aboutTopPosition && screenTop < aboutBottomPosition;
      this.scrollService.reachedContact = screenBottom > contactTopPosition;
  
      // console.log('skills', this.scrollService.reachedSkills);
      // console.log('work', this.reachedWork);
      // console.log('about', this.reachedAbout);
      // console.log('contact', this.reachedContact);
    }
  

  ngOnInit() {
   this.overlayBg();
  }


// under construction

overlayBg() {
  let d = document.getElementById('uConstr');
  let y = document.getElementById('invisible');
  let z = document.getElementById('overlayBg')
  z.classList.add('canceling');
  setTimeout(() => {
    d.classList.remove('d-none');
  }, 20);

  setTimeout(() => {
    y.classList.add('d-none');  
  }, 19);
  
}
}
