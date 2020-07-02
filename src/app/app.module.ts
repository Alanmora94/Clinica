import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './Pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { ComponentesModule } from './Componentes/componentes.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//**********FIREBASE */

import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';


import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import {AngularFireStorageModule} from '@angular/fire/storage';

//**********MODULOS PROPIOS */

//import {PagesModule} from './Pages/pages.module'

//************************JWT  */


import { JwtModule } from "@auth0/angular-jwt";
//import { JwtHelperService } from "@auth0/angular-jwt";

//**************HTTP */
import { HttpClientModule } from "@angular/common/http";


//********************SERVICIOS */


import {CookiesService} from './Servicios/cookies.service';
import {FireStoreService} from './Servicios/fire-store.service';
import {SesionService} from './Servicios/sesion.service';
import {TokenService} from './Servicios/token.service';
import { BotonPipe } from './Pipes/boton.pipe';


export function tokenGetter() {
  return localStorage.getItem("token");
}






@NgModule({
  declarations: [
    AppComponent,
    BotonPipe
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        }
    }),
    AngularFireStorageModule,
    JwtModule,
    //JwtHelperService,


    //PagesModule,




    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PagesModule,
    ComponentesModule,
    AppRoutingModule,


  ],
  providers: [
    CookiesService,
    FireStoreService,
    SesionService,
    TokenService,
    AngularFireAuth

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
