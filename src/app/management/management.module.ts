import { MatToolbarModule } from '@angular/material/toolbar';
import { ManagamentRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management/management.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {Component} from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ManagementFormComponent } from './management-form/management-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementListComponent } from './management-list/management-list.component';
import { NoteManagementComponent } from './note-management/note-management.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ManagementComponent,
    ManagementFormComponent,
    ManagementListComponent,
    NoteManagementComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    ManagamentRoutingModule,
    SharedModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModules { }
