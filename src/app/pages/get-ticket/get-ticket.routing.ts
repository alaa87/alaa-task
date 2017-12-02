import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { GetTicketComponent } from './get-ticket.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: ':id',
        component: GetTicketComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
