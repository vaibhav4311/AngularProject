import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
    new Recipes('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg'),
    new Recipes('A Test Recipe - 2', 'This is simply a test', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }

}