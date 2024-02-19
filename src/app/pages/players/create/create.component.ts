import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { players } from 'src/app/model/pages.model';
import { playersService } from 'src/app/services/palyers.services';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private playersservice:playersService, private snackBar:MatSnackBar, private router: Router, private activeroute:ActivatedRoute) { }

  model:players = new players()
  isEdit:boolean=false;

  ngOnInit(): void {
    this.snackBar.open('Hi, this page using create the Players', 'X',{
      duration:3000
    })
    this.getid();
    // this.snackBar.openFromComponent(CreateComponent)
  }

  create(f:NgForm){
    console.log(this.model)
    
    if(this.isEdit){
          this.playersservice.UpdatePlayers(this.model).subscribe({
      next:(resp)=>{
        console.log(resp);
        this.snackBar.open('Player Details Updated successully', 'x',{
          duration:5000
        })
        this.router.navigateByUrl('/pages/players/index')
      }
    })
    
  }else{
    this.model.id = Math.floor(100000 + Math.random() * 900000);
    this.playersservice.playerCreate(this.model).subscribe({
      next:(resp)=>{
        console.log(resp);
        this.snackBar.open('Player Created successully', 'X',{
          duration:5000
        });
        f.resetForm();
        
        
      }
    })

  }
  }

  
  getid(){
    this.activeroute.params.subscribe(resp=>{
      
      if(resp['id']){
      this.isEdit = true;
      this.editDataGet(resp['id'])
    }
    })
  }
  editDataGet(id:number){    
    this.playersservice.getPlayerOne(id).subscribe({     
      next:(resp)=>{        
        console.log(resp);
        this.model = resp
      },
      error:(err)=>{
        
        this.router.navigateByUrl('/pages/players/index')
        console.log(err);
      }
    })
  }
  credit=[
    { name:"5.0", value:5.0},
    { name:"5.5", value:5.5},
    { name:"6.0", value:6.0},
    { name:"6.5", value:6.5},
    { name:"7.0", value:7.0},
    { name:"7.5", value:7.5},
    { name:"8.0", value:8.0},
    { name:"8.5", value:8.5},
    { name:"9.0", value:9.0},
    { name:"9.5", value:9.5},
    { name:"10.0", value:10.0}
  ]


  playertype=[
    {name:"Blower", value:"Blower"},
    {name:"Batter", value:"Batter"},
    {name:"All-Rounder", value:"All-Rounder"}
]

  hands=[{
    name:"Right",
    value:"Right"
  },{
    name:"Left",
    value:"Left"
  }]

}
