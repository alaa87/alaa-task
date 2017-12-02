import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'home',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./home.scss'],
    templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
    busy: Subscription;
    ngOnInit() {
    }
    constructor(private _router: Router) {
        
    }
}
