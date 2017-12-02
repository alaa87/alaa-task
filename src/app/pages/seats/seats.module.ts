import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from 'app/theme/nga.module';
import { RatingModule, ModalModule } from 'ng2-bootstrap';

import {CheckboxModule} from 'primeng/primeng';
import { SeatsComponent } from './seats.component';
import { routing } from './seats.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        CheckboxModule,
        routing,
        
        RatingModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        SeatsComponent,
    ],
    providers: [
    ]
})
export class SeatsModule { }