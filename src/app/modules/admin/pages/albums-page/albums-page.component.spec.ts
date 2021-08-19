/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumsPageComponent } from './albums-page.component';

describe('PicturesPageComponent', () => {
  let component: AlbumsPageComponent;
  let fixture: ComponentFixture<AlbumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
