import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
    selector: 'pages',
    template: `
    <dop-header></dop-header>
    <dop-sidebar></dop-sidebar>
    <router-outlet></router-outlet>
    `
})
export class Pages {

    constructor() {
    }

    ngOnInit() {

    }
}
