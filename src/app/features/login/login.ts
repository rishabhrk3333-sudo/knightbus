import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private route = inject(Router);
  hidePassword = true;

  toggleTheme(): void {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
      document.body.classList.remove('dark-mode');
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  onSubmit(): void {
    // Handle authentication logic
  }

  loginWithGoogle(): void {
    // Google OAuth integration
  }

  loginWithApple(): void {
    // Apple OAuth integration
  }

  navigateToRegister():void{
    this.route.navigate(['/register']); 
  }
}
