import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

 
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

export const rootRouterConfig: Routes = [
 { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

