import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-ver-resena',
  templateUrl: './ver-resena.component.html',
  styleUrls: ['./ver-resena.component.css']
})
export class VerResenaComponent implements OnInit {

  constructor() { }


  _resena: string;


  @Input()
  public set resena (obj : string){


    this._resena = obj;
  }




  ngOnInit(): void {
  }

}
