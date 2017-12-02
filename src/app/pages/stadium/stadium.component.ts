import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BigMatchesService } from 'app/theme/services/big-matches.service';

@Component({
    selector: 'dop-stadium',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./stadium.scss'],
    templateUrl: './stadium.html',
})
export class StadiumComponent implements OnInit {
    busy: Subscription;
    selectedMatch: any = {};
    isTecketSelected: boolean = false;
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


      setBlock(){
        jQuery(".stadium").toggleClass("active");
        jQuery("#block").toggleClass("active");
      }

      activeNumberOfTickets(event, isTecketSelected){
        jQuery(".number-of-tickets").removeClass("active");          
        event.target.classList.add('active');
        this.isTecketSelected = isTecketSelected;
      }
}
