
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListManagementComponent } from './list-management/list-management.component';
import { ManagementFormComponent } from './management-form/management-form.component';
import { NoteManagementComponent } from './note-management/note-management.component';
import { CommonModule } from '@angular/common';
import { ManagamentRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management/management.component';
import { ListClienteManagementComponent } from './list-cliente-management/list-cliente-management.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagementComponent,
    ManagementFormComponent,
    NoteManagementComponent,
    HeaderComponent,
    FooterComponent,
    ListManagementComponent,
    ListClienteManagementComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    ManagamentRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class ManagementModules { }
