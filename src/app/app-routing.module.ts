import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogPageComponent} from "./pages/catalog-page/catalog-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  { path: '', component: CatalogPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
