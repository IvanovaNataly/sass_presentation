import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { LoaderComponent } from "./loader/loader.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LandscapePlaceholder } from "./landscape-placeholder/landscape.component";

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    LoaderComponent,
    SidebarComponent,
    HeaderComponent,
    LandscapePlaceholder
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
