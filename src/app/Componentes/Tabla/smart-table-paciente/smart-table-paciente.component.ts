import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Paciente} from '../../../Modelos/paciente';

import {ImgComponent} from '../img/img.component';
import {DatoCargadoComponent} from '../dato-cargado/dato-cargado.component'


import {ImgEditorComponent} from '../img-editor/img-editor.component';



import {ApellidoComponent} from '../apellido/apellido.component';
import {MailComponent} from '../mail/mail.component';
import {NameComponent} from '../name/name.component';

@Component({
  selector: 'app-smart-table-paciente',
  templateUrl: './smart-table-paciente.component.html',
  styleUrls: ['./smart-table-paciente.component.css']
})
export class SmartTablePacienteComponent implements OnInit {


  _pacienteEditado : Paciente;

  _pacientes: Array<Paciente>;

  result;

  @Input()
  public set Paciente (obj : Array<Paciente>){

    this._pacientes = obj;


  }


  @Output() deleteOne = new EventEmitter<any>();

  @Output() PacienteEditado = new EventEmitter<any>();


  constructor() { }





  ngOnInit(): void {
  }


  settings = {

    delete: {
      confirmDelete : true
    },
    edit: {
      confirmSave: true

    },

    actions: {
      add: false
    },
    columns: {

      nombre: {
        title: 'Nombre',
        filter: true,
        editor: {
          type: 'custom',
          component: NameComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent

      },
      apellido: {
        title: 'Apellido',
        editor: {
          type: 'custom',
          component: ApellidoComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent
      },
      email: {
        title: 'Email',
        editor: {
          type: 'custom',
          component: MailComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent
      },
      imagen: {
        title: 'Imagen',
        filter: false,
        sort: false,
        editor: {
          type: 'custom',
          component: ImgEditorComponent
        },
        type: 'custom',
        renderComponent: ImgComponent
      }
    }
  };



  deleteone(e){


    this.deleteOne.emit(e.data.id);

  }




  Edicion(event){

    if(event.newData.nombre.valor == event.data.nombre && event.newData.apellido.valor == event.data.apellido && event.newData.email.valor == event.data.email && event.newData.imagen == event.data.imagen){

      event.confirm.reject();
    }



    if (event.newData.nombre.valido && event.newData.apellido.valido && event.newData.email.valido) {

      console.log("data: ",event.data.nombre);
      console.log("data: ",event.newData.nombre.valor);


      this._pacienteEditado = new Paciente();
      this._pacienteEditado.id = event.data.id;
      this._pacienteEditado.nombre = event.newData.nombre.valor;
      this._pacienteEditado.apellido = event.newData.apellido.valor;
      this._pacienteEditado.email = event.newData.email.valor;



      if (event.newData.imagen == ""){

        this._pacienteEditado.imagen = event.data.imagen;
      }else{

        this._pacienteEditado.imagen = event.newData.imagen;
      }


       this.PacienteEditado.emit(this._pacienteEditado);


      event.confirm.resolve();



    } else {
      event.confirm.reject();
    }



  }



}

