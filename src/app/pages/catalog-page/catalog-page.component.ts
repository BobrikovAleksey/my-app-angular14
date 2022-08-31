import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  term = ''

  loading = false

  products$: Observable<IProduct[]>
  // products: IProduct[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      finalize(() => this.loading = false)
    );
    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }

}
