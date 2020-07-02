import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private toastr: ToastrService) { }


  LogUp($aux) {
    this.toastr.success('Fuiste registrado!','Bienvenida/o '+ $aux);
  }

  LogIn($aux) {
    this.toastr.success('Bienvenida/o '+ $aux);
  }


  LogOut($aux) {
    this.toastr.warning('Hasta luego '+ $aux);
  }

  Favoritos() {
    this.toastr.info('Agregada a Favoritos');
  }


  ErrorLogin() {
    this.toastr.error('e-mail o Password invalido','Error de Sesión');
  }


  Turno(aux) {
    this.toastr.info('El codigo de sala es :' , aux);
    this.toastr.info('Podra revisarlo en "mis turnos"');
  }


}
