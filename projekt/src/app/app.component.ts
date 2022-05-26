import { Component } from '@angular/core';
import { KalkulatorService } from './kalkulator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KalkulatorService]
})
export class AppComponent {
  title = 'projekt';
  dodawanie:number = 0;
  constructor(kalkulator:KalkulatorService){
    this.dodawanie = kalkulator.dodaj(2,4,5,6,8,9);
  }
}
