import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { MaterializeModule } from 'angular2-materialize'

import { Angular2TokenService } from 'angular2-token'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [ Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
