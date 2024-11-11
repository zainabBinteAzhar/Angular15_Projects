import { Component } from '@angular/core';
import { CheckedService } from 'src/app/shared/checked.service';

@Component({
  selector: 'app-user-liked-blogs',
  templateUrl: './user-liked-blogs.component.html',
})
export class UserLikedBlogsComponent {

  likedBlogs: any[] = [];

  constructor(private checkedService: CheckedService) { }

  ngOnInit(): void {
    this.getLikedBlogs();
  }

  getLikedBlogs(): void {
    this.likedBlogs = this.checkedService.getLikedBlogsByUser('user');
  }
}
