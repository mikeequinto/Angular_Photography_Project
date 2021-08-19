import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginGuard } from './core/guards/login/login.guard';
import { AdminComponent } from './modules/admin/admin.component';
import { DashboardPageComponent } from './modules/admin/pages/dashboard-page/dashboard-page.component';
import { AlbumsPageComponent } from './modules/admin/pages/albums-page/albums-page.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { AlbumPageComponent } from './modules/admin/pages/album-page/album-page.component';


const routes: Routes = [
  { path: 'admin-login', component: LoginPageComponent, canActivate: [LoginGuard] },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'albums', component: AlbumsPageComponent },
      { path: 'albums/:id', component: AlbumPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
