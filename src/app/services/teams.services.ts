

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import {APPCONSTANT} from '../_constant'
import { players } from '../model/pages.model';

@Injectable({
    providedIn: 'root'
  })
  export class teamsService {

    constructor (private http : HttpClient){}

    teamCreate(model:players):Observable<any>{
        return this.http.post<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}`, model);
    }

    createFun(model:any):Observable<any>{
        return this.http.post<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.TEAMCREATE}`,model)
    }
    
  }