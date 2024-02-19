import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { CreateComponent } from './create/create.component';
import { sharedModule } from 'src/app/share.component';
import { PalyersComponent } from './palyers.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    CreateComponent,
    PalyersComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    sharedModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
