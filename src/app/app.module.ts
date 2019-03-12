import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientBankService } from './services/client-bank.service';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { FormsModule } from '@angular/forms';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { PublicidadService } from './services/publicidad.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientesComponent,
    MovimientosComponent,
    CuentasComponent,
    PublicidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'AppTestbank'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    HttpClientModule
  ],
  providers: [
      ClientBankService,
      PublicidadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
