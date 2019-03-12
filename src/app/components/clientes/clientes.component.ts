import { Component, OnInit } from '@angular/core';
import {ClientBankService} from '../../services/client-bank.service';
import {Observable} from 'rxjs';
import {Cliente} from '../../interfaces/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  idClientEdit: string;
  cliente: Cliente = {
    nombre : '',
    direccion : '',
    telefono: null
  };
  serviceClients;
  addClient = false;
  edClient = false;
  clientes: any;
  clientesStorage;
  constructor( clientBank: ClientBankService) {
    this.serviceClients = clientBank;
    this.refreshClients();
  }

  ngOnInit() {
  }
  refreshClients() {
    this.clientes = this.serviceClients.getList('clientes');
  }
  newClient() {
    this.clearClient();
    this.refreshClients();
    this.addClient = true;
  }
  cancelCreate() {
    this.addClient = false;
    this.edClient = false;
  }
  clearClient() {
    this.cliente = {
      nombre : '',
      direccion : '',
      telefono: null
    };
  }
  saveClient() {
    this.serviceClients.saveClient(this.cliente);
    this.cliente = {
      nombre : '',
      direccion : '',
      telefono: null
    };
    this.refreshClients();
    this.cancelCreate();
  }
  deleteClient(id) {
    this.serviceClients.deleteItem(id, 'clientes');
    this.refreshClients();
  }
  editClient(id, element) {
    this.edClient = true;
    this.cliente = element;
    this.idClientEdit = id;
  }

  // Guardar Cambios de cliente editado
  saveChanges(id, element) {
    // this.addClient = false;
    this.serviceClients.saveEdit(id, element, 'clientes');
    this.refreshClients();
    this.edClient = false;
  }
}
