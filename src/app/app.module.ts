import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PasajeroFormComponent } from './components/pasajero-form/pasajero-form.component';
import { PasajeroListComponent } from './components/pasajero-list/pasajero-list.component';
import { VueloListComponent } from './components/vuelo-list/vuelo-list.component';
import { VueloFormComponent } from './components/vuelo-form/vuelo-form.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { VuelosService } from '././services/vuelos.service';
import { PasajerosService } from './services/pasajeros.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PasajeroFormComponent,
    PasajeroListComponent,
    VueloListComponent,
    VueloFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    VuelosService,
    PasajerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
