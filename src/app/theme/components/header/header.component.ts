import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dop-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  constructor(private _router: Router) {
  }

  startSearch() {
      jQuery('.dopravo').addClass('scrollable-container');
    jQuery('.dopravo').find('sidebar-notification-cmp').parent('div').find('#main').addClass('startSearch');
}

endSearch() {
    jQuery('.dopravo').removeClass('scrollable-container');
  jQuery('.dopravo').find('sidebar-notification-cmp').parent('div').find('#main').removeClass('startSearch');
}
  ngOnInit() {
  }

  signout(){
    localStorage.removeItem('User');
    this._router.navigateByUrl('/login');

  }

  viewProfile() {
      this._router.navigateByUrl('/pages/userProfile');
  }
}
