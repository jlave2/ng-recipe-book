import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Persian Kabob', 'Succulent kabob plate', 'http://i.imgur.com/IH2zbHc.jpg'),
    new Recipe('Kung Pao Chicken', 'Delicious spicy Chinese dish', 'http://i.imgur.com/vuq0WzG.jpg'),
    new Recipe('Grilled Cayenne Shrimp', 'Scrumptious seafood', 'http://i.imgur.com/QScRvNf.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
