import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClienteManagementComponent } from './list-cliente-management.component';

describe('ListClienteManagementComponent', () => {
  let component: ListClienteManagementComponent;
  let fixture: ComponentFixture<ListClienteManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClienteManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClienteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
