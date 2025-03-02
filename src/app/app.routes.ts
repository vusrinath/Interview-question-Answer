import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        component : HomeComponent,
        title : 'home',
        path: 'home',
        pathMatch: 'full'
    },
    
];


