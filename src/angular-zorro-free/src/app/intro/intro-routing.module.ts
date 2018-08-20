import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcsComponent } from '@app/intro/dcs/dcs.component';
import { EapcintroComponent } from '@app/intro/eapcintro/eapcintro.component';
import { SmartmetallurgyComponent } from '@app/intro/smartmetallurgy/smartmetallurgy.component';
import { DocumentComponent } from '@app/intro/document/document.component';

const introRoutes: Routes = [
  { path: '', component: DcsComponent },
  { path: 'dcs', component: DcsComponent },
  { path: 'eapcintro', component: EapcintroComponent },
  { path: 'smartmetallurgy', component: SmartmetallurgyComponent },
  { path: 'document', component: DocumentComponent },

];

@NgModule({
  imports: [RouterModule.forChild(introRoutes)],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
