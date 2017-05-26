import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Persian Kabob', 
      'Succulent kabob plate', 
      'http://i.imgur.com/IH2zbHc.jpg',
      [new Ingredient('Ground beef', 1), new Ingredient('Tomato', 2)]),
    new Recipe(
      'Kung Pao Chicken', 
      'Delicious spicy Chinese dish', 
      'http://i.imgur.com/vuq0WzG.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Sriracha', 1)]),
    new Recipe(
      'Grilled Cayenne Shrimp', 
      'Scrumptious seafood', 
      'http://i.imgur.com/QScRvNf.jpg',
      [new Ingredient('Shrimp', 10), new Ingredient('Cayenne pepper', 1)])
  ];

  constructor() {}

  getRecipes () {
    return this.recipes.slice();
  }

}
