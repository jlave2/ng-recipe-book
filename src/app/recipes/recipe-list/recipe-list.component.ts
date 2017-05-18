import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kung Pao Chicken', 'This is a test', 'http://cf2.foodista.com/sites/default/files/styles/featured/public/field/image/chicken_24.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
