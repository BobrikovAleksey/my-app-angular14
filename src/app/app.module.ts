import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { IconComponent } from './components/icon/icon.component';
import { ProductComponent } from './components/product/product.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    FilterProductsPipe,
    AppComponent,
    AboutPageComponent,
    CardComponent,
    CardContainerComponent,
    CardLinkComponent,
    CatalogPageComponent,
    CoverComponent,
    FooterComponent,
    GlobalErrorComponent,
    IconComponent,
    ProductComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
