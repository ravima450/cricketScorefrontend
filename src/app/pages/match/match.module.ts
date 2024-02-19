import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { CreateComponent } from './create/create.component';
import { MatchComponent } from './match.component';


@NgModule({
  declarations: [
    CreateComponent,
    MatchComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
