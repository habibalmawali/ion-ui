import { NgModule } from '@angular/core';
import { IonUiComponent } from './ion-ui.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [IonUiComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    IonicModule.forRoot({mode: "md"})
  ],
  exports: [IonUiComponent]
})
export class IonUiModule { }
