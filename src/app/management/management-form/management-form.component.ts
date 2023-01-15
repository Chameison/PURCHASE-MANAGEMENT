import { ManagementService } from './../services/management.service';
import { Management } from './../model/management';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.scss']
})
export class ManagementFormComponent implements OnInit {
  // form: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  registro: Management = <Management>{};

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

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: Management) => {
          this.registro = resposta;
        }
      });
    }

  }
}
