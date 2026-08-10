import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // ─────────────────────────────────────────────
  // Public application routes
  // Requires authentication
  // ─────────────────────────────────────────────
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout/public-layout').then(
        (m) => m.PublicLayout,
      ),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then(
            (m) => m.Home,
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./features/search/search').then(
            (m) => m.Search,
          ),
      },
      {
        path: 'booking/:id',
        loadComponent: () =>
          import('./features/booking/booking').then(
            (m) => m.Booking,
          ),
      },
      {
        path: 'my-bookings',
        loadComponent: () =>
          import('./features/my-bookings/my-bookings').then(
            (m) => m.MyBookings,
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile').then(
            (m) => m.Profile,
          ),
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Authentication routes
  // No authentication required
  // ─────────────────────────────────────────────
  {
    path: 'login',
    loadComponent: () =>
      import('./layout/auth-layout/auth-layout').then(
        (m) => m.AuthLayout,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/login/login').then(
            (m) => m.Login,
          ),
      },
    ],
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./layout/auth-layout/auth-layout').then(
        (m) => m.AuthLayout,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/register/register').then(
            (m) => m.Register,
          ),
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Admin routes
  // Requires authentication
  // ─────────────────────────────────────────────
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./layout/dashboard-layout/dashboard-layout').then(
        (m) => m.DashboardLayout,
      ),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(
            (m) => m.Dashboard,
          ),
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Not Found
  // ─────────────────────────────────────────────
  {
    path: 'not-found',
    loadComponent: () =>
      import('./features/not-found/not-found').then(
        (m) => m.NotFound,
      ),
  },

  // ─────────────────────────────────────────────
  // Wildcard
  // ─────────────────────────────────────────────
  {
    path: '**',
    redirectTo: 'not-found',
  },
];