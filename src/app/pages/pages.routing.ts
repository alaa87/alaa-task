import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'pages',
        component: Pages,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'},
            { path: 'getTicket', loadChildren: 'app/pages/get-ticket/get-ticket.module#GetTicketModule'},
            { path: 'stadium', loadChildren: 'app/pages/stadium/stadium.module#StadiumModule'},
            { path: 'seats', loadChildren: 'app/pages/seats/seats.module#SeatsModule'},
            { path: 'matchSummary', loadChildren: 'app/pages/match-summary/match-summary.module#MatchSummaryModule'},
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
