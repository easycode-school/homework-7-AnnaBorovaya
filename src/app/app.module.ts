import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    AboutComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
