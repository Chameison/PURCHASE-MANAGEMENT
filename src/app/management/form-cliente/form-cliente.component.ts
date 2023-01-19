import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../services/cliente.service';
import { Cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  registro : Cliente = <Cliente>{};
  submit(form: NgForm): void {
    if (this.registro.codclient) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/empresa']);
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

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('codclient');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: Cliente) => {
          this.registro = resposta;
        }
      });
    }

  }

}
