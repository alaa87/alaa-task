import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BigMatchesService {

    constructor(private _http: Http) { }

    getMatches() {
        return this._http.get('assets/showcase/big-matches.json')
            .map((response: Response) => response.json())
    }
}