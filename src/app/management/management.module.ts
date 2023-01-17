
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListManagementComponent } from './list-management/list-management.component';
import { NgModule } from '@angular/core';
import { ManagementFormComponent } from './management-form/management-form.component';
import { NoteManagementComponent } from './note-management/note-management.component';
import { CommonModule } from '@angular/common';
import { ManagamentRoutingModule } from './management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './management/management.component';


@NgModule({
  declarations: [
    ManagementComponent,
    ManagementFormComponent,
    NoteManagementComponent,
    HeaderComponent,
    FooterComponent,
    ListManagementComponent
  ],
  imports: [
    CommonModule,
    ManagamentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModules { }
