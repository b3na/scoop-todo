import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { TodoFilterPipe } from './shared/todo-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule, 
    NgbAlertModule, 
    FormsModule, 
    JsonPipe
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
