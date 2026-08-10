import {
  HttpInterceptorFn,
} from '@angular/common/http';

const PUBLIC_ENDPOINTS = [
  '/api/BusTicketBooking/login',
  '/api/BusTicketBooking/customers/register',
  '/api/BusTicketBooking/partners/register',
] as const;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isPublicEndpoint = PUBLIC_ENDPOINTS.some(
    endpoint => req.url.endsWith(endpoint),
  );

  if (isPublicEndpoint) {
    return next(req);
  }

  // Token handling will go here.
  return next(req);
};