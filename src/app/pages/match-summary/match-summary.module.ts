import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from 'app/theme/nga.module';
import { RatingModule, ModalModule } from 'ng2-bootstrap';

import { MatchSummaryComponent } from './match-summary.component';
import { routing } from './match-summary.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        
        RatingModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        MatchSummaryComponent,
    ],
    providers: [
    ]
})
export class MatchSummaryModule { }