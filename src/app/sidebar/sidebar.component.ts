import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'sidebar-root',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class sidebarComponent implements OnInit{

    subMenuOpen: string | null = null;


    sidebarlist = [
        {
            label: 'Players',
            link: '/pages/players/index'
        },
        {
            label: 'Match',
            link: '/pages/match/index'
        },
        {
            label: 'Teams',
            link : '/pages/teams/create'
        },        
        {
            label: 'page',
            link: '/pages/teams/create',
            submenuname:"Teams",
            submenu:[
                
                
                {
                    label: 'create',
                    link: '/pages/teams/create',
                },
                {
                    label: 'Create',
                    link: './',
                }
            ]
        },
        {
            label: 'Product 6',
            link: './',
            submenuname:"subsecond",
            submenu:[
                {
                    label: 'Product 7',
                    link: './',
                },
                {
                    label: 'Product 8',
                    link: './',
                }
            ]
        },
    ]

    toggleSubMenu(id: any) {
        if (this.subMenuOpen === id) {
          this.subMenuOpen = null;
        } else {
          this.subMenuOpen = id;
        }
      }
      activelabel :any
      activemenufun(data:any){
        this.activelabel = data
      }
  ngOnInit(){
    console.log("ki")
  }
}
