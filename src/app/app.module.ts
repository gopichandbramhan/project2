
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
 ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
BrowserAnimationsModule,
 AppRoutingModule,
 HttpClientModule,
    // RouterModule.forRoot([
    //   { path: 'data', component: SignupComponent } ])
      ],

  exports: [],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }