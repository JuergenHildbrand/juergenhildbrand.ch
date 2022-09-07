import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})

export class ContactSectionComponent {

  constructor(private http: HttpClient, public navigation: NavigationService) { }

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
              this.response.hasResponse = false;
              ngForm.reset();
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


