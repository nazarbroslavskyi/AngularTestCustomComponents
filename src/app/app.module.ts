import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VdeAttributeDirective } from './directives/slate-vd-directive';
import { Comment } from "@angular/compiler";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'person-info', component: PersonInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VdeAttributeDirective,
    PersonInfoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
