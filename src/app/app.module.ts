import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { SignUpTCComponent } from './sign-up-tc/sign-up-tc.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    EmailComponent,
    PasswordComponent,
    SignUpTCComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
