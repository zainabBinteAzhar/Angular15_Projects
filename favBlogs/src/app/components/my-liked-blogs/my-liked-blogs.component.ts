import { Component, OnInit } from '@angular/core';
import { CheckedService } from 'src/app/shared/checked.service';

interface Blog {
  id: string;
  liked: boolean;
  title: string;
  content:string;
}
@Component({
  selector: 'app-my-liked-blogs',
  templateUrl: './my-liked-blogs.component.html',
})
export class MyLikedBlogsComponent implements OnInit {

  
  likedBlogs :Blog[]= [];

  constructor(private likedBlogsService: CheckedService) {}

  ngOnInit(): void {
    // Load liked blogs for the current user from the service
    this.loadLikedBlogs();
  }

  loadLikedBlogs(): void {
    // Get the liked blogs from the service (including title and other details)
    this.likedBlogs = this.likedBlogsService.getLikedBlogs();
  }

}
