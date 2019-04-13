import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleFormComponent} from "./simple-form/simple-form.component";

const routes: Routes = [
  {path: '', component: SimpleFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleSpikeRoutingModule { }
