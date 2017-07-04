import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { MaterializeModule } from 'angular2-materialize'

import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent
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
