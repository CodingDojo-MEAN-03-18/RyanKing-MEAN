import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    ActivityLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
