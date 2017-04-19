/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BproviderComponent } from './bprovider.component';

describe('BproviderComponent', () => {
  let component: BproviderComponent;
  let fixture: ComponentFixture<BproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
