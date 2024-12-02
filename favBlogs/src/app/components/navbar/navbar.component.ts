import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', // Adjust the path as necessary
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean | undefined;
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }
  onButtonClick() {
    if (this.isLoggedIn) {
      this.onLogout();
    } else {
      this.router.navigate(['/login']);
    }
  }
  onLogout() {
    this.authService.logout(); // Call logout method from the AuthService
    this.router.navigate(['home']); 
    window.location.reload();
  }
}