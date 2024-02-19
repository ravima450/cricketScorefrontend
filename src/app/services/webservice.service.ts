import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import {APPCONSTANT} from '../_constant'

@Injectable({
  providedIn: 'root'
})
export class webserviceService {

  apinumber: any = this.myfun();

  myfun(data: any = localStorage.getItem("apino")) {

    this.apinumber = data;
    return this.apinumber != null && this.apinumber != undefined && this.apinumber != "undefined" ? this.apinumber : 52013;
  }

  cribuzzapidata: string = `https://www.cricbuzz.com/api/cricket-match/commentary/${this.apinumber}`;

  constructor(private http: HttpClient) { }

  public getdatast: string = "https://api.ipify.org?format=json";

  getJSON(): Observable<any> {
    return this.http.get(this.getdatast);
  }

  scoreapi(): Observable<any> {
    let dat = this.myfun();
    return this.http.get(`https://www.cricbuzz.com/api/cricket-match/commentary/${dat}`);
  }

getseat():Observable<any>{
  console.log(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.posts}`)
  return this.http.get(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.posts}`)
}
bookedseat(data:any):Observable<any>{
  return this.http.get(`${APPCONSTANT.BASE_API}${APPCONSTANT.API.postcall}`, data)
}
  
}