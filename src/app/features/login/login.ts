import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);
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


  //method to handle login form submission
  login(formData:NgForm): void {
  const credentials = {
    projectName: 'BusTicketBooking', 
    email: formData.value.userName || '', 
    password: formData.value.password || '', 
  }
  this.authService.login(credentials).subscribe({
    next: () => {
      this.router.navigate(['/']);
    },
  });
}

  navigateToRegister():void{
    this.router.navigate(['/register']); 
  }


}
