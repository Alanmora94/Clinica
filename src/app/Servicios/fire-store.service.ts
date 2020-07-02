import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Ifile} from '../Modelos/ifile';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import {CookiesService} from '../Servicios/cookies.service'



//****************MODELOS */

import {Iespecialista} from '../Modelos/iespecialista';
import {Iturno} from '../Modelos/iturno';

import {IturnoGr} from '../Modelos/iturno-gr';

import {Paciente} from '../Modelos/paciente';
import {IPaciente} from '../Modelos/ipaciente';
import {Irecepcionista} from '../Modelos/irecepcionista';
import {Isesion} from '../Modelos/isesion';
import {Isala} from '../Modelos/isala';
import {IEncuesta} from '../Modelos/iencuesta';
import {Reseña} from '../Modelos/reseña';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService {


  //********************************PACIENTE */

  PacienteCollection: AngularFirestoreCollection<IPaciente>;
  Paciente: Observable<IPaciente[]>;
  PacienteDoc: AngularFirestoreDocument<IPaciente>;

    //********************************SALA */

    SalaCollection: AngularFirestoreCollection<Isala>;
    Sala: Observable<Isala[]>;
    SalaDoc: AngularFirestoreDocument<Isala>;

  //********************************ESPECIALISTA */

  EspecialistaCollection: AngularFirestoreCollection<Iespecialista>;
  Especialista: Observable<Iespecialista[]>;
  EspecialistaDoc: AngularFirestoreDocument<Iespecialista>;


  //********************************RECEPCIONISTA */

  RecepcionistaCollection: AngularFirestoreCollection<Irecepcionista>;
  Recepcionista: Observable<Irecepcionista[]>;
  RecepcionistaDoc: AngularFirestoreDocument<Irecepcionista>;

  //********************************TURNO */

  TurnoCollectionGrabar: AngularFirestoreCollection<IturnoGr>;
  TurnoCollection: AngularFirestoreCollection<Iturno>;
  Turno: Observable<Iturno[]>;
  TurnoDoc: AngularFirestoreDocument<Iturno>;

    //********************************ENCUESTA */

    EncuestaCollection: AngularFirestoreCollection<IEncuesta>;
    Encuesta: Observable<IEncuesta[]>;
    EncuestaDoc: AngularFirestoreDocument<IEncuesta>;

        //********************************RESEÑA */

        ResenaCollection: AngularFirestoreCollection<Reseña>;
        Resena: Observable<Reseña[]>;
        ResenaDoc: AngularFirestoreDocument<Reseña>;



  //********************VARIABLE DE SESION */

   _sesion : Isesion;


  //******************VARIABLE PARA SUBIR IMAGEN */

  private filepath: any;
  downloadURL: Observable<string>
  imagenUrl : Observable<any>;


  especialistaString = '/especialista';
  pacienteString = '/paciente';
  turnoString = '/turno';
  salaString = '/sala';
  recepcionistaString= '/recepcionista';
  EncuestaString= '/encuesta';
  reseniaString= '/resenia';




  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {

    this.PacienteCollection = this.db.collection(this.pacienteString);
    this.EspecialistaCollection = this.db.collection(this.especialistaString);
    this.TurnoCollectionGrabar = this.db.collection(this.turnoString);
    this.TurnoCollection = this.db.collection(this.turnoString);
    this.SalaCollection = this.db.collection(this.salaString);
    this.RecepcionistaCollection = this.db.collection(this.recepcionistaString);
    this.EncuestaCollection = this.db.collection(this.EncuestaString);
    this.ResenaCollection = this.db.collection(this.reseniaString);
  }




  AltaPaciente(obj: Paciente){



    this.filepath =  `images/${obj.imagen.name}`;
    const fileRef = this.storage.ref(this.filepath);
    const task = this.storage.upload(this.filepath, obj.imagen);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;


          let paciente :IPaciente = {
            nombre: obj.nombre,
            apellido: obj.apellido,
            dni: obj.dni,
            tipo: obj.tipo,
            email: obj.email,
            imagen: this.downloadURL
          }

          this.PacienteCollection.add(paciente);


        });
      })
    ).subscribe();


  }





  GetPaciente(){

    this.Paciente = this.PacienteCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IPaciente;
        data.id = a.payload.doc.id;
         return data;
      });
    }));


    return this.Paciente;

  }



  UpdatePaciente(obj: Paciente){

    if (typeof obj.imagen === 'string')

    {

      let Uppaciente = {
        nombre: obj.nombre,
        apellido: obj.apellido,
        email: obj.email,
        imagen: obj.imagen
      }

      this.PacienteCollection.doc(obj.id).update(Uppaciente);



    }else{

      this.EditarPacienteConImg(obj)


    }



  }



  DeletePaciente(id: string){

    this.PacienteCollection.doc(id).delete();

  }



  EditarPacienteConImg(obj: Paciente){

    this.filepath =  `images/${obj.imagen.name}`;
    const fileRef = this.storage.ref(this.filepath);
    const task = this.storage.upload(this.filepath, obj.imagen);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;


          let Uppaciente :IPaciente = {
            nombre: obj.nombre,
            apellido: obj.apellido,
            email: obj.email,
            imagen: urlImage
          }

          this.PacienteCollection.doc(obj.id).update(Uppaciente);


        });
      })
    ).subscribe();



  }


//**************************************************  ESPECIALISTA   */



AltaEspecialista(obj: Iespecialista){

  this.filepath =  `images/${obj.imagen.name}`;
  const fileRef = this.storage.ref(this.filepath);
  const task = this.storage.upload(this.filepath, obj.imagen);
  task.snapshotChanges()
  .pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe(urlImage => {
        this.downloadURL = urlImage;


        let especialista :Iespecialista = {
          nombre: obj.nombre,
          apellido: obj.apellido,
          legajo: obj.legajo,
          especialidad: obj.especialidad,
          tipo: obj.tipo,
          email: obj.email,
          imagen: this.downloadURL
        }

        this.EspecialistaCollection.add(especialista);


      });
    })
  ).subscribe();


}


GetEspecialista(){

  this.Especialista = this.EspecialistaCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Iespecialista;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Especialista;

}




//**************************************************  RECEPCIONISTA   */

AltaRecepcionista(obj: Irecepcionista){


  this.filepath =  `images/${obj.imagen.name}`;
  const fileRef = this.storage.ref(this.filepath);
  const task = this.storage.upload(this.filepath, obj.imagen);
  task.snapshotChanges()
  .pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe(urlImage => {
        this.downloadURL = urlImage;


        let aux :Irecepcionista = {
          nombre: obj.nombre,
          apellido: obj.apellido,
          legajo: obj.legajo,
          tipo: obj.tipo,
          email: obj.email,
          imagen: this.downloadURL
        }

        this.RecepcionistaCollection.add(aux);


      });
    })
  ).subscribe();


}



GetRecepcionista(){

  this.Recepcionista = this.RecepcionistaCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Irecepcionista;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Recepcionista;

}



//**************************************************  TURNOS   */

AltaTurnos(obj: Iturno){


let vari : any = obj.fecha;
let tim : Date = new Date(Date.parse(vari));


obj.fecha = tim;



let auxTur : IturnoGr = {

Paciente_DNI: obj.Paciente_DNI,
EspecialistaLegajo: obj.EspecialistaLegajo,
nombre: obj.nombre,
apellido: obj.apellido,
TipoCreador: obj.TipoCreador,
CreadorId: obj.CreadorId,
fecha: tim.toString(),
id_sala: obj.id_sala,
cod_sala: obj.cod_sala,
estado: obj.estado


}


 this.TurnoCollectionGrabar.add(auxTur);



}


GetTurno(){

  this.Turno = this.TurnoCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Iturno;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Turno;

}



UpdateTurno(id: string, estado: string){


    let turno : Iturno = {
      estado: estado
    }

    this.TurnoCollection.doc(id).update(turno);


}





//**************************************************  ENCUESTAS   */

AltaEncuesta(obj: IEncuesta){



  this.EncuestaCollection.add(obj);


 }


 GetEncuesta(){

   this.Encuesta = this.EncuestaCollection.snapshotChanges().pipe(map(actions => {
     return actions.map(a => {
       const data = a.payload.doc.data() as IEncuesta;
       data.id = a.payload.doc.id;
        return data;
     });
   }));


   return this.Encuesta;

 }



//**************************************************  RESEÑA   */

AltaResena(obj: Reseña){



  this.ResenaCollection.add(obj);


 }


 GetResena(){

   this.Resena = this.ResenaCollection.snapshotChanges().pipe(map(actions => {
     return actions.map(a => {
       const data = a.payload.doc.data() as Reseña;
       data.id = a.payload.doc.id;
        return data;
     });
   }));


   return this.Resena;

 }





//*****************************************************   /// // GENERICO //  ///  ///////////////////// */







//**************************************************  SALAS   */



 GetSalas(){

   this.Sala = this.SalaCollection.snapshotChanges().pipe(map(actions => {
     return actions.map(a => {
       const data = a.payload.doc.data() as Isala;
       data.id = a.payload.doc.id;
        return data;
     });
   }));


   return this.Sala;

 }







}
