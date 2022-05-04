import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = true;

  constructor() { }

  ngOnInit(): void {
    this.mobileViewUpdate();
  }

  screenWidth = false;

  mobileViewUpdate() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth <= 900) {
      this.screenWidth = true;
      console.log(this.screenWidth);
    }

  }

}
