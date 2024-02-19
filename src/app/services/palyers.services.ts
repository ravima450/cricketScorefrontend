import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import {APPCONSTANT} from '../_constant'
import { players } from '../model/pages.model';

@Injectable({
    providedIn: 'root'
  })
  export class playersService {

    constructor (private http : HttpClient){}

    playerCreate(model:players):Observable<any>{
        return this.http.post<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}`, model);
    }
    getPlayers():Observable<any>{
      return this.http.get<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}`)
    }
    UpdatePlayers(model:players):Observable<any>{
      return this.http.put<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}/${model.id}`, model)
    }
    getPlayerOne(id:number):Observable<any>{
      return this.http.get<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}/${id}`)
    }
    deletePlayer(id:number):Observable<any>{
      return this.http.delete<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}/${id}`)
    }
    filterplayer(data:any):Observable<any>{
      return this.http.get<any>(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.PLAYER}?playerName_like=${data}`)
    }
  }