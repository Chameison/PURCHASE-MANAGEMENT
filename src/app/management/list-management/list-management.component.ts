import { Cliente } from './../model/cliente';
import { IList } from './../model/i-list';
import { Management } from '../model/management';
import { Empresa } from '../model/empresa';
import { ManagementService } from '../services/management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-management',
  templateUrl: './list-management.component.html',
  styleUrls: ['./list-management.component.scss']
})
export class ListManagementComponent implements OnInit, IList<Management> {
  public a!: Management;


  registros: Management[] = Array<Management>();
  cliente: Cliente[] = Array<Cliente>();

  constructor(
    private service: ManagementService
  ) {}
  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Management[]) => {
        this.registros = resposta;
      }
    });  }
  // get(termoBusca?: string | undefined): void{
  //   this.service.get(termoBusca).subscribe({
  //     next: (resposta: Management[]) => {
  //       this.registros = resposta;
  //     }
  //   });
  // }

  delete(id: number): void {
    if(confirm('Deseja realmente excluir a capacitação ?')){
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();

        }
      })
    }
  }

  ngOnInit(): void {

    this.get()
  }

}
