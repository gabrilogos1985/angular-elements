import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SimpleSpikeRoutingModule} from "./simple-spike-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [SimpleFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule, SimpleSpikeRoutingModule, HttpClientModule
  ],
  entryComponents : [
    SimpleFormComponent
  ]
})
export class SimpleSpikeModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    console.log('SimpleFormComponent cstr');
    const customElement = createCustomElement(SimpleFormComponent, {injector : this.injector});
    customElements.define('app-simple-form', customElement);
  }
}
