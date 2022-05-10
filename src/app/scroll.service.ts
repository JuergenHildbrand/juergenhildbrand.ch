import {  Injectable, NgModule } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ScrollService {


  reachedSkills: boolean;
  reachedWork: boolean;
  reachedAbout: boolean;
  reachedContact: boolean;

  getVariables() {
    return  this.reachedSkills,
            this.reachedWork,
            this.reachedAbout,
            this.reachedContact
  }
}

