import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-img',
  templateUrl: './cargar-img.component.html',
  styleUrls: ['./cargar-img.component.css']
})
export class CargarImgComponent implements OnInit {

  constructor() { }

image;

  ngOnInit(): void {
  }



  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

}
