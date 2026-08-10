import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
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
    // Registration API call logic
  }

  signupWithGoogle(): void {
    // Google Signup integration
  }

  signupWithApple(): void {
    // Apple Signup integration
  }
}
