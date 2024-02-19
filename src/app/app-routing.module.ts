import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrayformComponent } from './arrayform/arrayform.component';
import { ScoreComponent } from './score/score.component';
import { sidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'sidebar',
        component: sidebarComponent
      },
      {
        path:'pages',
        loadChildren: ()=>import('./pages/pages.module').then(m=>m.PagesModule)
      },
      {
        path: 'arrform',
        component: ArrayformComponent
      },
      {
        path: 'score',
        component: ScoreComponent
      },
    ]
  },


  {
    path: '**',
    redirectTo: '',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
