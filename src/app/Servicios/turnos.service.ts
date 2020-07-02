import { Injectable } from '@angular/core';

import {Iturno} from '../Modelos/iturno';

import {ExportI} from '../Modelos/export-i';

import {SalaFecha} from '../Modelos/sala-fecha';

import {Isala} from '../Modelos/isala';

import {Iespecialista} from '../Modelos/iespecialista';

import {SalaOcupada} from '../Modelos/sala-ocupada';
import { analytics } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor() { }






  ObtenerFechaNoDisponibles(obj :Array<Iturno>): Array<Date> {




   // let fechaA : Array<Date> = obj.

   let fechas : Array<Date>=[];


    for (let index = 0; index < obj.length; index++) {

      if(obj[index].estado == "pendiente"){

              const element : any = obj[index].fecha;
              let contador = 0;

                  const y1  = new Date(Date.parse(element));



              let entra = false;



                if ( fechas.length > 0){

                  for (let z1 = 0; z1 < fechas.length; z1++) {
                    const esclavo  : any = fechas[z1];


                    if(y1.getMonth() == esclavo.getMonth() && y1.getDate() == esclavo.getDate()){

                      entra = true;
                      break;
                    }


                  }

                }




                  if(!entra){


                            for (let x2 = 0; x2 < obj.length; x2++) {

                              if(obj[x2].estado == "pendiente"){

                                  const element2  : any = obj[x2].fecha;

                                  const y2 = new Date(Date.parse(element2));

                                  if(y1.getMonth() == y2.getMonth() && y1.getDate() == y2.getDate()){

                                    contador++;

                                  }

                                }

                            }

                  }




                if (contador > 3){

                    fechas.push(new Date(y1));
                }


      }

    }

    return fechas;


  }






//********************************OBTENER FECHAS NO DISPONIBLES POR ESPECIALISTA */




ObtenerFechaNoDisponiblesXEspecialista(ObjTurnos :Array<Iturno>, legajo: number): Array<Date> {



  let obj : Array<Date> = [];
  let fechas : Array<Date>=[];

//************************************* OBTENGO TODAS LAS FECHAS  */




for (let index = 0; index < ObjTurnos.length; index++) {

  const element : any = ObjTurnos[index];
  const n1  = new Date(Date.parse(element.fecha));





    if(legajo == element.EspecialistaLegajo && element.estado == "pendiente"){

      obj.push(new Date(n1));

    }

}





//**************************************** FILTRO DEJANDO SOLO LOS DIAS */





  for (let index = 0; index < obj.length; index++) {
    const element : Date = obj[index];
    let contador = 0;

     let entra = false;



      if ( fechas.length > 0){

        for (let z1 = 0; z1 < fechas.length; z1++) {
          const esclavo  : Date = fechas[z1];


          if(element.getMonth() == esclavo.getMonth() && element.getDate() == esclavo.getDate()){

            entra = true;
            break;
          }


        }

      }




        if(!entra){


                  for (let x2 = 0; x2 < obj.length; x2++) {
                    const y2  : Date = obj[x2];

                    if(element.getMonth() == y2.getMonth() && element.getDate() == y2.getDate()){

                      contador++;

                    }



                  }

        }




      if (contador > 3){

          fechas.push(new Date(element));
      }


  }


  return fechas;


}








ObtenerHorarioDisponibleXEspecialistaYFecha(fecha :Date, legajo: number, Turnos: Array<Iturno>): Array<Date> {






let aux: Array<Date> = []

let aux2: Array<Date> = []


let ocupado: Array<Date> = []



//******************************* GENERAR TODOS LOS HORARIO */

let dia: Date = fecha;

dia.setHours(9);


while(dia.getHours() < 18){

  aux.push(new Date(dia));

  dia.setMinutes(dia.getMinutes() + 15);

}





//************************************ FILTRAR LOS TURNOS LIBRES  de este dia para este medico */

      for (let index = 0; index < Turnos.length; index++) {
        const element : any = Turnos[index];
        const n1  = new Date(Date.parse(element.fecha));

                if( element.EspecialistaLegajo == legajo && element.estado == "pendiente"  && n1.getDate() == fecha.getDate() && n1.getMonth() == fecha.getMonth()){

                  ocupado.push(new Date(n1));
                }

      }







      //************************************ QUITAR TURNOS OCUPADOS , DEJANDO SOLO LOS LIBRES */

      for (let lib = 0; lib < aux.length; lib++) {
        const elem1 : Date = aux[lib];

        let bandera = true;


              for (let ocup = 0; ocup < ocupado.length; ocup++) {
                const elem2 : Date = ocupado[ocup];


                        if( elem1.getHours() == elem2.getHours() && elem1.getMinutes() == elem2.getMinutes()){

                          bandera = false;
                           break;
                        }

              }

           if(bandera){
            aux2.push(new Date(elem1));
           }


      }










      return aux2;







}





//: Array<SalaFecha>

ObtenerHorarioDisponibleXSala(salas: Array<Isala>,turnos: Array<Iturno>,horarios : Array<Date>) {



let _horarioSalas: Array<SalaFecha>=[];

let hoy = horarios[0];

let TurnosHoy: Array<Iturno> = [];


//**************************BOTENER LOS TURNOS DE LA FECHA SOLICITADA */

for (let index2 = 0; index2 < turnos.length; index2++) {

  const element2 : any = turnos[index2].fecha;
  const n1  = new Date(Date.parse(element2));

      if(turnos[index2].estado == "pendiente" ){

              if(n1.getDate() == hoy.getDate() && n1.getMonth() == hoy.getMonth()){

                TurnosHoy.push(turnos[index2]);


              }

        }

}








//************************** OBTENER SALAS OCUPADAS EN ESOS HORARIOS */

if(TurnosHoy.length > 0 ){


  let _salasOcupadas: Array<SalaOcupada> = [];


    for (let index = 0; index < salas.length; index++) {

      const element : any = salas[index].id;
      const cadenaHorario: Array<Date> = [];

      let Salaocu = false;



             for (let index2 = 0; index2 < TurnosHoy.length; index2++) {

                const m1 = TurnosHoy[index2].id_sala;

                const element2 : any = TurnosHoy[index2].fecha;
                const n1  = new Date(Date.parse(element2));

               if(element == m1){

                  Salaocu = true;
                  cadenaHorario.push(new Date(n1));

                  }


              }


              if(Salaocu){

                  let aux3 : SalaOcupada = {

                    idSala : element,
                    codigoSala : salas[index].codigo,
                    horarioOcupado : cadenaHorario
                  }

                  _salasOcupadas.push(aux3);

        }




    }








//************************************************VERIFICAR SI HAY UNA SALA LIBRE EN TODO EL DIA


let _SalaLibre : Isala;


for (let x = 0; x < salas.length; x++) {

  const salaCadena : Isala =  salas[x];

  let SalaLibre = true;


          for (let x1 = 0; x1 < _salasOcupadas.length; x1++) {

              const SalaOcu : SalaOcupada =  _salasOcupadas[x1];

              if(SalaOcu.idSala == salaCadena.id){

                SalaLibre = false;
                break;

              }


          }


          if(SalaLibre){

            _SalaLibre = salaCadena;
            break;

          }



}




if(_SalaLibre != null)
{



  for (let z = 0; z < horarios.length; z++) {

    let auxi: SalaFecha= {
      idSala : _SalaLibre.id,
      salaCod : _SalaLibre.codigo,
      fecha : horarios[z]
    }

    _horarioSalas.push(auxi);


  }



}else{





    //********************************SINO HAY SALA LIBRE, BUSCO HORARIOS LIBRES EN LAS SALAS OCUPADAS



                  for (let i = 0; i < horarios.length; i++) {

                    const horario : Date = horarios[i];



                        for (let i2 = 0; i2 < _salasOcupadas.length; i2++) {

                          const sala : SalaOcupada = _salasOcupadas[i2];

                          let disponible = true;


                                  for (let i3 = 0; i3 < sala.horarioOcupado.length; i3++) {


                                    const hsOcupado : Date = sala.horarioOcupado[i3];


                                    if(horario.getHours() == hsOcupado.getHours() && horario.getMinutes() == hsOcupado.getMinutes()){

                                      disponible = false;
                                      break;

                                    }



                                  }




                          if(disponible){

                            let auxu: SalaFecha= {
                              idSala : sala.idSala,
                              salaCod : sala.codigoSala,
                              fecha : horario
                            }

                            _horarioSalas.push(auxu);

                            break;

                          }




                        }



                  }


  }




}else{

  for (let z = 0; z < horarios.length; z++) {

    let auxi: SalaFecha= {
      idSala : salas[0].id,
      salaCod : salas[0].codigo,
      fecha : horarios[z]
    }

    _horarioSalas.push(auxi);


  }


}


    return _horarioSalas;



}







EntreFechas(turnos: Array<Iturno>, desde: Date, hasta: Date): Array<Iturno>{


  let _lista : Array<Iturno> = [];



  for (let z = 0; z < turnos.length; z++) {
     const element : any = turnos[z].fecha;
     const _lafecha: Date = new Date (Date.parse(element));


    if(_lafecha >= desde && _lafecha <= hasta){

      _lista.push(turnos[z]);

    }


  }


return _lista;


}



GetTurnosHoy(turnos: Array<Iturno>): Array<Iturno>{


  let _lista : Array<Iturno> = [];

  let hoy : Date = new Date(Date.now());






          for (let z = 0; z < turnos.length; z++) {
            const element : any = turnos[z].fecha;
            const _lafecha: Date = new Date (Date.parse(element));


                  if( _lafecha.toLocaleDateString()  == hoy.toLocaleDateString()){

                    _lista.push(turnos[z]);

                  }


          }


return _lista;

}






GetTurnoPorSala(turnos: Array<Iturno>, id: string){



  let _lista : Array<Iturno> = [];



  for (let z = 0; z < turnos.length; z++) {
    const element : Iturno = turnos[z];


          if( element.id_sala  == id){

            _lista.push(turnos[z]);

          }


  }


return _lista;



}




GetProximosTurnos(salas: Array<Isala>, turnos: Array<Iturno>): Array<Iturno>{


  let _entrega : Array<Iturno>=[];

  let ordenados : Array<Iturno>;

  let _lista : Array<any> = turnos;

  let ahora : Date = new Date(Date.now());

  ordenados = _lista.sort((a, b)=>( a.fecha > b.fecha) ? 1 : -1 );





 let _prelistos : Array<Iturno> = [];


 for (let index = 0; index < ordenados.length; index++) {
  const element = ordenados[index];
  const fe : any = ordenados[index].fecha;
  const fecha : Date = new Date (Date.parse(fe));

      if(element.estado == 'pendiente' && fecha > ahora){


        _prelistos.push(element);

      }

}


/*
  for (let index = 0; index < salas.length; index++) {
      const sala = salas[index];


                for (let index = 0; index < ordenados.length; index++) {

                  const element : Iturno = ordenados[index];
                  const fecha : Date = new Date(ordenados[index].fecha);


                  if(element.estado == 'pendiente' && sala.id == element.cod_sala && fecha > ahora){


                    _entrega.push(element);

                  }



                }


  }*/



  return _prelistos;


}



GetTurnosTomados(turnos: Array<Iturno>): Array<Iturno>{



  let _lista : Array<Iturno> = [];


  let ahora : Date = new Date(Date.now());


      for (let index = 0; index < turnos.length; index++) {

        const element : Iturno = turnos[index];
        const fe : any = element.fecha;
        const fecha : Date = new Date(Date.parse(fe));


              if(element.estado == 'tomado' && fecha > ahora){


                _lista.push(element);

              }



      }


return _lista;


}









GetTurnoPorPaciente(turnos: Array<Iturno>, paciente: number): Array<Iturno>{


  let _lista : Array<Iturno> = [];



  for (let z = 0; z < turnos.length; z++) {
     const element : Iturno = turnos[z];



    if(element.Paciente_DNI == paciente){

      _lista.push(element);

    }


  }


return _lista;


}














EspecialistasPorEspecialidad(especialista: Array<Iespecialista>, especialidad: string): Array<number>{


  let _listaLegajos : Array<number> = [];


              for (let z = 0; z < especialista.length; z++) {
                const element2 : Iespecialista = especialista[z];

                if(especialidad == element2.especialidad){

                  _listaLegajos.push(element2.legajo);

                }


              }




return _listaLegajos;


}











PorEspecialistas(turnos: Array<Iturno>, especialistas: Array<number>, estado: string): Array<Iturno>{


  let _lista : Array<Iturno> = [];




if(estado == 'todos'){

  for (let i = 0; i < especialistas.length; i++) {
    const element1 : any = especialistas[i];

              for (let z = 0; z < turnos.length; z++) {
                const element2 : any = turnos[z].EspecialistaLegajo;

                if(element1 == element2){

                  _lista.push(turnos[z]);

                }


              }

  }


}
else{

  for (let i = 0; i < especialistas.length; i++) {
    const element1 : any = especialistas[i];

              for (let z = 0; z < turnos.length; z++) {
                const element2 : any = turnos[z].EspecialistaLegajo;
                const estado1 : any = turnos[z].estado;

                if(element1 == element2 && estado1 == estado){

                  _lista.push(turnos[z]);

                }


              }

  }



}






return _lista;


}







PorUnEspecialista(turnos: Array<Iturno>, legajo: number): Array<Iturno>{


  let _lista : Array<Iturno> = [];


              for (let z = 0; z < turnos.length; z++) {
                const element2 : any = turnos[z].EspecialistaLegajo;

                  if(legajo == element2){

                    _lista.push(turnos[z]);

                  }

              }

return _lista;


}











GenerarListaExpor(lista: Array<Iturno>, f1: string,f2?: string,f3?: string,f4?: string,f5?: string,f6?: string){


  const _listaExport : Array<ExportI> = [];

  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];




    let itemEx :ExportI = {

      i1: element[f1]
    }

      if (f2 != null) {

        itemEx.i2=element[f2];
      }

      if (f3 != null) {

        itemEx.i3=element[f3];
      }
      if (f4 != null) {

        itemEx.i4=element[f4];
      }
      if (f5 != null) {

        itemEx.i5=element[f5];
      }
      if (f6 != null) {

        itemEx.i6=element[f6];
      }




      _listaExport.push(itemEx);

    }

    return _listaExport;


  }











}


