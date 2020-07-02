import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { FormularioAltaBaseComponent } from './formulario-alta-base/formulario-alta-base.component';


//*********MATERIAL */
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SmartTablePacienteComponent } from './Tabla/smart-table-paciente/smart-table-paciente.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import {CdkTableModule} from '@angular/cdk/table';
import { MatTableExporterModule } from 'mat-table-exporter';

import {MatPaginatorModule} from '@angular/material/paginator';


//***********SMART TABLE */

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ImgComponent } from './Tabla/img/img.component';
import { ApellidoComponent } from './Tabla/apellido/apellido.component';
import { MailComponent } from './Tabla/mail/mail.component';
import { CargarImgComponent } from './Tabla/cargar-img/cargar-img.component';
import { ImgEditorComponent } from './Tabla/img-editor/img-editor.component';
import { NameComponent } from './Tabla/name/name.component';
//import { TextoComponent } from './tabla/texto/texto.component';


//************** SPINER DE CARGA */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { DatoCargadoComponent } from './Tabla/dato-cargado/dato-cargado.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { LogInComponent } from './Formularios/Sesion/log-in/log-in.component';
import { LogUpComponent } from './Formularios/Sesion/log-up/log-up.component';
import { FormTurnosComponent } from './Formularios/form-turnos/form-turnos.component';
import { SelectEspecialistaComponent } from './Formularios/Basico/select-especialista/select-especialista.component';
import { SelectFechaComponent } from './Formularios/Basico/select-fecha/select-fecha.component';
import { EntreFechasComponent } from './Consultas/Turnos/entre-fechas/entre-fechas.component';

import { ExportComponent } from './Grilla/export/export.component';
import { PorEspecialidadComponent } from './Consultas/Turnos/por-especialidad/por-especialidad.component';
import { EncuestaComponent } from './Formularios/encuesta/encuesta.component';
import { MisTurnosComponent } from './Grilla/mis-turnos/mis-turnos.component';
import { SalaComponent } from './Grilla/sala/sala.component';
import { TurnosEspecialistasComponent } from './Grilla/turnos-especialistas/turnos-especialistas.component';
import { FechaComponent } from './Grilla/Comple/fecha/fecha.component';
import { CancelarFinalizarComponent } from './Grilla/Comple/cancelar-finalizar/cancelar-finalizar.component';
import { ResenaComponent } from './Formularios/resena/resena.component';
import { VerResenaComponent } from './Grilla/ver-resena/ver-resena.component';
import { EsperaComponent } from './Grilla/espera/espera.component';
import { IMGComponent } from './img/img.component';


//import {AngularFireStorage} from '@angular/fire/storage';


@NgModule({
  declarations: [FormularioAltaBaseComponent, SmartTablePacienteComponent,
     ImgComponent, ApellidoComponent, MailComponent, CargarImgComponent,
      ImgEditorComponent, NameComponent, DatoCargadoComponent, EstadisticasComponent,
       LogInComponent, LogUpComponent, FormTurnosComponent, SelectEspecialistaComponent, SelectFechaComponent, EntreFechasComponent,ExportComponent, PorEspecialidadComponent, EncuestaComponent, MisTurnosComponent, SalaComponent, TurnosEspecialistasComponent, FechaComponent, CancelarFinalizarComponent, ResenaComponent, VerResenaComponent, EsperaComponent, IMGComponent],
  imports: [
  //  AngularFireStorage,
  NgxSpinnerModule,
  MatIconModule,
    Ng2SmartTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    ComponentesRoutingModule,


        //*****MATERIAL */
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSlideToggleModule,
        CdkTableModule,
        MatTableExporterModule,
        MatPaginatorModule,
        MatSliderModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FormularioAltaBaseComponent,SmartTablePacienteComponent,
    LogUpComponent,LogInComponent,FormTurnosComponent,EntreFechasComponent,ExportComponent,PorEspecialidadComponent,SalaComponent,
    EncuestaComponent,MisTurnosComponent,TurnosEspecialistasComponent,IMGComponent]
})
export class ComponentesModule { }
