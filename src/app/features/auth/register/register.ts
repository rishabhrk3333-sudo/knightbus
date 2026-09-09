import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { ShowErrorPipe } from '../../../core/pipes/show-error-pipe';
import { AuthService } from '../../../core/services/auth.service';
import { NumbersOnly } from '../../../shared/directives/numbers-only-validation/numbers-only';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule,ShowErrorPipe, MatSnackBarModule, NumbersOnly],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  hidePassword = true;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef);
  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // errosMessage = VALIDATION_CONSTANTS;

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

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobileNumber: ['',Validators.required],
      password: ['', Validators.required],
      terms: ['', [Validators.required]],
    });
  }

  isValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return field ? field.valid || !field.touched : false;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.registerUser(this.registerForm.value);
    }
  }

  //Method to register a new user by calling the AuthService's registerNewUser method and handling the response
  registerUser(userFormData: any): void {
    const payload = {
      fullName: userFormData.fullName,
      email: userFormData.emailId,
      mobileNo: userFormData.mobileNumber,
      password: userFormData.password,
    };
    this.authService
      .registerNewUser(payload)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this._snackBar.open('User registered successfully', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        },
        error: (error) => {
          console.error('Error registering user:', error);
        },
      });
  }
}
