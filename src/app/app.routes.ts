import { Routes } from '@angular/router';

export const routes: Routes = [
    //pubblic layout routes 
    {
        path: '',
        loadComponent: () =>
            import('./layout/public-layout/public-layout').then(
                (m) => m.PublicLayout),

        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home').then((m) => m.Home),
            },
            {
                path: 'search',
                loadComponent:() => import('./features/search/search').then((m) => m.Search),

            },
            {
                path:'booking/:id',
                loadComponent:() => import('./features/booking/booking').then((m) => m.Booking),
            },
            {
                path:'myBookings',
                loadComponent :()=> import('./features/my-bookings/my-bookings').then((m)=>m.MyBookings),
            },
            {
                path:'profile',
                loadComponent :()=> import('./features/profile/profile').then((m)=>m.Profile),  
            }
        ]
    },

    // Authentication layout routes
    {
        path: '',
        loadComponent: () =>
            import('./layout/auth-layout/auth-layout').then(
                (m) => m.AuthLayout),
        children: [
            {
                path: 'login',
                loadComponent: () => import('./features/login/login').then((m) => m.Login),
            },
            {
                path: 'register',
                loadComponent: () => import('./features/register/register').then((m) => m.Register),
            },
        ]
    },
    {
        path:'dashboard',
        loadComponent:() => import('./layout/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),
        children:[
            {
                path: '',
                loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
            }
        ]
    },
    {
        path:'not-found',
        loadComponent:() => import('./features/not-found/not-found').then((m) => m.NotFound),
    },
    //wildcard route for 404 page
    {
        path:'**',
        loadComponent:() => import('./features/not-found/not-found').then((m) => m.NotFound),
    }

];
