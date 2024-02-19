import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  
  {
    path:'',
    component:TeamsComponent,
    children:[{
      path:'create',
      component:CreateComponent
    },
    {
      path: '**',
      redirectTo: 'create',
      pathMatch: "full"
    },
    {
      path: '',
      redirectTo: 'create',
      pathMatch: "full"
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
