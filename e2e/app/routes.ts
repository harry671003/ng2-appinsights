import { Routes } from '@angular/router';

import { RouteComponent } from './route.component';


export const routes: Routes = [
    {
        path: 'home',
        component: RouteComponent
    },
    {
        path: 'about',
        component: RouteComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
]