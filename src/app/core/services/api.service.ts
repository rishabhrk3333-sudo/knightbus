import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = API_CONFIG.baseUrl;

  get<T>(url: string) {
    return this.http.get<T>(`${this.baseUrl}${url}`);
  }

  post<TRequest, TResponse>(url: string, body: TRequest) {
    return this.http.post<TResponse>(
      `${this.baseUrl}${url}`,
      body
    );
  }

  put<TRequest, TResponse>(url: string, body: TRequest) {
    return this.http.put<TResponse>(
      `${this.baseUrl}${url}`,
      body
    );
  }

  delete<T>(url: string) {
    return this.http.delete<T>(
      `${this.baseUrl}${url}`
    );
  }
}