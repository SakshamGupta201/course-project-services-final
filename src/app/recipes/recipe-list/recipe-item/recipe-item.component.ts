import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelected() {
    const recipeIndex = this.recipeService.findRecipeIndex(this.recipe);
    this.router.navigate(['recipes', recipeIndex+1]);
  }
}
