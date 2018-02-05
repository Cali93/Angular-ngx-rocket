import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from '@app/signup/signup.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartModule } from '@app/start/start.module';
import { ChatModule } from '@app/chat/chat.module';
import { ProfileModule } from '@app/profile/profile.module';

export const firebaseConfig = environment.firebase;
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    SignupModule,
    LoginModule,
    StartModule,
    ChatModule,
    ProfileModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
