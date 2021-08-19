import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { speedometer2, arrowRightSquare, arrowLeftSquare, doorClosed, cardImage } from 'ngx-bootstrap-icons';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { ItemAddButtonComponent } from './components/item-add-button/item-add-button.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { AlbumEditFormComponent } from './components/album-edit-form/album-edit-form.component';
import { AlbumEditButtonComponent } from './components/album-edit-button/album-edit-button.component';
import { AlbumDeleteButtonComponent } from './components/album-delete-button/album-delete-button.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';

const icons = {
  speedometer2,
  arrowRightSquare,
  arrowLeftSquare,
  doorClosed,
  cardImage
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  declarations: [
    AdminComponent,
    DashboardPageComponent,
    AlbumPageComponent,
    AlbumsPageComponent,
    SidebarComponent,
    ItemListComponent,
    ItemCardComponent,
    ItemAddButtonComponent,
    AlbumEditButtonComponent,
    AlbumDeleteButtonComponent,
    ItemFormComponent,
    AlbumEditFormComponent
  ]
})
export class AdminModule { }
