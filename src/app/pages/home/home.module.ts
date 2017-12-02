import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from 'app/theme/nga.module';
import { RatingModule, ModalModule } from 'ng2-bootstrap';
import { BigMatchComponent } from 'app/pages/big-match';
import { MatchesComponent } from 'app/pages/matches';
import { MatchViewerComponent } from'app/pages/match-viewer';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';

import {GalleriaModule, TabViewModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        GalleriaModule,
        TabViewModule,
        
        RatingModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        HomeComponent,
        BigMatchComponent,
        MatchesComponent,
        MatchViewerComponent,
    ],
    providers: [
    ]
})
export class HomeModule { }