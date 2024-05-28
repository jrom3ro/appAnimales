import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow, IonImg,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonIcon,
  IonRippleEffect
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { play, musicalNotes, happy } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow, IonImg, IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonIcon,
    IonRippleEffect
  ],
})
export class HomePage {
  constructor() {


    addIcons({ play, musicalNotes, happy });

  }

  play() {
    console.log("a")
    const audio = new Audio('assets/audio/mono/ANIMALCHIMPANZEE_6003_45_1.mp3');
    audio.play();
  }



}
