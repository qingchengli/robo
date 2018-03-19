import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Demo02Component }  from './demo02/demo02.component';
import { Demo01Component }  from './demo01/demo01.component';
import {Testdirective} from './demo02/demo02.directive'
import {Demo03Directive} from './demo03/demo03.directive'
import {Demo03Component} from './demo03/demo03.component'
import {Demo04Component} from './demo04_ngmodel/demo04.component'
import {FatherComponent} from './demo05/demo05_father.component'
import {SonComponent} from './demo05/demo05_son.component'
import {Demo07Component} from './demo07/demo07_1.component'
import {Demo072Component} from './demo07/demo07_2.component'
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
   
  ],
  declarations: [ 
    AppComponent,
    Demo01Component,
    AppComponent,
    Demo02Component,
    Testdirective,
    Demo03Directive,
    Demo03Component,
    Demo04Component,
    FatherComponent,
    SonComponent,
    Demo072Component,
    Demo07Component
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
