import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateService } from './services/calculate.service';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DemoComponent } from './demo/demo.component';
import { ItemService } from './services/item.service';
import { ViewallComponent } from './viewall/viewall.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DemoComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalculateService,ItemService],
  bootstrap: [ViewallComponent]
})
export class AppModule { }
