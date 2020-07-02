import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(public jwtHelper: JwtHelperService) { }





  DecodificarToken(obj: any){

    return this.jwtHelper.decodeToken(obj);
  }


  GuardarToken(obj: any){
    localStorage.setItem("token", obj);
  }

  ObtenerToken(){
    return localStorage.getItem("token");
  }




  ValidarToken(): boolean {

    let sesion: boolean;

    try{

         const objToken = this.ObtenerToken();



      if (objToken != null) {

        const payload =  this.DecodificarToken(objToken);



        if(payload["email"] != null && payload["aud"] === "clinica-3f440" ){


          sesion = true;


        }else
        {
          this.BorrarToken();
          sesion = false;
        }
      }else{

        sesion = false;
      }


    } catch (error) {

      sesion = false;

    }


    return sesion;


  }






  BorrarToken(){


    localStorage.removeItem("token")

  }







}
