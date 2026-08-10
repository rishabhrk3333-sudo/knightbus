export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },

  buses: {
    list: '/buses',
    details: (id: number) => `/buses/${id}`,
    create: '/buses',
  },

  schedules: {
    list: '/schedules',
    search: '/schedules/search',
    details: (id: number) => `/schedules/${id}`,
    publish: (id: number) => `/schedules/${id}/publish`,
    cancel: (id: number) => `/schedules/${id}/cancel`,
  },

  bookings: {
    create: '/bookings',
    details: (id: number) => `/bookings/${id}`,
  },
} as const;