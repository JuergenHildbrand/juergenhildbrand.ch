import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {

  titleContact = false;
  description = false;
  nameContact = false;
  email = false;
  message = false;
  sendBtn = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const bodyRect = document.body.getBoundingClientRect();

    const screenTop = window.pageYOffset;
    const screenBottom = window.innerHeight + screenTop;
    const vw = window.innerWidth;
    const vwCalc = vw / 12;

    const a = document.getElementById('titleContact');
    const title = a.getBoundingClientRect();
    const titleBottomPosition = title.bottom - bodyRect.top;

    const b = document.getElementById('description');
    const description = b.getBoundingClientRect();
    const descriptionBottomPosition = description.bottom - bodyRect.top;

    const c = document.getElementById('nameContact');
    const nameContact = c.getBoundingClientRect();
    const nameBottomPosition = nameContact.bottom - bodyRect.top;

    const d = document.getElementById('email');
    const email = d.getBoundingClientRect();
    const emailBottomPosition = email.bottom - bodyRect.top;

    const e = document.getElementById('message');
    const message = e.getBoundingClientRect();
    const messageBottomPosition = message.bottom - bodyRect.top;

    const f = document.getElementById('sendBtn');
    const sendBtn = f.getBoundingClientRect();
    const sendBtnBottomPosition = sendBtn.bottom - bodyRect.top;

    this.titleContact = screenBottom > titleBottomPosition;
    this.description = screenBottom > descriptionBottomPosition;
    this.nameContact = screenBottom > nameBottomPosition;
    this.email = screenBottom > emailBottomPosition;
    this.message = screenBottom > messageBottomPosition;
    this.sendBtn = screenBottom > sendBtnBottomPosition;
  
  }

}
