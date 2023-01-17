import { environment } from './../../../environments/environment';
import { ManagementService } from './../services/management.service';
import { catchError, Observable, of, pipe, filter } from 'rxjs';
import { Management } from '../model/management';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-managament',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})


export class ManagementComponent implements OnInit {
  allManagements: Management[] = [];
  managements: Management[] = [];
  [x: string]: any;
  @Output() add: EventEmitter<boolean> = new EventEmitter(false);

  searchTerm: string = "";
  // displayedColumns = ['_id', 'date', 'product', 'quant', 'valueOne', 'valueMany', 'modality', 'formPag', 'provider', 'authorizer', 'requester', 'actions'];

  constructor(
    private managementService: ManagementService,
    private router: Router
    ) {}

  onAdd() {
    this.router.navigate(['management/new']) //{relativeTo}
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
