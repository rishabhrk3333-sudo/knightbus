import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthUser, LoginApiResponse, LoginRequest } from '../models/auth.models';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private apiService = inject(ApiService);
  private router = inject(Router);
  private readonly storageKey = 'knightbus_user';

  private readonly _user = signal<AuthUser | null>(this.loadUser());

  readonly user = this._user.asReadonly();

  readonly isAuthenticated = computed(() => this._user() !== null);

  navigateToLogin(): void {
  this.router.navigate(['/auth/login']);
  }

  login(credentials: LoginRequest): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(`${environment.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        const user: AuthUser = {
          id: response.id,
          fullName: response.fullName,
          email: response.email,
          mobileNo: response.mobileNo,
          projectName: response.projectName,
          roleId: response.roleId,
          roleName: response.roleName,
          isActive: response.isActive,
          createdOn: response.createdOn,
        };

        this._user.set(user);

        sessionStorage.setItem(this.storageKey, JSON.stringify(user));
      }),
    );
  }

  logout(): void {
    this._user.set(null);
    sessionStorage.removeItem(this.storageKey);
  }

  /**
   * 
   * @returns Method to load logged In user Data form session storage.
   */
  private loadUser(): AuthUser | null {
    const storedUser = sessionStorage.getItem(this.storageKey);
    if (!storedUser) {
      return null;
    }
    try {
      return JSON.parse(storedUser) as AuthUser;
    } catch {
      sessionStorage.removeItem(this.storageKey);
      return null;
    }
  }

  //Method to call the register User API endpoint with the user form data
  registerNewUser(userFormData: any): Observable<any> {
    // console.log('Registering new user with data:', userFormData);
    return this.apiService.post<any, any>('/customers/register', userFormData);
  }
}
