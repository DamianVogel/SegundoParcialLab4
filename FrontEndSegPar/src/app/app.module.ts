import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginService } from './servicios/login.service';
import { GenericoService } from './servicios/generico.service';
import { UsuarioSegParComponent } from './componentes/usuario-seg-par/usuario-seg-par.component';
import { AltaServidorComponent } from './componentes/alta-servidor/alta-servidor.component';
import { AltaBaseComponent } from './componentes/alta-base/alta-base.component';
import { AltaAlmacenamientoComponent } from './componentes/alta-almacenamiento/alta-almacenamiento.component';
import { AltaServicioWebComponent } from './componentes/alta-servicio-web/alta-servicio-web.component';
import { ListawebComponent } from './componentes/listaweb/listaweb.component';
import { MostrarmbPipe } from './pipes/mostrarmb.pipe';
import { AltaZapatoComponent } from './componentes/alta-zapato/alta-zapato.component';
import { ListaZapatosComponent } from './componentes/lista-zapatos/lista-zapatos.component';
import { EstadisticaComponent } from './componentes/estadistica/estadistica.component';
import { FiltroLocalPipe } from './pipes/filtro-local.pipe';
import { PrecioPipe } from './pipes/precio.pipe';
import { ColorDirective } from './directivas/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioSegParComponent,
    AltaServidorComponent,
    AltaBaseComponent,
    AltaAlmacenamientoComponent,
    AltaServicioWebComponent,
    ListawebComponent,
    MostrarmbPipe,
    AltaZapatoComponent,
    ListaZapatosComponent,
    EstadisticaComponent,
    FiltroLocalPipe,
    PrecioPipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent}
      ,{path: 'Login' , component: LoginComponent}
      ,{path: 'AltaServidor' , component: AltaServidorComponent}
      ,{path: 'AltaAlmacenamiento' , component: AltaAlmacenamientoComponent}
      ,{path: 'AltaServicioWeb' , component: AltaServicioWebComponent}
      //,{path: 'Side' , component: SidenavComponent, canActivate: [VerificarJWTService]}
      ,{path: 'AltaBase' , component: AltaBaseComponent}
      ,{path: 'SegPar' , component: UsuarioSegParComponent}
      ,{path: 'AltaZapato' , component: AltaZapatoComponent}
      ,{path: 'Estadistica' , component: EstadisticaComponent}
    ]),
  ],
  providers: [
      LoginService,
      GenericoService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
