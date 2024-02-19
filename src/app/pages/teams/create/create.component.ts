import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, fromEvent, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { teams } from 'src/app/model/pages.model';
import { playersService } from 'src/app/services/palyers.services';
import { teamsService } from 'src/app/services/teams.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterContentInit {

  constructor(private playerServices:playersService, private teamService:teamsService) { }
  teamstype = [{name: "Internation", value: "Internation"}, {name: "Local", value: "Local"}]
  filteredOptions :any=[];
  autocompletemodel = new FormControl('');
  isEdit:boolean=false;

  ngAfterContentInit(): void {
    this.eventObs$ = fromEvent(document.getElementById('btnclick')!, 'click');
console.log(this.eventObs$)  
  }


  timter = interval(1000)

  timersub?: Subscription;
eventObs$ ?: Observable<Event>
  model: teams = new teams()

  mycl(){
  }

  createpostcall(){
    this.model.id = Math.floor(100000 + Math.random() * 900000);
    console.log(this.model)
    if(this.autocompletemodel.value){
    this.model.Caption = this.autocompletemodel.value
    }
    console.log(this.model)
    this.teamService.createFun(this.model).subscribe((resp:any)=>{
      console.log(resp)
    })
  }
  ngOnInit(): void {
    this.timersub = this.timter.pipe(
      map((data:number)=> data * 2)
    ).subscribe({
      next :(res)=>{
      console.log("pipe",res);
      if(res ==8){
      }
    },error:()=>{
      console.log("err");
    }
  })
  this.timersub.unsubscribe();
    this.autocompletemodel.valueChanges.pipe(
      startWith(''),
      map((value) =>{ 
        
      this.filterdata(value).subscribe(res=>{
       this.filteredOptions = res;
       console.log(this.filteredOptions)
      });
  })
    ).subscribe();


    let observer = new Observable<any>((observer)=>{
      for(let i=0; i<=5;i++){
        i==5?setTimeout(() => observer.next(i), 1000):observer.next(i)
      }      
      observer.complete()
    })
    observer.subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(er)=>{
        console.log(er);
      },
      complete:()=>{
        console.log('completed')
      }
    })

   
  }
  

  filterdata(value:any){
    return this.playerServices.filterplayer(value)
  }
  mycll(){
    alert('as')
  }

  myget(){
    alert(this.autocompletemodel)
  }
}
