import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Error404Component } from './core/component/error-404/error-404.component';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { StarComponent } from './shared/component/star/star.component';
import { CourseModule } from './courses/course-module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([

      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },

 
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
