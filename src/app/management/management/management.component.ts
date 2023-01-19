import { ClienteService } from './../services/cliente.service';
import { environment } from './../../../environments/environment';
import { ManagementService } from './../services/management.service';
import { catchError, Observable, of, pipe, filter } from 'rxjs';
import { Management } from '../model/management';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { Cliente } from '../model/cliente';
@Component({
  selector: 'app-managament',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})


export class ManagementComponent implements OnInit {
  allManagements: Management[] = [];
  managements: Management[] = [];
  registros: Cliente[] = [];
  [x: string]: any;
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);
  @Output() eventoBusca = new EventEmitter();

  searchTerm: string = "";
  // displayedColumns = ['_id', 'date', 'product', 'quant', 'valueOne', 'valueMany', 'modality', 'formPag', 'provider', 'authorizer', 'requester', 'actions'];

  constructor(
    private managementService: ManagementService,
    private router: Router,
    private clienteService: ClienteService
    ) {}

  onAdd() {
    this.router.navigate(['management/new']) //{relativeTo}
  }
  busca(termoBusca: string) {
    this.eventoBusca.emit(termoBusca);
  }
  // search(termoBusca: string) {
  //   this.eventoBusca.emit(termoBusca);
  // }
  // get(termoBusca?: string): void {
  //   this.clienteService.get(termoBusca).subscribe({
  //     next: (resposta: Cliente[]) => {
  //       this.registros = resposta;
  //     }
  //   });
  // }
  ngOnInit(): void {
  }
  // search(e: Event): void{
  //   const target = e.target as HTMLInputElement
  //   const value = target.value

  //   this.managements = this.allManagements.filter((management) =>
  //     management.authorizer.toLowerCase().includes(value)
  //   );
  // }
}
