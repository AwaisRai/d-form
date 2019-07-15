import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/components/layout/full-layout/full-layout.component';
import { content } from "./shared/routes/content-routes";
import { full } from './shared/routes/full.routes';
import { AdminGuard } from './shared/guard/admin.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/sample/sample-component',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   children: content
  // },
  // {
  //   path: '**',
  //   redirectTo: '/sample/sample-component'
  // }

  // {
  //   path: '',
  //   redirectTo: 'dashboard/default',
  //   pathMatch: 'full'
  // },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AdminGuard],
    children: content
  },
  // // {
  // //   path: '',
  // //   component: FullLayoutComponent,
  // //   canActivate: [AdminGuard],
  // //   children: full
  // // },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
