import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {


  _titulo: string = "Altas";
  _tipo: string = "admin";


  constructor() { }

  ngOnInit(): void {
  }

}
