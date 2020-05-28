import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVehicleComponent,
    ModalComponent,
    UpdateVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
  exports: [ListVehicleComponent, UpdateVehicleComponent]
})
export class AppModule {}
