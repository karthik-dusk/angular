import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path:'index',
    redirectTo: '/'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path:'user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path:'home',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
