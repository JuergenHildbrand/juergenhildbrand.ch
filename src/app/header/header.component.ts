import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = true;

  constructor() { }

  ngOnInit(): void {

  }

  openMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }





  // screenWidth = false;

  // mobileViewUpdate() {
  //   let viewportWidth = window.innerWidth;
  //   if (viewportWidth <= 900) {
  //     this.screenWidth = true;
  //     console.log(this.screenWidth);
  //   }

  // }

}
