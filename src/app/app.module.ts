import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { SideContentComponent } from './side-content/side-content.component';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';



import {MatButtonModule, MatCheckboxModule, MatIconModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormCardComponent } from './form-card/form-card.component';
import { SweetDashboardComponent } from './sweet-dashboard/sweet-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TopBarComponent,
    PlaygroundComponent,
    SideContentComponent,
    FormCardComponent,
    SweetDashboardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
