import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icon/icon.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLinkComponent,
    CoverComponent,
    FooterComponent,
    IconComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
