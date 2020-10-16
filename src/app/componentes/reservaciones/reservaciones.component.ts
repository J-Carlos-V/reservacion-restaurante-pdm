import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  items: any;
  constructor(private con: ConService) {
    this.con.retornarItems().subscribe(items =>{
      this.items = items;
      console.log(this.items);
    });
   }

  ngOnInit(): void {
  }

}
