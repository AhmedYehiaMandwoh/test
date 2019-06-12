import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CategoriesService } from '../services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  product={};
  categories$;
  id;
    constructor(private categSrv: CategoriesService, private productSer: ProductsService, private router: Router, private route: ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id){
        this.categories$ = this.categSrv.getCategories();
        this.productSer.getProductsById(this.id).subscribe(prod => {
          if(prod) {
            this.product = prod; 
          }
        })
      }
     }

  ngOnInit() {
  }
  

}
