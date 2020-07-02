import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dato-cargado',
  templateUrl: './dato-cargado.component.html',
  styleUrls: ['./dato-cargado.component.css']
})
export class DatoCargadoComponent implements OnInit {

  constructor() { }

  @Input() value: string;

  ngOnInit(): void {

    if (typeof this.value != 'string')

    {
      this.value = "CARGANDO..."

    }


  }

}
