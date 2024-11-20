import { Component } from '@angular/core';
import { CheckedService } from 'src/app/shared/checked.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  articles = [
    {
      id: 1,
      liked: false,
      title: 'Learn Reactjs',
      content: [
        `A frontend framework to develop websites easily. Websites will be scalable and component-based.`,
      ],
    },
    {
      id: 2,
      liked: false,
      title: 'Learn Nodejs',
      content: [
        `To write backend code it is used. It is a Javascript library, very good for javascript lovers.`,
      ],
    },
    {
      id: 3,
      liked: false,
      title: 'Learn MongoDB',
      content: [
        `A document-based Database that helps in storing information/data in JSON format and makes data secure with various benefits.`,
      ],
    },
    {
      id: 4,
      liked: false,
      title: 'Learn Next.js',
      content: [
        `A full-stack Javascript framework which includes SSR. Has built-in routing and gives best results when connected with Sanity - the CMS.`,
      ],
    },
    {
      id: 5,
      liked: false,
      title: 'Learn Angular.js',
      content: [
        `A frontend framework, with the best feature of automated CLI. Built-in routing and best for enterprise-level websites.`,
      ],
    },
  ];

  constructor(private likedBlogsService: CheckedService) {}

   ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    const savedBlogs = this.likedBlogsService.getAllBlogs();
    if (savedBlogs.length === 0) {
      this.likedBlogsService.saveAllBlogs(this.articles);
    } else {
      //ensure the blogs data is updated and has the liked state
      this.articles = savedBlogs;
    }
  }

  toggleLike(blogId: number): void {
    this.likedBlogsService.toggleLike(blogId);  // Toggle liked state and save it
    this.loadBlogs();  // Reload the blogs after toggling to get the updated state
  }
}
