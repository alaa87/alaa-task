import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SeatsComponent } from './seats.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: ':id',
        component: SeatsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
