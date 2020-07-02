import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../Modelos/paciente';
import {FireStoreService} from '../../Servicios/fire-store.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {


  _pacientes : Array<Paciente> = [];

  constructor(private store: FireStoreService) { }

  ngOnInit(): void {

/*
    console.log("*nnnnnnnnnnnn*")
    this.store.GetPacientes().subscribe(pacientes => {
      this._pacientes = pacientes;
    });
    console.log("*nnnnnnnnnnnn*")
*/
  }


  recibirDatos(datos :Paciente){


    console.log( datos.apellido + " "  + datos.nombre + " "  + datos.email);

    //this.store.SubirImagen(datos.imagen);

    this.store.AltaPaciente(datos);



  }


  EliminarPaciente(id){

    this.store.DeletePaciente(id);

  }



  PacienteEditado(obj : Paciente){

    this.store.UpdatePaciente(obj);

  }


}
