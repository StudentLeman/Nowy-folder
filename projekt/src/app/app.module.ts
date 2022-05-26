import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KalkulatorService } from './kalkulator.service';
import { SynComponent } from './syn/syn.component';

@NgModule({
  declarations: [
    AppComponent,
    SynComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KalkulatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
