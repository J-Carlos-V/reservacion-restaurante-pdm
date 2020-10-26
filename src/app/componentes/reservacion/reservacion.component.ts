import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/conexion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  public mesas: any = [];
  public mesasDisponible: any = [];
  public mesaReservada: any = {Mesas: ''};
  // tslint:disable-next-line:typedef
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // tslint:disable-next-line:typedef
  createFormGroup() {
    return new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      number: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      personas: new FormControl('', [Validators.required, Validators.minLength(1)]),
      detalles: new FormControl('', [Validators.maxLength(100)]),
      estado: new FormControl('Pendiente'),
      mesa: new FormControl(Validators.required)
    });
  }
  // tslint:disable-next-line:member-ordering
  contacForm: FormGroup;
  constructor(private ser: ConService) {
    this.contacForm = this.createFormGroup();

    this.ser.retornarMesas().subscribe((res: any) => {
      this.mesas = res;
      for (const mesa of this.mesas) {
        if (mesa.estado === 'disponible') {
          this.mesasDisponible.push(mesa);
        }
      }
    });
    console.log(this.mesasDisponible);
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  get firstname() { return this.contacForm.get('firstname'); }
  // tslint:disable-next-line:typedef
  get surname() { return this.contacForm.get('surname'); }
  // tslint:disable-next-line:typedef
  get email() { return this.contacForm.get('email'); }
  // tslint:disable-next-line:typedef
  get number() { return this.contacForm.get('number'); }
  // tslint:disable-next-line:typedef
  get fecha() { return this.contacForm.get('fecha'); }
  // tslint:disable-next-line:typedef
  get hora() { return this.contacForm.get('hora'); }
  // tslint:disable-next-line:typedef
  get personas() { return this.contacForm.get('personas'); }
  // tslint:disable-next-line:typedef
  get detalles() { return this.contacForm.get('detalles'); }
  // tslint:disable-next-line:typedef
  get estado() { return this.contacForm.get('estado'); }
  // tslint:disable-next-line:typedef
  get mesa() { return this.contacForm.get('mesa'); }

  // tslint:disable-next-line:typedef
  onResetForm() {
    this.contacForm.reset();
  }
  // tslint:disable-next-line:typedef
  agregar() {
    if (this.contacForm.valid) {
      this.ser.addItem(this.contacForm.value);
      this.editarmesa(this.contacForm.value);
      this.onResetForm();
      window.alert('Reservacion realizada con exito, Si necesitas cancelar llama a este número 764 764 3040');
    } else {
      window.alert('Verifica tus datos ocurrio un error');
    }
  }

  // tslint:disable-next-line:typedef
  editarmesa(mesa){
    console.log(mesa);
  }

}
