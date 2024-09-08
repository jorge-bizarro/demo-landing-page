import { Component } from '@angular/core';
import { faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBook, faBrain, faClock, faEnvelope, faEye, faHandHoldingMedical, faMapLocation, faPhone, faUser, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faWhatsapp = faWhatsapp;
  faTiktok = faTiktok;
  faBook = faBook;
  faUser = faUser;
  faClock = faClock;
  faHealth = faHandHoldingMedical;
  faEye = faEye;
  faBrain = faBrain;
  faDoctor = faUserDoctor;
  faPhone = faPhone;
  faMail = faEnvelope;
  faMap = faMapLocation;
}
