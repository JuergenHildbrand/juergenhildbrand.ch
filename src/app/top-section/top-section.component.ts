import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent  {

  topSection = true;
  secoundBg = true;
  headerTxt = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    

    const bodyRect = document.body.getBoundingClientRect();

    const screenTop = window.pageYOffset;
    const vw = window.innerWidth;
    const vwCalc = vw / 12;

    const a = document.getElementById('topSection');
    const topSection = a.getBoundingClientRect();
    const topSectionBottomPosition = topSection.bottom - bodyRect.top;

    const b = document.getElementById('secoundBg');
    const secoundBg = b.getBoundingClientRect();
    const secoundBgBottomPosition = secoundBg.bottom - bodyRect.top;

    const c = document.getElementById('headerTxt');
    const headerTxt = c.getBoundingClientRect();
    const headerTxtBottomPosition = headerTxt.bottom - bodyRect.top;

    this.topSection = screenTop < topSectionBottomPosition - vwCalc;
    this.secoundBg = screenTop < secoundBgBottomPosition - vwCalc;
    this.headerTxt = screenTop < headerTxtBottomPosition - vwCalc;
    
  
  }

}
