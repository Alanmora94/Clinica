import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";


//***********************MODELOS */

import {Usuario} from '../Modelos/usuario';



//********************SERVICIOS */

import {CookiesService} from '../Servicios/cookies.service';
import {TokenService} from './token.service';
import {NotificacionService} from './notificacion.service'



@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(
    private auth: AngularFireAuth,
    private token: TokenService,
    private ruta: Router,
    private cookies: CookiesService,
    private notificacion: NotificacionService

  ) { }


//***************************VARIABLES */




//paquete: JSON;
UserName: string ="";
public sesion: boolean=false;
public _tipo;





//**************************************LOG UP DE USUARIOS */

CargarUser(obj: Usuario){




    this.auth.createUserWithEmailAndPassword(obj.email, obj.password)
    .then(data => {


      data.user.updateProfile({
       displayName: obj.nombre,
       photoURL: obj.tipo
      }).then(() => {
        data.user.getIdToken().then(token=>{

          this.UserName = obj.nombre;
          this.GuardaruserName(this.UserName);


          this.token.GuardarToken(token);
          this.sesion = true;

          location.reload();

          this.ruta.navigateByUrl("Home");
        }
        )
        .catch(e=>{

        });

      }).catch(e=>{


      });



    })
    .catch(e =>{
    })

  }








  GuardaruserName(obj: string){
    localStorage.setItem("UserName", obj);

  }




/***************************************** INICIAR SESION  */

IniciarSesion(obj: Usuario){


  try {


    this.auth.signInWithEmailAndPassword(obj.email,obj.password)
    .then(data => {


      let userAux : Usuario;

      if(obj.email == "alan@yahoo.com"){

        userAux = {
          nombre: data.user.displayName,
          email: data.user.email,
          tipo: "admin"

        }

        this._tipo = "admin";
      }else{

        userAux = {
          nombre: data.user.displayName,
          email: data.user.email,
          tipo: data.user.photoURL

        }

        this._tipo = data.user.photoURL

      }


          this.UserName = data.user.displayName;
          this.GuardaruserName(this.UserName);

      data.user.getIdToken().then(token=>{

          this.token.GuardarToken(token);

          if(this.token.ValidarToken()){

            this.sesion = true;

            this.cookies.GuardarUsuario(userAux);

            this.notificacion.LogIn(userAux.nombre)
            this.ruta.navigateByUrl("Home");

          }
        }).catch(e=>{

                 });

        }).catch(e=>{
          this.notificacion.ErrorLogin();
                       console.log("error de login");

                 });

    } catch (error) {
      this.notificacion.ErrorLogin();
      console.log("error de login2");
    }



}



public GetSesion (){

  return this.sesion;
}




GrabarUser(obj: Usuario){




  this.auth.createUserWithEmailAndPassword(obj.email, obj.password)
  .then(data => {


    data.user.updateProfile({
     displayName: obj.nombre,
     photoURL: obj.tipo
    }).then(() => {



      this.ruta.navigateByUrl("Home");

    }).catch(e=>{

    });

  })
  .catch(e =>{
  })

}








}
