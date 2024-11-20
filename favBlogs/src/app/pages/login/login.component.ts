import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userObj: any = {
    email: '',
    password: '',
  };

  router = inject(Router);

  constructor() {
    this.initializeLocalStorage();
  }

  // Initialize local storage with sample users if it doesn't already exist
  initializeLocalStorage() {
    const existingData = localStorage.getItem('angular15local');
    if (!existingData) {
      const users = [
        { username: 'admin@gmail.com', password: '12345' },
        { username: 'user@gmail.com', password: '123' },
      ];
      localStorage.setItem('angular15local', JSON.stringify(users));
      console.log('Local storage initialized with sample users.');
    } else {
      console.log('Local storage already has data.');
    }
  }

  // Logic to happen when clicking the logIn button
  onLogin() {
    console.log('Login attempt:', this.userObj);

    // Retrieve(read) local storage data
    const isLocalData = localStorage.getItem('angular15local');
    console.log('Local Storage Data:', isLocalData);

    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);
      const isFound = users.find(
        (user: any) =>
          user.username === this.userObj.email &&
          user.password === this.userObj.password
      );
      console.log('User  Found:', isFound);

      if (isFound) {
        alert('LoggedIn successfully');

        localStorage.setItem('token', 'xj273vh3');
        isFound.username == 'admin@gmail.com'
          ? localStorage.setItem('userType', 'admin')
          : localStorage.setItem('userType', 'user');
        console.log(localStorage.getItem('userType'));

        this.router.navigate(['dashboard']).then(() => {
          window.location.reload(); // Refresh the page after navigating to dashboard
        });
      } else {
        console.log('User  not found');
        alert('User Not Found');
      }
    } else {
      alert('No data found in storage');
    }
  }
}
