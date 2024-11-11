import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  // Logout method
  logout() {
    localStorage.removeItem('token'); // Remove the token
    localStorage.removeItem('userType'); // Optionally remove userType
    console.log('User  logged out');
    this.router.navigate(['/login']); // Redirect to login page
  }
}