import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFireDatabase) { 

  }
  // Get Categories From Database
  getCategories() {
    return this.db.list('/categories').valueChanges();
  }


}
