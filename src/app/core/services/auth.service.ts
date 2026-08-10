import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import {
  AuthUser,
  LoginApiResponse,
  LoginRequest,
} from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  private readonly storageKey = 'knightbus_user';

  private readonly _user = signal<AuthUser | null>(
    this.loadUser(),
  );

  readonly user = this._user.asReadonly();

  readonly isAuthenticated = computed(
    () => this._user() !== null,
  );

  login(credentials: LoginRequest): Observable<LoginApiResponse> {
    return this.http
      .post<LoginApiResponse>(
        `${environment.apiUrl}/login`,
        credentials,
      )
      .pipe(
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

          localStorage.setItem(
            this.storageKey,
            JSON.stringify(user),
          );
        }),
      );
  }

  logout(): void {
    this._user.set(null);
    localStorage.removeItem(this.storageKey);
  }

  private loadUser(): AuthUser | null {
    const storedUser = localStorage.getItem(this.storageKey);

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser) as AuthUser;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }
}