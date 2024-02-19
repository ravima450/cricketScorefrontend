import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { playersService } from 'src/app/services/palyers.services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private playersservice: playersService, private router: Router, private snackBar:MatSnackBar) { }
  indexlist:any =[];
  dataSource =new MatTableDataSource<any>;
  isEdit:boolean = false;
  displayedColumns: string[] = ['id', 'playerName', 'playerType', 'AutionCredit', 'BatingHand', 'BlowingHand', "Teams","Delete"];

  ngOnInit(): void {
    this.getPlayers()    
  }

  @ViewChild('MatPaginator') paginator!: MatPaginator;


  ngAfterViewInit() {
    this.indexlist.paginator = this.paginator;
  }

  paginationChange(event:PageEvent){
    console.log(event);
    const startindex = event.pageIndex * event.pageSize
    let endindex = startindex + event.pageSize;
    if (endindex > this.indexlist.length ){
      endindex = this.indexlist.length 
    }
    this.dataSource = this.indexlist.slice(startindex, endindex)
  }


  edit(id: any) {
    console.log(id);
    this.router.navigateByUrl(`/pages/players/update/${id}`)
  }
  deleteplayer(id: any) {
    console.log(id);
    this.playersservice.deletePlayer(id).subscribe({
      next: (resp) => {
        console.log(resp);
        this.snackBar.open('Player Data Removed', 'X')
        this.getPlayers();
      }
    })
  }

  getPlayers() {
    this.playersservice.getPlayers().subscribe({
      next: (resp) => {

        this.indexlist = resp;

        this.dataSource = this.indexlist.slice(0,5)
        console.log(this.indexlist);
      }
    })
  }

}
