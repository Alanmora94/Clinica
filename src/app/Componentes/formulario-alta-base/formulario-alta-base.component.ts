import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FireStoreService} from '../../Servicios/fire-store.service'


import {Paciente} from '../../Modelos/paciente';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-formulario-alta-base',
  templateUrl: './formulario-alta-base.component.html',
  styleUrls: ['./formulario-alta-base.component.css']
})
export class FormularioAltaBaseComponent implements OnInit {


preimagen;

  @Output() EnviarDatos = new EventEmitter<any>();




  datos : Paciente;

  constructor(private servicio: FireStoreService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  imagen = new FormControl('', [
    Validators.required

  ]);



  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
    //Validators.email,
  ]);

  apellido = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
    //Validators.email,
  ]);



  matcher = new MyErrorStateMatcher();



  verificar(){




    if(this.apellido.valid && this.nombre.valid && this.email.valid){






    this.datos = new Paciente(this.nombre.value,this.apellido.value,this.email.value, this.preimagen)





      this.EnviarDatos.emit(this.datos);


    }

  }



  handleImage(e: any):void{

    this.preimagen = e.target.files[0];


  }



}
