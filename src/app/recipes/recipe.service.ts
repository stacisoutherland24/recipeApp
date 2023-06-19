import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-2-1200.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-2-1200.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-2-1200.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
