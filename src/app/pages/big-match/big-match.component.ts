import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BigMatchesService } from 'app/theme/services/big-matches.service';

@Component({
    selector: 'dop-big-match',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./big-match.scss'],
    templateUrl: './big-match.html',
})
export class BigMatchComponent implements OnInit {
    busy: Subscription;
    matches: any[] = [];
    constructor(private _bigMatchesService: BigMatchesService) {
        
    }
    
    ngOnInit() {
        this.getMatches();
    }

    getMatches() {
        this.matches = [];
        this._bigMatchesService.getMatches()
          .subscribe((data: any[]) => {
            this.matches = data;
          });
      }
}
