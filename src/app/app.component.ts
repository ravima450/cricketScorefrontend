import { Component, OnInit } from '@angular/core';
import { webserviceService } from './services/webservice.service';
import { scoredetails, miniscore, inningsScoreList } from './model/pages.model'
import { Subject, takeUntil } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(public oidcSecurityService: OidcSecurityService) {}



  login() {
    this.oidcSecurityService.authorizeWithPopUp().subscribe(resp=>console.log(resp));
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
  ngOnInit(){
    this.oidcSecurityService.checkAuth().subscribe((data) => {
      console.log(data)
    });
console.log(this.oidcSecurityService.isAuthenticated().subscribe(resp=>console.log(resp)))
}
}
