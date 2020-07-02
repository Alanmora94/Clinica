import {IPaciente} from './ipaciente';

export class Paciente implements IPaciente{

  id?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  imagen?: any;
  tipo?: string;
  dni?: number


constructor(nombre?: string,apellido?: string,email?: string,imagen?: any){

  this.apellido=apellido;
  this.nombre=nombre;
  this.email=email;
  this.imagen=imagen;
}


}
