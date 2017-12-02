import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BigMatchesService } from 'app/theme/services/big-matches.service';

@Component({
    selector: 'dop-get-ticket',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./get-ticket.scss'],
    templateUrl: './get-ticket.html',
})
export class GetTicketComponent implements OnInit {
    busy: Subscription;
    selectedMatch: any = {};
    constructor(private _bigMatchesService: BigMatchesService, private _route:ActivatedRoute) {
        
    }
     
    ngOnInit() {

        this.busy = this._route.params.subscribe(
            params => {
                this.getMatches(params['id']);
                    
            });
        

    }
    getMatches(item) {
        this.selectedMatch = {};
        this._bigMatchesService.getMatches()
          .subscribe((data: any) => {
            this.selectedMatch =  data.filter(m => m.Id === item)[0];
          });
      }
}
