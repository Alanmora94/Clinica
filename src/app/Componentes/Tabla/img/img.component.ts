import { Component, OnInit, Input } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {


  _precarga = true;

  @Input() value: string;



  constructor() { }

  ngOnInit(): void {

    //console.log("VALOR CARGANDO: " + this.value)

    if (typeof this.value === 'string')

    {
      this.Cancelarprecarga();

    }


  }


  Cancelarprecarga(){

    this._precarga = false;
  }



}



