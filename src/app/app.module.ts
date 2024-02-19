import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ArrayformComponent } from './arrayform/arrayform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoreComponent } from './score/score.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({   
  declarations: [
    AppComponent,
    sidebarComponent,
    ArrayformComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://login.microsoftonline.com/95d0d3c9-dc15-46a9-b424-5e3acef7c686',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '1dd56a90-d482-4dc0-bb6e-df81125cefc9',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
