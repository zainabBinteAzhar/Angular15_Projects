import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { UserLikedBlogsComponent } from './components/user-liked-blogs/user-liked-blogs.component';
import { RoleGuard } from './shared/role.guard';
import { MyLikedBlogsComponent } from './components/my-liked-blogs/my-liked-blogs.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    outlet: '',
    children: [
      {
        path: 'userLikedBlogs',
        component: UserLikedBlogsComponent,
        canActivate: [RoleGuard],
      },
      {
        path: 'allBlogs',
        component: BlogListComponent,
      },
      {
        path: 'myLikedBlogs',
        component: MyLikedBlogsComponent,
      },
      { path: '', redirectTo: 'allBlogs', pathMatch: 'full' },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
