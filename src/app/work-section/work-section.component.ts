import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})

export class WorkSectionComponent implements OnInit {

  btn1 = true;
  btn2 = false;
  btn3 = false;
  overlay: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.toggleOverlay();
  }

  toggle1() {
    this.btn1 = true
    this.btn2 = false;
    this.btn3 = false;
  }

  toggle2() {
    this.btn1 = false
    this.btn2 = true;
    this.btn3 = false;
  }

  toggle3() {
    this.btn1 = false
    this.btn2 = false;
    this.btn3 = true;
  }

  scaleIn() {
    const ang3 = document.getElementById('ang3');
    const ang2 = document.getElementById('ang2');
    const ang1 = document.getElementById('ang1');
    const js4 = document.getElementById('js4');
    const js3 = document.getElementById('js3');
    ang3.classList.add('scaleIn');
    ang2.classList.add('scaleIn');
    ang1.classList.add('scaleIn');
    js4.classList.add('scaleIn');
    js3.classList.add('scaleIn');
    this.scaleOut(ang3, ang2, ang1, js4, js3);
  }

  scaleOut(ang3, ang2, ang1, js4, js3) {
    if (this.btn1) {
      this.showAllProjects(ang3, ang2, ang1, js4, js3);
    }
    if (this.btn2) {
      this.showAngularProjects(ang3, ang2, ang1, js4, js3);
    }
    if (this.btn3) {
      this.showJavascriptProjects(ang3, ang2, ang1, js4, js3);
    }
  }

  showAllProjects(ang3, ang2, ang1, js4, js3) {
    setTimeout(() => {
      ang3.classList.remove('d-none', 'scaleIn');
      ang2.classList.remove('d-none', 'scaleIn');
      ang1.classList.remove('d-none', 'scaleIn');
      js4.classList.remove('d-none', 'scaleIn');
      js3.classList.remove('d-none', 'scaleIn');
      ang2.classList.add('scaleOut');
      ang1.classList.add('scaleOut');
      js4.classList.add('scaleOut');
      js3.classList.add('scaleOut');
    }, 1000);
  }

  showAngularProjects(ang3, ang2, ang1, js4, js3) {
    setTimeout(() => {
      ang3.classList.remove('d-none', 'scaleIn');
      ang2.classList.remove('d-none', 'scaleIn');
      ang1.classList.remove('d-none', 'scaleIn');
      js4.classList.remove('scaleIn');
      js3.classList.remove('scaleIn');
      ang3.classList.add('scaleOut');
      ang2.classList.add('scaleOut');
      ang1.classList.add('scaleOut');
      js4.classList.add('d-none');
      js3.classList.add('d-none');
    }, 1000);
  }

  showJavascriptProjects(ang3, ang2, ang1, js4, js3) {
    setTimeout(() => {
      ang3.classList.remove('scaleIn');
      ang2.classList.remove('scaleIn');
      ang1.classList.remove('scaleIn');
      js4.classList.remove('d-none', 'scaleIn');
      js3.classList.remove('d-none', 'scaleIn');
      ang3.classList.add('d-none');
      ang2.classList.add('d-none');
      ang1.classList.add('d-none');
      js4.classList.add('scaleOut');
      js3.classList.add('scaleOut');
    }, 1000);
  }

  toggleOverlay() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay5').classList.add('d-none');
      document.getElementById('overlay4').classList.add('d-none');
      document.getElementById('overlay3').classList.add('d-none');
      document.getElementById('overlay2').classList.add('d-none');
      document.getElementById('overlay1').classList.add('d-none');
    } else {
      document.getElementById('overlay5').classList.remove('d-none');
      document.getElementById('overlay4').classList.remove('d-none');
      document.getElementById('overlay3').classList.remove('d-none');
      document.getElementById('overlay2').classList.remove('d-none');
      document.getElementById('overlay1').classList.remove('d-none');
    }
  }

  showOverlay6() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay6').classList.add('d-noneEffektScaleOut');
      document.getElementById('overlay6').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('overlay5').classList.add('d-none');
        document.getElementById('overlay4').classList.add('d-none');
        document.getElementById('overlay3').classList.add('d-none');
        document.getElementById('overlay2').classList.add('d-none');
        document.getElementById('overlay1').classList.add('d-none');
      }, 500);
    }
  }

  showOverlay5() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay4').classList.add('d-noneEffektScaleOut');
      document.getElementById('overlay4').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('overlay6').classList.add('d-none');
        document.getElementById('overlay5').classList.add('d-none');
        document.getElementById('overlay3').classList.add('d-none');
        document.getElementById('overlay2').classList.add('d-none');
        document.getElementById('overlay1').classList.add('d-none');
      }, 500);
    }
  }

  showOverlay4() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay4').classList.add('d-noneEffektScaleOut');
      document.getElementById('overlay4').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('overlay6').classList.add('d-none');
        document.getElementById('overlay5').classList.add('d-none');
        document.getElementById('overlay3').classList.add('d-none');
        document.getElementById('overlay2').classList.add('d-none');
        document.getElementById('overlay1').classList.add('d-none');
      }, 500);
    }
  }

  showOverlay3() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay3').classList.add('d-noneEffektScaleOut');
      document.getElementById('overlay3').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('overlay6').classList.add('d-none');
        document.getElementById('overlay5').classList.add('d-none');
        document.getElementById('overlay4').classList.add('d-none');
        document.getElementById('overlay2').classList.add('d-none');
        document.getElementById('overlay1').classList.add('d-none');
      }, 500);
    }
  }

  showOverlay2() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay2').classList.add('d-noneEffektScaleOut');
      document.getElementById('overlay2').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('overlay6').classList.add('d-none');
        document.getElementById('overlay5').classList.add('d-none');
        document.getElementById('overlay4').classList.add('d-none');
        document.getElementById('overlay3').classList.add('d-none');
        document.getElementById('overlay1').classList.add('d-none');
      }, 500);
    }
  }

  showOverlay1() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById('overlay1').classList.add('d-noneEffektScaleOut');
      document.getElementById('overlay1').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('overlay6').classList.add('d-none');
        document.getElementById('overlay5').classList.add('d-none');
        document.getElementById('overlay4').classList.add('d-none');
        document.getElementById('overlay3').classList.add('d-none');
        document.getElementById('overlay2').classList.add('d-none');
      }, 500);
    }
  }



  // Links

  tryOutMySlackClone() {
    window.open('https://slackclone.juergenhildbrand.ch/landing')
  }

  slackCloneGit() {
    window.open('https://github.com/juergenhildbrand/jey-s-slack-clone.git');
  }

  tryOutMyFirstOwnApp() {
    window.open('https://www.meiggenalp.ch');
  }

  myFirstOwnApp() {
    window.open('https://github.com/JuergenHildbrand/Obere-Meiggenalp.git');
  }

  tryOutRingOfFire() {
    window.open('https://ringoffire.juergenhildbrand.ch/')
  }

  ringOfFire() {
    window.open('https://github.com/juergenhildbrand/ring-of-fire.git');
  }

  myPageGit() {
    window.open('https://github.com/juergenhildbrand/juergenhildbrand.ch.git');
  }

  tryOutElPlloLoco() {
    window.open('https://elpolloloco.juergenhildbrand.ch/')
  }

  elPlloLocoGit() {
    window.open('https://github.com/juergenhildbrand/el-pollo-loco.git');
  }

  tryOutJoin() {
    window.open('https://join.juergenhildbrand.ch/')
  }

  joinGit() {
    window.open('https://github.com/JuergenHildbrand/join.git');
  }

  tryOutPokedex() {
    window.open('https://www.juergenhildbrand.ch/Pokedex/index.html')
  }

  pokedexGit() {
    window.open('https://github.com/JuergenHildbrand/Pokedex.git');
  }
}
