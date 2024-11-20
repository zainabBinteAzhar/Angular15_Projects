import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
    let Role=localStorage.getItem("userType");
    if(Role=="admin"){
      return true;
    }
    alert("You don't have admin rights");
    return false;
  }
  
}
