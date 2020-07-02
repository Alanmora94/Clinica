import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


//********************MODELOS  */
import { Usuario } from '../../../../Modelos/usuario';
import { Paciente } from '../../../../Modelos/paciente';
import { Iespecialista } from '../../../../Modelos/iespecialista';
import { Irecepcionista } from '../../../../Modelos/irecepcionista';




import {CookiesService} from '../../../../Servicios/cookies.service';
import {SesionService} from '../../../../Servicios/sesion.service';

import {FireStoreService} from '../../../../Servicios/fire-store.service';

import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-log-upForm',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  _usuarios :Usuario;
  _paciente: Paciente;
  _titulo: string;
  _GUI: string;


  @Input()
  public set Titulo (obj : string){


    this._titulo = obj;


  }

  @Input()
  public set Tipo (obj : string){


    this._GUI = obj;
    this._tipo = obj;



  }

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public contactForm: FormGroup;

  _nombre:string;
  _apellido:string;
  _dni:number;
  _email:string;
  _pass:string;
  _imagen;
  _tipo:string;

  _especialidad:string;


  constructor(private sesion: SesionService, private frmbuilder: FormBuilder, private BD: FireStoreService, private cookies: CookiesService) {

    this.formulario = this.frmbuilder.group( {

      pass: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      //tipo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      dni: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});

   }


   get pass() { return this.formulario.get('pass'); }
   get surname() { return this.formulario.get('apellido'); }
   get dni() { return this.formulario.get('dni'); }
   get name() { return this.formulario.get('nombre'); }
   get email() { return this.formulario.get('email'); }
   get imagen() { return this.formulario.get('imagen'); }


   Registrar(){



    if(this.formulario.valid){

      let _user = new Usuario(this._email,this._pass,this._nombre,this._tipo);

        if(this._GUI == 'admin')

        {


          this.sesion.GrabarUser(_user);


        } else{

          this.sesion.CargarUser(_user);
          this.cookies.GuardarUsuario(_user)

        }



      switch (this._tipo) {
        case "Paciente":


                      let _paciente = new Paciente();

                      _paciente.nombre=this._nombre;
                      _paciente.apellido=this._apellido;
                      _paciente.dni=this._dni;
                      _paciente.email=this._email;
                      _paciente.tipo=this._tipo;
                      _paciente.imagen=this._imagen;


                      this.BD.AltaPaciente(_paciente);


          break;

        case "Especialista":


                      let _especialista: Iespecialista = {

                      nombre : this._nombre,
                      apellido : this._apellido,
                      legajo : this._dni,
                      especialidad : this._especialidad,
                      email : this._email,
                      tipo : this._tipo,
                      imagen : this._imagen,
                    }

                      this.BD.AltaEspecialista(_especialista);
          break;

        case "Recepcionista":


                      let _recepcionista: Irecepcionista = {

                      nombre : this._nombre,
                      apellido : this._apellido,
                      legajo : this._dni,
                      email : this._email,
                      tipo : this._tipo,
                      imagen : this._imagen,
                    }

                      this.BD.AltaRecepcionista(_recepcionista);
          break;


      }




    }


  }



  ngOnInit(): void {


  }


  handleImage(e: any):void{

    this._imagen = e.target.files[0];


  }


  validacion(){




  }

  carga(){

    this._apellido = "Mora";
    this._nombre = "Alan";
    this._dni = 324234242;
    this._email = "Mora@yahoo.com";
    this._pass = "umbrella";

  }



}


