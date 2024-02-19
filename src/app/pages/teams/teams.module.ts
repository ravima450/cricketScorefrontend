import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { CreateComponent } from './create/create.component';
import { TeamsComponent } from './teams.component';
import { sharedModule } from 'src/app/share.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    CreateComponent,
    TeamsComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    sharedModule
  ]
})
export class TeamsModule { }
