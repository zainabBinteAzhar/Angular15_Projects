import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { } 

  //check user is logged in or not by checking token is present in localStorage or not
  //if not: automatically means, user is not loggedIn else: loggedIn

  isLoggedIn(){
    return !!localStorage.getItem("token");
    // !!: return true if found, else false.
    
  }
  private loggedIn = false;

  logout() {
    this.loggedIn = false; // Implement your logout logic (e.g., clear tokens)
    // Additional logout logic can be added here
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    
  }

}
