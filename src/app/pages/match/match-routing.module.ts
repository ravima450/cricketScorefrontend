import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MatchComponent } from './match.component';

const routes: Routes = [
  {
    path:'',
    component:MatchComponent,
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
export class MatchRoutingModule { }
