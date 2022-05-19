import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})

export class ContactSectionComponent {

  constructor(private http: HttpClient, public navigation: NavigationService) { }

  ///// Animations /////
  titleContact = false;
  description = false;
  nameContact = false;
  emailContact = false;
  messageContact = false;
  sendBtn = false;
  disabled = true;

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

    const c = document.getElementById('name');
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

    this.titleContact = screenBottom > titleBottomPosition - vwCalc;
    this.description = screenBottom > descriptionBottomPosition - vwCalc;
    this.nameContact = screenBottom > nameBottomPosition - vwCalc;
    this.emailContact = screenBottom > emailBottomPosition - vwCalc;
    this.messageContact = screenBottom > messageBottomPosition - vwCalc;
    this.sendBtn = screenBottom > sendBtnBottomPosition - vwCalc;
  }

  /**
  * This is bind to ngForm's InputFields in Template File
  */
  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };

  /**
  * A post request construct configuration
  */
  post = {
    // Where to send the post request Ex. http://my-domain/sendMail.php
    //or https://my-domain/sendMail.php if you have SSL-Certificate Active
    endPoint: 'https://www.juergenhildbrand.ch/sendMail.php',
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

/**
* Do not forget to import FormsModule in app.module.ts
*/
  onSubmit(ngForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            this.response.hasResponse = true;
            this.response.okk = false;
            this.response.ok = true;
            this.response.message = "Your Email has been sent!"
            setTimeout(() => {
              this.response.okk = true;
            }, 3000);
            console.log(this.response.ok);
            console.log(this.response.message);
            // Here Message was send
          },
          error: (error) => {
            this.response.hasResponse = true;
            this.response.ok = false;
            this.response.message = "Your Email has not been sent!"
            console.error(error);
            // Here Message was not send!!!!!
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  response = {
    okk : false,
    ok : false,
    message : "",
    hasResponse : false
  }
}


