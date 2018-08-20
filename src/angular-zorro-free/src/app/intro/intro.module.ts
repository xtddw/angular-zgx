import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { DcsComponent } from './dcs/dcs.component';
import { EapcintroComponent } from './eapcintro/eapcintro.component';
import { SmartmetallurgyComponent } from './smartmetallurgy/smartmetallurgy.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { DocumentComponent } from './document/document.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IntroRoutingModule,
  ],
  declarations: [
    DcsComponent,
    EapcintroComponent,
    SmartmetallurgyComponent,
    DocumentComponent,
  ]
})
export class IntroModule { }
