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


  }


  recibirDatos(datos :Paciente){






    this.store.AltaPaciente(datos);



  }


  EliminarPaciente(id){

    this.store.DeletePaciente(id);

  }



  PacienteEditado(obj : Paciente){

    this.store.UpdatePaciente(obj);

  }


}
