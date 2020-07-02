import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//*************COMPONENTES */
import {MenuComponent} from './menu/menu.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeComponent} from '../Pages/home/home.component';
import {LogUpComponent} from '../Pages/log-up/log-up.component';
import {LogInComponent} from '../Pages/log-in/log-in.component'
import {TurnosComponent} from '../Pages/turnos/turnos.component'

import {TurnoConsultaComponent} from '../Pages/turno-consulta/turno-consulta.component'

import {AltaComponent} from '../Pages/admin/alta/alta.component'

import {SalaEsperaComponent} from '../Pages/sala-espera/sala-espera.component'


import {TurnoEspecialistaComponent} from '../Pages/turno-especialista/turno-especialista.component'

import {TurnosPacienteComponent} from '../Pages/turnos-paciente/turnos-paciente.component'
//*****************GUARD */

import {AutenticadorGuard} from '../Guards/autenticador.guard';
import { from } from 'rxjs';



const routes: Routes = [

  {path: "", component: MenuComponent,
  children: [
    {path: "",
    component: LogInComponent},

    {path: "Pacientes",
     component: PacientesComponent},
     {path: "Home",
     component: HomeComponent,
     canActivate: [AutenticadorGuard]},
     {path: "LogUp",
     component: LogUpComponent},
     {path: "LogIn",
     component: LogInComponent},
     {path: "MisTurnos",
     component: TurnosPacienteComponent},
     {path: "EspecialistaTurnos",
     component: TurnoEspecialistaComponent},
     {path: "Sala",
     component: SalaEsperaComponent},
     {path: "Turno",
     component: TurnosComponent,
     canActivate: [AutenticadorGuard]},
     {path: "TurnoCon",
     component: TurnoConsultaComponent,
     canActivate: [AutenticadorGuard]},
     {path: "AltaPaciente",
     component: AltaComponent}
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
