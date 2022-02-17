import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  currentCategory: Category | undefined;  //"strictPropertyInitialization": false,  newlemedik yani bu yapıyı false yaparak interface in referansından yararlanıyoruz.Yararlamak istediğimiz için bunu fal se yaptık
  //Diğer türlü yapmak istiyorsak ya class şeklinde tanımlayıp newlememiz gerekiyor yada fake properrtilerini tanımlamak gerekiyor
  //angular da kullanacağımız ifadeleri bu şekilde bir yerde tutmamız gerekiyor.Html burdan yürüyor çünkü

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {

    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;

    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }


  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {

      return "list-group-item active"
    } else {

      return "list-group-item"
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {

      return "list-group-item active"
    } else {

      return "list-group-item"
    }
  }

  setCurrentCategoryEmpty() {
    this.currentCategory=undefined
  }
}
