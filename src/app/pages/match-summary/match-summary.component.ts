import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BigMatchesService } from 'app/theme/services/big-matches.service';

@Component({
    selector: 'dop-match-summary',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./match-summary.scss'],
    templateUrl: './match-summary.html',
})
export class MatchSummaryComponent implements OnInit {
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

      save(){
        jQuery(".save-success").addClass("active");
        jQuery(".sa-success").addClass("hide");
        setTimeout(function() {
            jQuery(".sa-success").removeClass("hide");
        }, 10);
      }

      closeMessage(){
        jQuery(".save-success").removeClass("active");
      }
}
