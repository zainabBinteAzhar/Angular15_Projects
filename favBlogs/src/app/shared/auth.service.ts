import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { } 
  isLoggedIn(){
    return !!localStorage.getItem("token");
    // !!: return true if found, else false.
    
  }
  private loggedIn = false;

  logout() {
    this.loggedIn = false; 
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    
  }

}
