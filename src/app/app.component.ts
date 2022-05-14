import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScrollService]
})

export class AppComponent implements OnInit {

  

 
  reachedContact = false;


  constructor(public router: Router, private scrollService : ScrollService) { }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
  
      const screenTop = window.pageYOffset;
      const screenBottom = window.innerHeight + screenTop;
      
  
      const contact = document.getElementById('contact');
      const contactTopPosition = contact.offsetTop;
  
      // set `true` when scrolling has reached current element
      
      this.scrollService.reachedContact = screenBottom > contactTopPosition;
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
  }, 3);

  setTimeout(() => {
    y.classList.add('d-none');  
  }, 3);
  
}
}
