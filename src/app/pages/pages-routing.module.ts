import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'players',
        loadChildren: ()=>import('./players/players.module').then(m=>m.PlayersModule)
      },
      {
        path:"match",
        loadChildren:()=>import('./match/match.module').then(m=>m.MatchModule)
      },
      {
        path:'teams',
        loadChildren:()=>import('./teams/teams.module').then(m=>m.TeamsModule)
      },
      {
        path: '**',
        redirectTo: 'players',
        pathMatch: "full"
      },
      {
        path: '',
        redirectTo: 'players',
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
