import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatchViewerService } from 'app/theme/services/match-viewer.service';
import { MatchViewer } from './match-viewer';
@Component({
    selector: 'dop-match-viewer',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./match-viewer.scss'],
    templateUrl: './match-viewer.html',
})
export class MatchViewerComponent implements OnInit {
    busy: Subscription;
    matches: any[] = [];
    selectedMatch: MatchViewer = new MatchViewer;
    selectedIndex: number = 0;
    totalLength: number = 0;
    constructor(private _matchViewerService: MatchViewerService) {
        
    }
    
    ngOnInit() {
        this.getMatches();
        this.selectedMatch = new MatchViewer;
    }

    getMatches() {
        this.matches = [];
        this._matchViewerService.getMatches()
          .subscribe((data: any[]) => {
            this.matches = data;
            this.selectedIndex = 0;
            this.totalLength = this.matches.length;
            this.selectedMatch = this.matches[this.selectedIndex];
          });
      }

      back(){
          if (this.selectedIndex == 0){
              return;
          }
          else{
              this.selectedIndex = this.selectedIndex - 1;
              this.selectedMatch = this.matches[this.selectedIndex];
          }
      }

      next(){
        if (this.selectedIndex == this.totalLength - 1){
            return;
        }
        else{
            this.selectedIndex = this.selectedIndex + 1;
            this.selectedMatch = this.matches[this.selectedIndex];
        }
    }
}
