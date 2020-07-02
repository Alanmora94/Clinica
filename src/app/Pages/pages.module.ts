import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentesModule} from '../Componentes/componentes.module'

import { PagesRoutingModule } from './pages-routing.module';
import { MenuComponent } from './menu/menu.component';


//*********COMPONENTE */

import { ToastrModule } from 'ngx-toastr';


//**************MATERIAL */

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';


import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogUpComponent } from './log-up/log-up.component';
import { AltaComponent } from './admin/alta/alta.component';
import { TurnosComponent } from './turnos/turnos.component';
import { TurnoConsultaComponent } from './turno-consulta/turno-consulta.component';
import { TurnosPacienteComponent } from './turnos-paciente/turnos-paciente.component';
import { SalaEsperaComponent } from './sala-espera/sala-espera.component';
import { TurnoEspecialistaComponent } from './turno-especialista/turno-especialista.component';



@NgModule({
  declarations: [MenuComponent,
    PacientesComponent,
    HomeComponent,
    LogInComponent,
    LogUpComponent,
    AltaComponent,
    TurnosComponent,
    TurnoConsultaComponent,
    TurnosPacienteComponent,
    SalaEsperaComponent,
    TurnoEspecialistaComponent],
  imports: [
    CommonModule,
    ToastrModule,
    ComponentesModule,
    PagesRoutingModule,
    //*****MATERIAL */
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,

  ],
  exports: [MenuComponent,
    PacientesComponent]
})
export class PagesModule { }
