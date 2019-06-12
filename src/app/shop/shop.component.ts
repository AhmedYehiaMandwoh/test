import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$;
  categories$;
  constructor(private productSer: ProductsService, private categServ: CategoriesService) {
    this.categories$ = this.categServ.getCategories()
    this.products$ = this.productSer.getPrdoducts()

   }

  ngOnInit() {
  }

}
