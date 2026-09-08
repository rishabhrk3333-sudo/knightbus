import { environment } from '../../../environments/environment';

//Dev_API_URL: https://testprojectapi.gerasim.in/api/BusTicketBooking
export const API_CONFIG = {
  baseUrl: environment.apiUrl,
} as const;