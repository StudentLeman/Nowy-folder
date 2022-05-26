import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() { }
  dodaj(...liczby:number[]){
    let wynik = 0;
    for(let wartosci of liczby){
      wynik = wynik+wartosci;
    }
    return wynik;
  }
}
