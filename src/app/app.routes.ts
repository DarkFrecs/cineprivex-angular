import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VerifiedGirlsComponent } from './pages/verified-girls/verified-girls.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "verified-girls",
        component: VerifiedGirlsComponent
    }
];
