import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatchesService } from 'app/theme/services/matches.service';

@Component({
    selector: 'dop-matches',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./matches.scss'],
    templateUrl: './matches.html',
})
export class MatchesComponent implements OnInit {
    busy: Subscription;
    matches: any[] = [];
    constructor(private _matchesService: MatchesService) {
        
    }
    
    ngOnInit() {
        this.getMatches();
    }

    getMatches() {
        this.matches = [];
        this._matchesService.getMatches()
          .subscribe((data: any[]) => {
            this.matches = data;
          });
      }
}
