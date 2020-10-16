import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/conexion.service';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  items: any;
  constructor(private con: ConService) {
    this.con.retornarItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }

  ngOnInit(): void {
  }

}
