import { Component, OnInit } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {
  dodawanie:number = 0;

  constructor(kalkulator:KalkulatorService) {
    this.dodawanie = kalkulator.dodaj(1,2,3,4,5);
   }

  ngOnInit(): void {
  }

}
