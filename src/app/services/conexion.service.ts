import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }
export interface Mesas {name: string;}
 
@Injectable({
  providedIn: 'root'
})
export class ConService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
   private MesasCollection: AngularFirestoreCollection<Mesas>;
  mesas: Observable<Mesas[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    this.MesasCollection = afs.collection<Mesas>('mesas');
    this.mesas = this.MesasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    // this.mesas = this.MesasCollection.valueChanges();
}
// tslint:disable-next-line:typedef
retornarItems(){
  return this.items;
}
// tslint:disable-next-line:typedef
retornarMesas(){
  return this.mesas;
  // return this.afs.collection('mesas').snapshotChanges;
  // return this.afs.collection('mesas').doc('5nBEvdb8t7pU2MCY5Ntb').snapshotChanges;
}
// tslint:disable-next-line: typedef
addItem(item: Item) {
  this.itemsCollection.add(item);
}
// tslint:disable-next-line:typedef
editarmesa(){
}
}
