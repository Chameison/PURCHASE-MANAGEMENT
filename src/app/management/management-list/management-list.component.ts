import { IList } from './../model/i-list';
import { ManagementService } from './../services/management.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Management } from '../model/management';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.scss']
})
export class ManagementListComponent implements OnInit, IList<Management> {
  @Input() management: Management[] = [];
  displayedColumns = ['_id', 'date', 'product', 'quant', 'valueOne', 'valueMany', 'modality', 'formPag', 'provider', 'authorizer', 'requester', 'actions'];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private service: ManagementService
  ) { }

  registros: Management[] = Array<Management>();


  ngOnInit(): void {
    this.get();
  }
  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Management[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir o convênio?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          // this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    }  }

  onAdd() {
    this.router.navigate(['management/new']) //{relativeTo}
  }
  onSave() {
    this.router.navigate(['management/note']) //{relativeTo}
  }


  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:  erroMsg
    });
  }


}
