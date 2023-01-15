import { NoteManagementComponent } from './note-management/note-management.component';
import { ManagementFormComponent } from './management-form/management-form.component';
import { ManagementComponent } from './management/management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ManagementComponent },
  { path: 'new', component: ManagementFormComponent },
  { path: 'note', component: NoteManagementComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagamentRoutingModule { }
