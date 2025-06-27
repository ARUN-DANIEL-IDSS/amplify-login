import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';



Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_yLyNU4fvo',
      userPoolClientId: '1gb564rlnnerp9k5dh42dbsl06'
      // userPoolId: 'us-east-1_Tx25rZ4pZ',
      // userPoolClientId: '6ga2fnaculdgvao3qgf3veeh4p'

    }
  }
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
