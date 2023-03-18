import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInlineStyleComponent } from './user-inline-style/user-inline-style.component';
import { UserInlineComponent } from './user-inline/user-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInlineStyleComponent,
    UserInlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
