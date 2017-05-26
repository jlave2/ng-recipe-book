import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private shoppingListService: ShoppingListService) { }

  sendToShoppingList() {
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
