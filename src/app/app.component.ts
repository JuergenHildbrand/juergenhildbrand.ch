import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollComponent } from './scroll.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScrollComponent]
})

export class AppComponent implements OnInit {


  constructor(public router: Router, private scrollService: ScrollComponent) { }

  


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
