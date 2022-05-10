import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  reachedSkills = false;
  reachedWork = false;
  reachedAbout = false;
  reachedContact = false;

  getVariables() {
    return this.reachedSkills,
      this.reachedWork,
      this.reachedAbout,
      this.reachedContact
  }

}

