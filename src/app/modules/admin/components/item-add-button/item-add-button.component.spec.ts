/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemAddButtonComponent } from './item-add-button.component';

describe('ItemAddButtonComponent', () => {
  let component: ItemAddButtonComponent;
  let fixture: ComponentFixture<ItemAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
