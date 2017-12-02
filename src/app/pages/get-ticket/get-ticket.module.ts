import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from 'app/theme/nga.module';
import { RatingModule, ModalModule } from 'ng2-bootstrap';

import { GetTicketComponent } from './get-ticket.component';
import { routing } from './get-ticket.routing';

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
        GetTicketComponent,
    ],
    providers: [
    ]
})
export class GetTicketModule { }