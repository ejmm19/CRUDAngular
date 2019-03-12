import { Component, OnInit } from '@angular/core';
import {ClientBankService} from '../../services/client-bank.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  movimientos: any;
  nuevoMov = false;
  constructor( clientBank: ClientBankService) {
    this.movimientos = clientBank.getList('movimiento');
  }

  ngOnInit() {
  }

}
