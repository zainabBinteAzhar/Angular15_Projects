import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { UserLikedBlogsComponent } from './components/user-liked-blogs/user-liked-blogs.component';
import { MyLikedBlogsComponent } from './components/my-liked-blogs/my-liked-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    BlogListComponent,
    UserLikedBlogsComponent,
    MyLikedBlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
