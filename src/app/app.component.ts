import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor(public router: Router) { }

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
    }, 3000);
    setTimeout(() => {
      y.classList.add('d-none');
    }, 3000);
  }
}
