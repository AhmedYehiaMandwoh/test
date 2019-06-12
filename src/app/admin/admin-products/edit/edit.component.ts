import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
    save(product) {
      if(this.id){
        this.productSer.update(this.id, product)
      }else{
        this.productSer.create(product);
  
      }
      this.router.navigate(['/admin/products']);
    }
    delete() {
      if(confirm('Are You Sure ?')) {
        this.productSer.delete(this.id);
      }
      this.router.navigate(['/admin/products']);
  
    }
}
