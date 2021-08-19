/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumDeleteButtonComponent } from './album-delete-button.component';

describe('AlbumDeleteButtonComponent', () => {
  let component: AlbumDeleteButtonComponent;
  let fixture: ComponentFixture<AlbumDeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDeleteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
