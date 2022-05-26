import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  imieinazwisko:string="";
  email:string="";
  produkt:string="";
  ilosc:string="";
  wiadomosc:string="";
  onSubmit(){
    console.log("wpisanio: "+this.imieinazwisko+" "+this.email+" "+this.produkt)
  }
}
