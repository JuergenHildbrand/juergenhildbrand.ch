import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../navigation.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})

export class ContactSectionComponent implements OnInit {

  // name = false;
  name = 'Angular ' + VERSION.major;

  constructor(
    private http: HttpClient,
    public navigation: NavigationService
  ) {}


  formSubmitted = false;
  registrationFormGroup = new FormGroup({
    name: new  FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(30), Validators.maxLength(500)]),
  });

  onSubmit(): void{
    this.formSubmitted = true;
    if (this.registrationFormGroup.invalid) {
      return;
    } 
    if (this.registrationFormGroup.valid) {
      this.http
      .post(this.post.endPoint, this.post.body(this.registrationFormGroup.value))
      .subscribe({
        next: () => {
          this.messageSent();
          // ngForm.reset();
        },
        error: (error) => {
          this.messageNotSent(error)
        },
        complete: () => console.info('send post complete'),
      });
    }
  }

  ngOnInit() {
  }

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

  messageSent() {
    this.response.hasResponse = true;
    this.response.notOk = false;
    this.response.ok = true;
    this.response.message = "Your Email has been sent!"
    setTimeout(() => {
      this.response.notOk = true;
      document.getElementById('response').classList.add('scaleIn');
      setTimeout(() => {
        this.response.hasResponse = false;
      }, 1000);
    }, 3000);
    console.log(this.response.ok);
    console.log(this.response.message);
  }

  messageNotSent(error) {
    this.response.hasResponse = true;
    this.response.ok = false;
    this.response.message = "Your Email has not been sent!"
    console.error(error);
  }

  response = {
    notOk: false,
    ok: false,
    message: "",
    hasResponse: false
  }

  closeResponse() {
    document.getElementById('response').classList.add('scaleIn');
    setTimeout(() => {
      this.response.hasResponse = false;
    }, 1000);
  }


}