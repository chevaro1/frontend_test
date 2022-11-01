import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
