export class Usuario {


  nombre?: string;
  password?: string;
  email?: string;
  tipo?: string;

constructor(email?: string,password?: string,nombre?: string,tipo?: any){

  this.password=password;
  this.nombre=nombre;
  this.email=email;
  this.tipo=tipo;
}


}
