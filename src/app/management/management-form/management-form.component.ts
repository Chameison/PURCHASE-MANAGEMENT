import { Cliente } from './../model/cliente';
import { Empresa } from './../model/empresa';
import { NgForm } from '@angular/forms';
import { EmpresaService } from './../services/empresa.service';
import { ManagementService } from './../services/management.service';
import { Management } from './../model/management';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.scss']
})
export class ManagementFormComponent implements OnInit {
  // form: FormGroup
  @Output() eventoBusca = new EventEmitter();

  constructor(
    private service: ManagementService,
    private serviceEmpresa: EmpresaService,
    private serviceClient: ClienteService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  registro: Management = <Management>{};
  empresa: Cliente[] = Array<Cliente>();
  selectedOption: any;
  options: any;
  showSearch = false;




  submit(form: NgForm): void {
    if (this.registro._id) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/new']);
          // this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    } else {
      this.service.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    }
  }
  // selectedOption: any;
  // options: any[];

  openSearch() {
    this.showSearch = true;
  }
  trackByFn(index: number, item: any): any {
    return item.nome;
}
  search(termoBusca: string) {
    this.eventoBusca.emit(termoBusca);
      //   this.serviceClient.get().subscribe(data => {

      //   return this.options = data.map(item => ({ value: item.nome, name: item.codclient }));


      //   });
  }
  // }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('codclient')
    this.serviceClient.listAll().subscribe({
      next: (resposta: Cliente[]) => {
        this.empresa = resposta;
      }
    });

  }
}
