/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumEditButtonComponent } from './album-edit-button.component';

describe('AlbumEditButtonComponent', () => {
  let component: AlbumEditButtonComponent;
  let fixture: ComponentFixture<AlbumEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
