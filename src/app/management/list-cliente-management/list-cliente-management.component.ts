import { ClienteService } from './../services/cliente.service';
import { IList } from './../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-list-cliente-management',
  templateUrl: './list-cliente-management.component.html',
  styleUrls: ['./list-cliente-management.component.scss']
})
export class ListClienteManagementComponent implements OnInit{
registros: Cliente[] = Array<Cliente>();  // table!: any;
  public cliente!: Cliente;
  constructor(
    private service: ClienteService
  ) { }
  // get(termoBusca?: string | undefined): void {
  //   this.service.get(termoBusca).subscribe({
  //     next: (resposta: Cliente[]) => {
  //       this.registros = resposta;
  //     }
  //   });
  // }
    get(termoBusca?: string | undefined): void {
      this.service.get(termoBusca).subscribe({
        next: (resposta: Cliente[]) => {
          this.registros = resposta;
        }
      });
    }
  delete(id: string): void {
    if (confirm('Deseja realmente excluir o convênio?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }  }
  ngOnInit(): void {
    // this.service.getAll().subscribe((data: Cliente) => {
    //   this.cliente = data;
    //   console.log(this.cliente);
    // })
    this.get()
  }
}
