import { environment } from './../../../environments/environment';
import { ManagementService } from './../services/management.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, Observable, of, pipe, filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Management } from './../model/management';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managament',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})


export class ManagementComponent implements OnInit {
  allManagements: Management[] = [];
  managements: Management[] = [];
  [x: string]: any;
  management$: Observable<Management[]>;
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);

  searchTerm: string = "";
  displayedColumns = ['_id', 'date', 'product', 'quant', 'valueOne', 'valueMany', 'modality', 'formPag', 'provider', 'authorizer', 'requester', 'actions'];

  constructor(
    private managementService: ManagementService,
    public dialog: MatDialog,
    private router: Router
    ) {


    this.management$ = this.managementService.listAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os dados');
        return of([])
      })
    );

  }

  onAdd() {
    this.router.navigate(['management/new']) //{relativeTo}
  }


  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:  erroMsg
    });
  }
  ngOnInit(): void {
  }
  search(e: Event): void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.managements = this.allManagements.filter((management) =>
      management.authorizer.toLowerCase().includes(value)
    );
  }
}
