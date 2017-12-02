import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MatchSummaryComponent } from './match-summary.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: ':id',
        component: MatchSummaryComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
