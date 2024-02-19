import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { webserviceService } from '../services/webservice.service';


@Component({
  selector: 'app-arrayform',
  templateUrl: './arrayform.component.html',
  styleUrls: ['./arrayform.component.scss']
})
export class ArrayformComponent implements OnInit {

  constructor(private fb:FormBuilder, private webservices:webserviceService) {}  
  
  seatResponse:any;
  gridform = this.fb.group({
    seatsList: this.fb.array([])
})

addSeatinput() {
  const lessonForm = this.fb.group({
    seat: ['', Validators.required],
  });
  this.seatsList.push(lessonForm);
}

submitclick(){
  console.log(this.gridform.value)
}

seatget(){
  this.webservices.getseat().subscribe(resp=>{
    console.log(resp);
    this.seatResponse = resp;
    this.selectedSeat();

  })
}


get seatsList() {
  return this.gridform.controls["seatsList"] as FormArray;
}
selectedSeat(){
  this.seatResponse.forEach((data:any)=>{
    if(data.arrdata.length>=1){
      console.log(0)
      this.addSeatinput();
    }
  })
}
postcal(item:any, i:number){
  console.log(item);
  console.log(i);
  console.log("getit",this.seatsList.controls[i].get('seat')?.value)

console.log(this.seatsList.controls.values)
}
  ngOnInit(): void {    
    this.seatget();
  }

}
