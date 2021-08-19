/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumPageComponent } from './album-page.component';

describe('AlbumPageComponent', () => {
  let component: AlbumPageComponent;
  let fixture: ComponentFixture<AlbumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
