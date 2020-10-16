import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
}
// tslint:disable-next-line:typedef
retornarItems(){
  return this.items;
}
// tslint:disable-next-line: typedef
addItem(item: Item) {
  this.itemsCollection.add(item);
}
}
