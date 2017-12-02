import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StadiumComponent } from './stadium.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: ':id',
        component: StadiumComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
