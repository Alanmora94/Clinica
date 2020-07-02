import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import {TokenService} from '../Servicios/token.service';



@Injectable({
  providedIn: 'root'
})
export class AutenticadorGuard implements CanActivate {


  constructor(private router : Router, private token: TokenService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      let respuesta: boolean;


      try{



        respuesta = this.token.ValidarToken();


     } catch (error) {

       this.router.navigateByUrl("login");
       return false;

     }


     return respuesta;


  }

}
