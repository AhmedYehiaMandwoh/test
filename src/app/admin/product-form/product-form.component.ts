import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
id;
  constructor(private categSrv: CategoriesService, private productSer: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.categories$ = categSrv.getCategories();

   }

  ngOnInit() {
  }
  save(product) {
    if(this.id){
      this.productSer.update(this.id, product)
    }else{
      this.productSer.create(product);

    }
    this.router.navigate(['/admin/products']);
  }


}
