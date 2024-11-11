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

  // Save all blogs (including liked state) to localStorage
  saveAllBlogs(blogs: any[]): void {
    localStorage.setItem(`blogs_${this.currentUser}`, JSON.stringify(blogs));
  }

  // Toggle the like state for a specific blog
  toggleLike(blogId: number): void {
    const blogs = this.getAllBlogs();
    const blog = blogs.find(b => b.id === blogId);
    if (blog) {
      blog.liked = !blog.liked;  // Toggle the liked state
      this.saveAllBlogs(blogs);   // Save the updated blogs
    }
  }

  // Get only the liked blogs for the current user
  getLikedBlogs(): any[] {
    const allBlogs = this.getAllBlogs();
    return allBlogs.filter(blog => blog.liked);
  }

  getLikedBlogsByUser(userType: string): any[] {
    const allBlogs = JSON.parse(localStorage.getItem(`blogs_${userType}`) || '[]');
    return allBlogs.filter((blog: { liked: any; }) => blog.liked);
  }
}
