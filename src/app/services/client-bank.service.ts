import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map } from "rxjs/operators";
import {Cliente} from '../interfaces/cliente';
import {Cuenta} from '../interfaces/cuenta';
@Injectable({
  providedIn: 'root'
})
export class ClientBankService {
  client: any;
  constructor( private afs: AngularFirestore) {
  }
  // guardar cliente
  saveClient(client: Cliente ) {
    this.afs.collection('clientes').add(client).then(() => { console.log('cliente registrado'); } );
  }
  deleteItem(id, path: string) {
    this.afs.collection(path).doc(id).delete().then(() => { console.log('Item eliminado'); });
  }
  saveEdit(id, data, path) {
    this.afs.collection(path).doc(id).update(data);
  }
  getIitem(path, id) {
    this.afs.collection(path).doc(id).ref.get().then(function (doc) {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

  }
  // movimientos
  getMovimientos(): Observable<any> {
    return this.afs.collection('movimiento').valueChanges();
  }
  saveCuenta(cuenta: Cuenta) {
    this.afs.collection('cuentas').add(cuenta).then(() => { console.log('cuenta registrada'); });
  }
  validateIfExist(path, field, target) {
    // this.afs.collection(path).valueChanges()
  }
  getList(path): Observable<any> {
    return this.afs.collection(path).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })));
  }
}
