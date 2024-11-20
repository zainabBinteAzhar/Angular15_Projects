import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckedService {

  private  currentUser = localStorage.getItem('userType');

  constructor() { }


  getAllBlogs(): any[] {
    return JSON.parse(localStorage.getItem(`blogs_${this.currentUser}`) || '[]');
  }

  saveAllBlogs(blogs: any[]): void {
    localStorage.setItem(`blogs_${this.currentUser}`, JSON.stringify(blogs));
  }

  //toggle like state for specific blog
  toggleLike(blogId: number): void {
    const blogs = this.getAllBlogs();
    const blog = blogs.find(b => b.id === blogId);
    if (blog) {
      blog.liked = !blog.liked;  //toggle- liked state
      this.saveAllBlogs(blogs);   //save updated blogs
    }
  }

  //get only the liked blogs for the current user
  getLikedBlogs(): any[] {
    const allBlogs = this.getAllBlogs();
    return allBlogs.filter(blog => blog.liked);
  }
//get liked blogs for the user- as an admin
  getLikedBlogsByUser(userType: string): any[] {
    const allBlogs = JSON.parse(localStorage.getItem(`blogs_${userType}`) || '[]');
    return allBlogs.filter((blog:{ liked: any; }) => blog.liked);
  }
}
