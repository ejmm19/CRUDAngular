import { Component, OnInit } from '@angular/core';
import {ClientBankService} from '../../services/client-bank.service';
import {Cuenta} from '../../interfaces/cuenta';
import {PublicidadService} from '../../services/publicidad.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas;
  nuevaCuenta = false;
  editarCuenta = false;
  idEdit;
  clientes;
  publici;
  Cuenta: Cuenta = {
    cliente: 'Seleccione un cliente',
    numcuenta: null,
    valorcuenta: null
  };
  constructor(private clienteBank: ClientBankService) {
    this.refreshCuenta();

  }

  ngOnInit() {
  }
  getClient() {
    return this.clienteBank.getIitem('clientes', 'I500yeyQZnqPqanuc3qS');
  }

  saveCuenta() {
    this.clienteBank.saveCuenta(this.Cuenta);
    this.refreshCuenta();
    this.nuevaCuenta = false;
  }
  refreshCuenta() {
    this.Cuenta = {
      cliente: 'Seleccione un cliente',
      numcuenta: null,
      valorcuenta: null
    };
    this.cuentas = this.clienteBank.getList('cuentas');
    this.clientes = this.clienteBank.getList('clientes');
  }
  deleteCuenta(id) {
    this.clienteBank.deleteItem(id, 'cuentas');
  }
  saveEditCuenta() {
    this.clienteBank.saveEdit(this.idEdit, this.Cuenta, 'cuentas');
    this.refreshCuenta();
    this.editarCuenta = false;
  }
  editCuenta(id, data) {
    this.idEdit = id;
    this.Cuenta = data;
    this.editarCuenta = true;
    console.log('asdasd', data);
  }
}
