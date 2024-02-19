import { Component, OnInit } from '@angular/core';
import { webserviceService } from '../services/webservice.service';
import { scoredetails, miniscore, inningsScoreList } from '../model/pages.model'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  constructor(private webservices:webserviceService){}
  miniscore:any;
  commentaryList:any;
  match:scoredetails = new scoredetails();
  myinput:any
  destroy$=new Subject<any>();

  textdata:string =""
    textarray:any=[]
  title = 'cricetscore';
  errmessaged:any;
  datrrr:any
  jrdata:any
  jsondata:any={
    "commText": "What a great advert for the Women's game. A superb batting surface, plenty of big shots and the hosts getting a thrilling win to finally beat this Australian behemoth. All this in front of 45,000 odd spectators and lakhs watching at home! We can only hope for the series to get better from here when these two face off on Wednesday evening at the Brabourne Stadium. For those in Mumbai, it is B0$ to the ground. So do try to make it and support Women's cricket. We'll be there to bring all the action for sure, for now this is B1$signing off on behalf of B2$and B3$Goodnight!",
    "timestamp": 1670779027269,
    "ballNbr": 0,
    "inningsId": 2,
    "event": "NONE",
    "batTeamName": "INDW",
    "commentaryFormats": {
        "bold": {
            "formatId": [
                "B0$",
                "B1$",
                "B2$",
                "B3$"
            ],
            "formatValue": [
                "free entry",
                "Saurabh, ",
                "Hari ",
                "Naga. "
            ]
        }
    },
    "batsmanStriker": {
        "batBalls": 0,
        "batFours": 0,
        "batId": 0,
        "batName": "",
        "batRuns": 0,
        "batSixes": 0
    },
    "bowlerStriker": {
        "bowlId": 0,
        "bowlName": "",
        "bowlMaidens": 0,
        "bowlNoballs": 0,
        "bowlOvs": 0,
        "bowlRuns": 0,
        "bowlWides": 0,
        "bowlWkts": 0
    }
}

  funfn(){
    localStorage.setItem("apino", this.myinput);
  this.webservices.myfun(this.myinput);
this.apifun();  
}
textfn(fndata:any){
  this.textdata = fndata.commText;
  this.textarray = fndata.commentaryFormats?.bold?.formatValue;
  if(this.textarray){
  this.textarray.filter((data:any, index:number)=>{
    if(index == 0){
      this.jrdata = this.textdata
    }
    let qrdata = this.jrdata.split(`B${index}$`);
    this.jrdata = qrdata[0]+data+qrdata[1];
  })
  }
  return this.jrdata != null && this.jrdata != undefined?this.jrdata:this.textdata
}

  apifun(){
    this.webservices.scoreapi().pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) =>{
      if(data != null){
      this.match = data;
      this.miniscore = this.match.miniscore;
      this.commentaryList = this.match.commentaryList;
      this.errmessaged = null;
      }else{
        this.errmessaged = "Please Enter Correct Match ID";
      }
    }, (err)=>{
      this.errmessaged = err.message;
      
    })
  }

  ngOnInit(){
this.apifun();

setInterval( () => {this.apifun(); }, 10000);
  }

}
