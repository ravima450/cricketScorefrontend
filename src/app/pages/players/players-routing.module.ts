import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalyersComponent } from './palyers.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path:'',
    component:PalyersComponent,
    children:[{
      path:'create',
      component:CreateComponent
    },{
      path:'index',
      component:IndexComponent
    },
    {
      path:'update/:id',
      component:CreateComponent
    },
    {
      path: '**',
      redirectTo: 'index',
      pathMatch: "full"
    },
    {
      path: '',
      redirectTo: 'index',
      pathMatch: "full"
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
