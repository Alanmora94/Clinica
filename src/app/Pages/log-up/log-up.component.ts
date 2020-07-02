import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {


  _titulo: string = "registrarse como paciente";
  _tipo: string = "Paciente";

  constructor() { }

  ngOnInit(): void {
  }

}
