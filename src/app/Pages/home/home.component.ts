import { Component, OnInit } from '@angular/core';

import {FireStoreService} from '../../Servicios/fire-store.service';

import {TurnosService} from '../../Servicios/turnos.service';

import {CookiesService} from '../../Servicios/cookies.service';

//*************************MODELOS */


import {Iespecialista} from '../../Modelos/iespecialista';
import {Irecepcionista} from '../../Modelos/irecepcionista';
import {IPaciente} from '../../Modelos/ipaciente';


import { Isesion } from '../../Modelos/isesion';
import {Iturno} from '../../Modelos/iturno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  _listo : Boolean = false;

  _DatoSesion: Isesion;




  constructor(private DB : FireStoreService, private turno: TurnosService,public cookies: CookiesService) {


    console.log("entra en home")


    this._DatoSesion = this.cookies.GetSesionActual();





     //******************************************************* TRAER LOS DATOS DE PACIENTE  */



    if(this._DatoSesion.tipo == 'Paciente'){


      let _pacientes : Array<IPaciente>;


        this.DB.GetPaciente().subscribe(data =>{



          _pacientes = data;

          for (let index = 0; index < _pacientes.length; index++) {
            const element = _pacientes[index];


            if (element.email == this._DatoSesion.email) {

              let auz : Isesion = {

                nombre: element.nombre,
                apellido: element.apellido,
                email: element.email,
                imagen: element.imagen,
                tipo: this._DatoSesion.tipo,
                dniLegajo: element.dni

              }


              this.cookies.GuardarUsuario(auz);
              this._DatoSesion = auz;

              this._listo = true;

              console.log("JOYAAAAA");
              console.log(this._DatoSesion);
              console.log(this._listo);

              break;

            }


          }


        })



      }

      //*************************ssssssssssssssssssssssssssssssssssssssssssssssss */



      //******************************************************* TRAER LOS DATOS DE ESPECIALISTA  */

        if(this._DatoSesion.tipo == 'Especialista'){


          let _especialista : Array<Iespecialista>;


            this.DB.GetEspecialista().subscribe(data =>{



              _especialista = data;

              for (let index = 0; index < _especialista.length; index++) {
                const element = _especialista[index];


                if (element.email == this._DatoSesion.email) {

                  let auz : Isesion = {

                    nombre: element.nombre,
                    apellido: element.apellido,
                    email: element.email,
                    imagen: element.imagen,
                    tipo: this._DatoSesion.tipo,
                    dniLegajo: element.legajo

                  }


                  this.cookies.GuardarUsuario(auz);
                  this._DatoSesion = auz;

                  this._listo = true;

                  console.log("JOYAAAAA");
                  console.log(this._DatoSesion);
                  console.log(this._listo);

                  break;

                }


              }


            })


          }


    //*************************ssssssssssssssssssssssssssssssssssssssssssssssss */

         //************************************ TRAER LOS DATOS DE RECEPCIONISTA  */

         console.log(this._DatoSesion.tipo);



          if(this._DatoSesion.tipo == 'Recepcionista'){

            console.log("entra en recepcion");

            let _recepcionista : Array<Irecepcionista>;


              this.DB.GetRecepcionista().subscribe(data =>{



                _recepcionista = data;

                for (let index = 0; index < _recepcionista.length; index++) {
                  const element = _recepcionista[index];


                  if (element.email == this._DatoSesion.email) {

                    let auz : Isesion = {

                      nombre: element.nombre,
                      apellido: element.apellido,
                      email: element.email,
                      imagen: element.imagen,
                      tipo: this._DatoSesion.tipo,
                      dniLegajo: element.legajo


                    }


                    this.cookies.GuardarUsuario(auz);
                    this._DatoSesion = auz;

                    this._listo = true;

                    console.log("JOYAAAAA");
                    console.log(this._DatoSesion);
                    console.log(this._listo);

                    break;

                  }


                }


              })


            }







  }




  ngOnInit(): void {


  }

}
